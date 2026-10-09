import {
    Upload,
    Sparkles,
    Search,
    BookOpen,
    Trophy
} from "lucide-react";


const steps = [
    {
        icon: Upload,
        title: "Upload Resume",
        description:
            "Create your profile by uploading your resume."
    },
    {
        icon: Sparkles,
        title: "AI Analysis",
        description:
            "AI analyzes your skills and career profile."
    },
    {
        icon: Search,
        title: "Find Skill Gaps",
        description:
            "Identify skills needed for your target role."
    },
    {
        icon: BookOpen,
        title: "Learn Skills",
        description:
            "Get personalized courses and resources."
    },
    {
        icon: Trophy,
        title: "Achieve Goals",
        description:
            "Improve your profile and career growth."
    }
];


export default function HowItWorks() {
    return (
        <section
            id="how"
            className="
                py-14
                sm:py-16
                bg-gray-50
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
                        text-center
                        max-w-xl
                        mx-auto
                        mb-10
                    "
                >
                    <h2
                        className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-gray-900
                        "
                    >
                        How
                        <span className="text-[#0d3b82]">
                            {" "}NextUp Works
                        </span>

                    </h2>
                    <p
                        className="
                            mt-3
                            text-sm
                            sm:text-base
                            text-gray-600
                        "
                    >
                        From resume upload to career growth with AI.
                    </p>
                </div>
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-5
                        gap-6
                        relative
                    "
                >
                    {
                        steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={index}
                                    className="
                                        relative
                                        flex
                                        md:flex-col
                                        items-start
                                        md:items-center
                                        text-left
                                        md:text-center
                                    "
                                >
                                    {
                                        index !== steps.length - 1 && (

                                            <div
                                                className="
                                                    hidden
                                                    md:block
                                                    absolute
                                                    top-7
                                                    left-[60%]
                                                    w-[90%]
                                                    border-t
                                                    border-dashed
                                                    border-blue-200
                                                "
                                            />

                                        )
                                    }
                                    <div
                                        className="
                                            relative
                                            z-10
                                            w-14
                                            h-14
                                            rounded-full
                                            bg-[#0d3b82]
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                            shadow-md
                                        "
                                    >
                                        <Icon
                                            size={24}
                                            className="text-white"
                                        />

                                    </div>
                                    <div
                                        className="
                                            ml-4
                                            md:ml-0
                                            md:mt-4
                                        "
                                    >
                                        <h3
                                            className="
                                                text-base
                                                font-semibold
                                                text-gray-900
                                            "
                                        >
                                            {index + 1}. {step.title}

                                        </h3>
                                        <p
                                            className="
                                                mt-1
                                                text-sm
                                                text-gray-600
                                                leading-relaxed
                                            "
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}