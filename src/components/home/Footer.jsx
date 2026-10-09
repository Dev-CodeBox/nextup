import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
    FaTwitter
} from "react-icons/fa";


export default function Footer() {
    return (
        <footer
            className="
                bg-gray-950
                text-gray-300
                pt-12
                pb-6
            "
        >
            <div
                className="
                    max-w-6xl
                    mx-auto
                    px-4
                    sm:px-6
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                "
            >
                <div
                    className="
                        sm:col-span-2
                        lg:col-span-1
                    "
                >
                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        NextUp
                    </h2>
                    <p
                        className="
                            mt-3
                            text-sm
                            text-gray-400
                            leading-relaxed
                            max-w-xs
                        "
                    >
                        AI powered career assistant to analyze
                        resumes, discover skill gaps and grow
                        your career.

                    </p>
                </div>
                <div>
                    <h3
                        className="
                            text-white
                            text-sm
                            font-semibold
                            mb-4
                        "
                    >
                        Product
                    </h3>
                    <ul
                        className="
                            space-y-2
                            text-sm
                        "
                    >
                        <li className="hover:text-white transition">
                            Resume Analysis
                        </li>
                        <li className="hover:text-white transition">
                            ATS Score
                        </li>
                        <li className="hover:text-white transition">
                            Skill Gap Analysis
                        </li>
                        <li className="hover:text-white transition">
                            AI Courses
                        </li>
                    </ul>
                </div>
                <div>
                    <h3
                        className="
                            text-white
                            text-sm
                            font-semibold
                            mb-4
                        "
                    >
                        Company
                    </h3>
                    <ul
                        className="
                            space-y-2
                            text-sm
                        "
                    >
                        <li>
                            <Link
                                href="/"
                                className="hover:text-white transition"
                            >
                                About
                            </Link>
                        </li>
                        <li className="hover:text-white transition">
                            Contact
                        </li>
                        <li className="hover:text-white transition">
                            Privacy Policy
                        </li>
                        <li className="hover:text-white transition">
                            Terms
                        </li>
                    </ul>
                </div>
                <div>
                    <h3
                        className="
                            text-white
                            text-sm
                            font-semibold
                            mb-4
                        "
                    >
                        Follow Us
                    </h3>
                    <div
                        className="
                            flex
                            gap-3
                        "
                    >
                        <a
                            className="
                                w-9
                                h-9
                                rounded-full
                                bg-gray-800
                                flex
                                items-center
                                justify-center
                                hover:bg-gray-700
                                transition
                                cursor-pointer
                            "
                        >
                            <FaGithub size={17} />
                        </a>
                        <a
                            className="
                                w-9
                                h-9
                                rounded-full
                                bg-gray-800
                                flex
                                items-center
                                justify-center
                                hover:bg-gray-700
                                transition
                                cursor-pointer
                            "
                        >
                            <FaLinkedin size={17} />
                        </a>
                        <a
                            className="
                                w-9
                                h-9
                                rounded-full
                                bg-gray-800
                                flex
                                items-center
                                justify-center
                                hover:bg-gray-700
                                transition
                                cursor-pointer
                            "
                        >
                            <FaTwitter size={17} />
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="
                    max-w-6xl
                    mx-auto
                    mt-10
                    pt-5
                    px-4
                    border-t
                    border-gray-800
                    text-center
                    text-xs
                    text-gray-500
                "
            >
                © {new Date().getFullYear()} NextUp.
                All rights reserved.
            </div>
        </footer>
    );
}