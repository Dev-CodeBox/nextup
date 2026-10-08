"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {

    const router = useRouter();
    const [open,setOpen] = useState(false);


    const links = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Features",
            href:"#features"
        },
        {
            name:"How it Works",
            href:"#how"
        }
    ];


    return (

        <nav className="
            fixed
            top-0
            w-full
            z-50
            bg-white/80
            backdrop-blur-lg
            border-b
            border-gray-200
        ">


            <div className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                h-20
                flex
                items-center
                justify-between
            ">


                <Link
                    href="/"
                    className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-[#0d3b82]
                    "
                >
                    NextUp
                </Link>



                {/* Desktop */}

                <div className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                ">


                    {
                        links.map((link)=>(
                            <Link
                                key={link.name}
                                href={link.href}
                                className="
                                text-gray-700
                                hover:text-[#0d3b82]
                                transition
                                "
                            >
                                {link.name}
                            </Link>
                        ))
                    }


                    <button
                        onClick={()=>router.push("/auth")}
                        className="
                        bg-[#0d3b82]
                        text-white
                        px-6
                        py-3
                        rounded-full
                        hover:bg-[#0a2f67]
                        transition
                        "
                    >
                        Get Started
                    </button>


                </div>





                {/* Mobile Button */}

                <button
                    onClick={()=>setOpen(!open)}
                    className="
                    md:hidden
                    text-[#0d3b82]
                    "
                >

                    {
                        open
                        ?
                        <X size={28}/>
                        :
                        <Menu size={28}/>
                    }


                </button>


            </div>






            {/* Mobile Menu */}

            {
                open && (

                    <div
                        className="
                        md:hidden
                        bg-white
                        px-6
                        py-6
                        space-y-5
                        border-t
                        "
                    >

                        {
                            links.map((link)=>(

                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={()=>setOpen(false)}
                                    className="
                                    block
                                    text-gray-700
                                    "
                                >
                                    {link.name}
                                </Link>

                            ))
                        }



                        <button
                            onClick={()=>router.push("/auth")}
                            className="
                            w-full
                            bg-[#0d3b82]
                            text-white
                            py-3
                            rounded-full
                            "
                        >
                            Get Started
                        </button>


                    </div>

                )
            }


        </nav>

    );
}