"use server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function signupUser(formData) {
  try {
    await connectDB();

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Check existing user

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    // Password hash

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return {
      success: true,
      message: "Account created successfully",
      userId: user._id.toString(),
    };
  } catch (error) {
    console.log("Signup Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}

export async function loginUser(formData) {
  try {
    await connectDB();

    const email = formData.get("email");
    const password = formData.get("password");

    // Find user

    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    // Compare password

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    // Create JWT

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // Store token in cookie

    const cookieStore = await cookies();

    console.log("JWT Token:", token);

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    console.log("Cookie Set Successfully");

    return {
      success: true,
      message: "Login successful",
      role: user.role,
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
