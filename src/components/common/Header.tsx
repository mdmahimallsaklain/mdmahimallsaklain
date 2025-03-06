"use client";

import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import { MulishBoldFont, MulishRegularFont } from "@/utils/FontsInitializer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Logo from "./Logo";
import { ModeToggle } from "../ModeToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen === true ? "hidden" : "visible";
  }, [isMenuOpen]);
  return (
    <header
      id='header'
      className='flex flex-row sm:flex-row justify-between items-center px-6 py-2 w-full sticky top-0 left-0 bg-light dark:bg-dark z-50 sm:justify-center lg:justify-between'
    >
      {/* Logo */}
      <div id='header_logo' className='sm:hidden lg:inline-block'>
        <Link href='/'>
          <Logo />
        </Link>
      </div>

      <button
        className='sm:hidden text-black dark:text-white text-2xl'
        onClick={() => setIsMenuOpen(true)}
      >
        <GiHamburgerMenu />
      </button>

      {/* Main Menu */}
      <div
        id='header_menu'
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed flex sm:flex flex-col sm:flex-row sm:static top-0 left-0 w-full sm:w-auto h-full sm:h-auto bg-white dark:bg-gray-900 sm:bg-transparent sm:dark:bg-transparent justify-center sm:justify-between items-center gap-5 p-8 sm:p-0 z-50`}
      >
        {/* Close Button (visible on mobile) */}
        <button
          className='absolute top-8 right-6 text-2xl sm:hidden'
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdClose />
        </button>

        {/* Navigation Items */}
        <NavigationMenu className=''>
          <NavigationMenuList className='flex flex-col sm:flex-row justify-center items-center gap-5 w-full h-full sm:w-auto sm:h-auto'>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href
                      ? `text-based font-bold  ${MulishBoldFont.className}`
                      : `text-gray-500 hover:text-gray-800 dark:hover:text-gray-600  ${MulishRegularFont.className}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem className='sm:border-l-2 sm:pl-5'>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
