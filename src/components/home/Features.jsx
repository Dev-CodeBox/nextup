import {
    FileSearch,
    Target,
    Brain,
    BookOpen,
    MessageSquare
} from "lucide-react";


const features = [
    {
        icon: FileSearch,
        title: "Resume Analysis",
        desc: "Analyze your resume and identify strengths."
    },
    {
        icon: Target,
        title: "ATS Score",
        desc: "Check resume compatibility with jobs."
    },
    {
        icon: Brain,
        title: "Skill Gap",
        desc: "Find missing skills for your career."
    },
    {
        icon: BookOpen,
        title: "Courses",
        desc: "Get personalized learning paths."
    },
    {
        icon: MessageSquare,
        title: "Mock Interview",
        desc: "Practice interviews with AI feedback."
    }
];


export default function Features() {
    return (
        <section
            id="features"
            className="
                py-14
                sm:py-16
                bg-white
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
                        AI Tools To
                        <span className="text-[#0d3b82]">
                            {" "}Build Your Career
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
                        Analyze, improve and grow with intelligent career assistance.

                    </p>
                </div>
                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                    "
                >
                    {
                        features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        p-5
                                        rounded-xl
                                        border
                                        border-gray-100
                                        bg-white
                                        hover:border-blue-200
                                        hover:shadow-lg
                                        transition-all
                                    "
                                >
                                    <div
                                        className="
                                            w-11
                                            h-11
                                            rounded-lg
                                            bg-[#0d3b82]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >
                                        <Icon
                                            size={22}
                                            className="text-white"
                                        />
                                    </div>
                                    <h3
                                        className="
                                            mt-4
                                            text-lg
                                            font-semibold
                                            text-gray-900
                                        "
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-gray-600
                                            leading-relaxed
                                        "
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}