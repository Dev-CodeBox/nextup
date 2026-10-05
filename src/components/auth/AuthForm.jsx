"use client";

import { signupUser, loginUser } from "@/actions/auth.actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "./Input";
import Button from "./Button";

export default function AuthForm() {

    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();


    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        let result;

        if (isLogin) {
            result = await loginUser(formData);

            if (result.success) {
                router.push("/dashboard");
                return;
            }
        } else {
            result = await signupUser(formData);

            if (result.success) {
                setIsLogin(true);
            }
        }

        setMessage(result.message);
    }

    return (

        <div className="w-full max-w-[380px]">


            <div className="flex bg-[#0d3b82] rounded-full p-1 shadow-lg mb-8">


                <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isLogin
                            ? "bg-white text-[#0d3b82]"
                            : "text-white"
                        }`}
                >
                    Login
                </button>



                <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isLogin
                            ? "bg-white text-[#0d3b82]"
                            : "text-white"
                        }`}
                >
                    Sign-up
                </button>


            </div>

            <div className="bg-white/40 backdrop-blur-md rounded-md border border-white/30 shadow-2xl p-8">


                <form onSubmit={handleSubmit}>


                    <div className="space-y-5">


                        {!isLogin && (
                            <Input
                                name="name"
                                icon="user"
                                type="text"
                                placeholder="Name"
                            />
                        )}

                        <Input
                            name="email"
                            icon="mail"
                            type="email"
                            placeholder="Email Address"
                        />

                        <Input
                            name="password"
                            icon="lock"
                            type="password"
                            placeholder="Password"
                        />

                        {!isLogin && (
                            <Input
                                name="confirmPassword"
                                icon="lock"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        )}

                    </div>

                    <div className="mt-8">

                        <Button type="submit">
                            {isLogin ? "LOGIN" : "SIGN-UP"}
                        </Button>

                    </div>

                </form>

                {
                    message &&
                    <p className="text-center mt-4 text-sm">
                        {message}
                    </p>
                }

            </div>

        </div>

    );
}