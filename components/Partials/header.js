"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/public/icons/arrow-down.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";
import NavCloseIcon from "@/public/icons/nav-close-icon.svg";

const navItemsList = [
  {
    title: "About Rett Syndrome",
    href: "#",
    subMenu: [
      {
        title: "What is Rett Syndrome?",
        href: "/sitemap/",
      },
      {
        title: "Clinical Presentation",
        href: "#",
      },
      {
        title: "Understanding the Impact",
        href: "/understand-the-impact",
      },
    ],
  },
  {
    title: "Diagnosis & Genetic Testing",
    href: "/diagnosis-and-genetic-testing",
  },
  {
    title: "Treatment",
    href: "#",
    subMenu: [
      {
        title: "Multidisciplinary Treatment Approach",
        href: "#",
      },
      {
        title: "Tracking Rett Syndrome",
        href: "#",
      },
      {
        title: "Medications & Additional Therapies",
        href: "#",
      },
    ],
  },
  {
    title: "Communication Tools",
    href: "#",
  },
  {
    title: "Resources",
    href: "#",
  },
  {
    title: "Join us",
    href: "/join-us",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveSubMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  useEffect(() => {
    setActiveLink(pathname);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleSetActiveLink = (href) => () => {
    setActiveLink(href);
  };

  console.log(activeLink);
  const handleSetActiveLinkAndCloseNavbar = (href) => () => {
    setActiveLink(href);
    setIsOpen(false); // Close the navbar on link click
  };


  return (
    <div className={`z-50 w-full bg-white ${isSticky ? 'shadow-lg fixed top-0' : ''} `}>
      {/* desktop */}
      <div className={`flex justify-between w-full mx-auto mb-3 bg-white max-w-[1070px] `}>
        <div className="z-50 flex content-center p-5 logo lg:relative md:relative">
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              alt="Rett Dialog Logo"
              className="dark:invert"
              width={206}
              height={63}
              priority
            />
          </Link>
        </div>
        <div className="items-center w-full content-start hidden p-5 space-x-10 menu md:flex lg:flex customMenuHidden md:text-sm">
          <ul className="flex relative justify-between w-full customJoinUsLink">
            {navItemsList.map((item, index) => (
              <li
                key={index}
                className="relative customLi"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`font-figtree text-base text-navyBlue border-b-2 flex gap-1 ${
                    activeLink === item.href || activeLink === item.href+'/'
                      ? "border-hoverGreen"
                      : "border-transparent"
                  }`}
                  onClick={handleSetActiveLink(item.href)}
                >
                  {item.title}
                  {item?.subMenu ? (
                    <Image
                      src={ArrowDownIcon}
                      width="8px"
                      height="8px"
                      alt="Arrow Icon"
                    />
                  ) : (
                    ""
                  )}
                </Link>

                {item.subMenu && (
                  <ul
                    className={`dropdown-menu absolute bg-white shadow-md z-50 max-w-[200px] w-[200px] ${
                      activeSubMenu === index ? "" : "hidden"
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.subMenu.map((subItem) => (
                      <li
                        key={subItem.title}
                        className="p-2 font-figtree text-base hover:bg-hoverGreen"
                      >
                        <Link href={subItem.href}>{subItem.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="fixed top-0 right-0 flex p-5 z-50 bg-white w-full customHambugerIcon">
          <div className="flex justify-between items-center bg-white w-full">
          <Link href="/">
            <Image
              src="/logo/logo.svg"
              alt="Rett Dialog Logo"
              className="dark:invert"
              width={206}
              height={63}
              priority
            />
          </Link>
          <Image
            width={0}
            height={0}
            sizes="100wv"
            className="w-10 h-10 cursor-pointer"
            src={!isOpen ? HamburgerIcon : NavCloseIcon}
            onClick={toggleNavbar}
          />
          </div>
          
        </div>
      </div>
      {/* mobile  */}
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={toggleNavbar}
          ></div>

          <div className="fixed z-50 w-full h-screen lg:hidden top-24">
            <div className="z-50 flex w-full bg-white shadow-lg min-h-25 customMobileMenu">
              <ul className="p-5 mt-5 list-none w-full divide-y text-[#173462] customMenuMobileBox">
                {navItemsList.map((item, index) => (
                  <li key={index}>
                    <div
                      className="relative inline-block w-full py-2 divide-y cursor-pointer "
                      onClick={() => toggleSubMenu(index)}
                    >
                      <span className="font-figtree-semibold text-lg text-navyBlue">{item.title}</span>
                      {item.subMenu && (
                        <span className="absolute right-0">
                          <Image
                            src={ArrowDownIcon}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className={`w-5 h-5 transform transition-transform ${
                              activeSubMenu === index
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </span>
                      )}
                    </div>
                    {item.subMenu && activeSubMenu === index && (
                      <div className="divide-y">
                        {item.subMenu.map((subItem) => (
                          <div key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className="inline-block w-full py-2 cursor-pointer font-figtree text-lg"
                              onClick={handleSetActiveLinkAndCloseNavbar(
                                subItem.href
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
