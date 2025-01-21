"use client";
import {useEffect, useState} from "react";
import {menuConfig} from "@/lib/data";
import {MdEmail} from "react-icons/md";
import {BiPhone} from "react-icons/bi";
import Link from "next/link";
import Button from "@/features/components/Button";

type Prop = {
    textColor?: string
}

const NavBar = ({textColor}: Prop) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleSubMenu = (index: any) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all block ${textColor} ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            {!scrolled && (
                <div
                    className={
                        "broder hidden md:block border-b-[0.2px] border-white py-2"
                    }
                >
                    <div className="container mx-auto flex gap-4 text-[14px]">
                        <div className="flex items-center gap-2">
                            <BiPhone/>
                            <p>233 55 755 5909 | +233 27 277 8880</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail/> <p>info@royalkingdomestate.com</p>
                        </div>
                    </div>
                </div>
            )}

            <nav className="container mx-auto flex items-center justify-between py-3 px-8">
                <div className="flex items-center space-x-4">
                    <Link href={"/"}>
                        <img src={"/logo.png"} alt="Logo" className={"w-[50px]"}/>
                    </Link>
                </div>

                <ul className="hidden md:flex items-center space-x-6 list-none">
                    {menuConfig.map((menu,index) =>
                        !menu.isButton ? (
                            <li key={index + menu.title} className="relative group">
                                <Link
                                    href={menu.link}
                                    className={`${
                                        scrolled
                                            ? "text-gray-700 hover:text-blue-500"
                                            : `${textColor} hover:text-red-500`
                                    } font-bold text-[12px] uppercase no-underline`}
                                >
                                    {menu.title}
                                </Link>
                                {menu.children && (
                                    <ul className="absolute list-none top-full left-0 bg-white w-[150px] shadow-lg hidden group-hover:block">
                                        {menu.children.map((child) => (
                                            <li
                                                key={child.title}
                                                className="border-b-[1px] rounded-none border-b-gray-700"
                                            >
                                                <Link
                                                    href={child.link}
                                                    className="block px-2 py-2 text-sm no-underline text-gray-700 hover:bg-gray-100"
                                                >
                                                    {child.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <Link href={menu.link}>
                                 <Button text={menu.title} className="text-base font-light bg-primary-default rounded-2xl" size="sm"/>
                            </Link>
                        ),
                    )}
                </ul>

                <button
                    className="md:hidden text-gray-700 text-xl no-underline"
                    onClick={toggleMobileMenu}
                >
                    {mobileMenuOpen ? "✕" : "☰"}
                </button>
            </nav>
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="list-none text-left w-[150px] ">
                        {menuConfig.map((menu, index) => (
                            <li key={"mobile-" + menu.title}>
                                {!menu.children ? (
                                    <Link
                                        href={menu.link}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 no-underline"
                                    >
                                        {menu.title}
                                    </Link>
                                ) : (
                                    <>
                                        <div
                                            className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => toggleSubMenu(index)}
                                        >
                                            <span>{menu.title}</span>
                                            <span>{activeSubMenu === index ? "−" : "+"}</span>
                                        </div>
                                        {activeSubMenu === index && (
                                            <ul className="pl-4 list-none">
                                                {menu.children.map((child) => (
                                                    <li key={child.title}>
                                                        <Link
                                                            href={child.link}
                                                            className="block no-underline px-4 py-2 text-gray-700 hover:bg-gray-200"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
