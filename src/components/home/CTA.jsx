"use client";

import { useRouter } from "next/navigation";

import { ArrowRight, Rocket } from "lucide-react";

export default function CTA() {
    const router = useRouter();
    return (
        <section
            className="
                py-14
                sm:py-16
            "
        >
            <div
                className="
                    max-w-6xl
                    mx-auto
                    px-4
                    sm:px-6
                "
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-2xl
                        bg-[#0d3b82]
                        px-6
                        py-10
                        sm:px-10
                        sm:py-12
                        text-center
                        shadow-xl
                    "
                >
                    <div
                        className="
                            absolute
                            -top-20
                            -right-20
                            w-56
                            h-56
                            rounded-full
                            bg-blue-300/20
                            blur-3xl
                        "
                    />
                    <div
                        className="
                            absolute
                            -bottom-20
                            -left-20
                            w-56
                            h-56
                            rounded-full
                            bg-indigo-300/20
                            blur-3xl
                        "
                    />
                    <div
                        className="
                            relative
                            z-10
                            max-w-xl
                            mx-auto
                        "
                    >
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                bg-white/10
                                text-white
                                px-3
                                py-1.5
                                rounded-full
                                text-xs
                                sm:text-sm
                                font-medium
                            "
                        >
                            <Rocket size={16} />
                            Start Your Career Journey
                        </div>
                        <h2
                            className="
                                mt-5
                                text-2xl
                                sm:text-3xl
                                font-bold
                                text-white
                                leading-snug
                            "
                        >
                            Build Your Career With
                            <span
                                className="
                                    block
                                    text-blue-200
                                "
                            >
                                AI Intelligence
                            </span>
                        </h2>
                        <p
                            className="
                                mt-3
                                text-sm
                                sm:text-base
                                text-blue-100
                                leading-relaxed
                            "
                        >
                            Analyze your resume, find skill gaps and get personalized
                            recommendations to achieve your career goals.
                        </p>
                        <button
                            onClick={() => router.push("/auth")}
                            className="
                                mt-6
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                bg-white
                                text-[#0d3b82]
                                px-7
                                py-3
                                rounded-full
                                text-sm
                                sm:text-base
                                font-semibold
                                hover:bg-blue-50
                                transition
                                shadow-md
                                cursor-pointer
                            "
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
