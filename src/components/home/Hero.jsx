"use client";

import { useRouter } from "next/navigation";

import {
    ArrowRight,
    FileText,
    Brain,
    Target
} from "lucide-react";


export default function Hero() {

    const router = useRouter();

    const features = [
        {
            icon: FileText,
            title: "Resume Analysis"
        },
        {
            icon: Target,
            title: "Skill Gap"
        },
        {
            icon: Brain,
            title: "AI Courses"
        }
    ];


    return (
        <section
            className="
            flex
            items-center
            bg-gradient-to-br
            from-blue-50
            via-white
            to-indigo-100
            pt-20
            pb-12
            "
        >
            <div
                className="
                max-w-6xl
                w-full
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                py-12
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-8
                lg:gap-12
                items-center
                "
            >
                <div
                    className="
                    text-center
                    lg:text-left
                    "
                >
                    <div
                        className="
                        inline-flex
                        items-center
                        gap-2
                        bg-blue-100
                        text-[#0d3b82]
                        px-3
                        py-1.5
                        rounded-full
                        text-sm
                        font-medium
                        mb-5
                        "
                    >
                        <Brain size={16} />
                        AI Powered Career Assistant
                    </div>
                    <h1
                        className="
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        font-bold
                        leading-tight
                        text-gray-900
                        "
                    >
                        Build Your Career With
                        <span
                            className="
                            block
                            text-[#0d3b82]
                            "
                        >
                            AI Intelligence
                        </span>
                    </h1>
                    <p
                        className="
                        mt-4
                        max-w-lg
                        mx-auto
                        lg:mx-0
                        text-base
                        sm:text-lg
                        text-gray-600
                        leading-relaxed
                        "
                    >

                        Upload your resume, analyze your ATS score,
                        discover skill gaps and get personalized
                        learning recommendations to achieve your goals.

                    </p>
                    <div
                        className="
                        mt-6
                        flex
                        flex-col
                        sm:flex-row
                        gap-3
                        justify-center
                        lg:justify-start
                        "
                    >
                        <button
                            type="button"
                            onClick={() => router.push("/auth")}
                            className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-[#0d3b82]
                            text-white
                            px-7
                            py-3.5
                            rounded-full
                            font-semibold
                            shadow-md
                            hover:bg-[#0a2f67]
                            transition
                            cursor-pointer
                            "
                        >
                            Get Started
                            <ArrowRight size={18} />

                        </button>
                        <button
                            type="button"
                            className="
                            px-7
                            py-3.5
                            rounded-full
                            border
                            border-[#0d3b82]
                            text-[#0d3b82]
                            font-semibold
                            hover:bg-blue-50
                            transition
                            cursor-pointer
                            "
                        >
                            Learn More
                        </button>
                    </div>
                    <div
                        className="
                        mt-8
                        grid
                        grid-cols-1
                        sm:grid-cols-3
                        gap-3
                        "
                    >
                        {
                            features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="
                                        bg-white
                                        rounded-xl
                                        p-3
                                        shadow-sm
                                        hover:shadow-md
                                        transition
                                        flex
                                        flex-col
                                        items-center
                                        lg:items-start
                                        "
                                    >
                                        <Icon
                                            size={24}
                                            className="text-[#0d3b82]"
                                        />

                                        <p
                                            className="
                                            mt-2
                                            text-sm
                                            font-semibold
                                            text-gray-800
                                            "
                                        >
                                            {feature.title}
                                        </p>

                                    </div>

                                );

                            })
                        }

                    </div>

                </div>
                <div
                    className="
                    flex
                    justify-center
                    "
                >
                    <div
                        className="
                        w-64
                        h-64
                        sm:w-80
                        sm:h-80
                        lg:w-[350px]
                        lg:h-[350px]
                        rounded-full
                        bg-[#0d3b82]
                        flex
                        items-center
                        justify-center
                        shadow-xl
                        "
                    >
                        <div
                            className="
                            w-44
                            h-44
                            sm:w-56
                            sm:h-56
                            bg-white
                            rounded-3xl
                            flex
                            flex-col
                            items-center
                            justify-center
                            shadow-lg
                            "
                        >
                            <FileText
                                size={55}
                                className="
                                text-[#0d3b82]
                                "
                            />
                            <h3
                                className="
                                mt-4
                                text-base
                                sm:text-lg
                                font-bold
                                text-gray-900
                                "
                            >

                                Smart Resume AI

                            </h3>
                            <p
                                className="
                                mt-1
                                text-xs
                                sm:text-sm
                                text-gray-500
                                "
                            >

                                Analyze • Improve • Grow

                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}