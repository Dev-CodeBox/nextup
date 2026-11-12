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
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      return {
        success: false,
        message: "All fields are required",
      };
    }

    if (password !== confirmPassword) {
      return {
        success: false,
        message: "Passwords do not match",
      };
    }

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
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
    console.log("SIGNUP ERROR:", error);
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

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

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

    // IMPORTANT FOR NEXT 15/16

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,

      secure: process.env.NODE_ENV === "production",

      sameSite: "lax",

      maxAge: 60 * 60 * 24 * 7,

      path: "/",
    });

    return {
      success: true,

      message: "Login successful",

      role: user.role,
    };
  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return {
      success: false,

      message: error.message,
    };
  }
}
