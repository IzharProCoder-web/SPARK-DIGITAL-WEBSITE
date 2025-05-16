
"use client";
import Image from "next/image";
import Link from "next/link";
import image from "../Images/image";
import {
  SpeakerWaveIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";

const products = [
  {
    name: "Digital Marketing",
    description: "Maximizing online presence through strategic promotion.",
    href: "/services/digital-marketing",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Game Development",
    description: "Engaging and Interactive Game Development Solutions",
    href: "/services/game-development",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Graphic Designing",
    description: "Creating visually impactful designs for your brand identity",
    href: "/services/graphic-designing",
    icon: PaintBrushIcon,
  },
  {
    name: "Mobile Development",
    description: "Building Seamless and Scalable Mobile Apps for All Platforms",
    href: "/services/mobile-development",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Website Optimization",
    description: "Maximizing website performance for optimal results.",
    href: "/services/website-optimization",
    icon: CommandLineIcon,
  },
  {
    name: "Web Development",
    description: "Creating dynamic websites with coding expertise.",
    href: "/services/web-development",
    icon: CodeBracketIcon,
  },
  {
    name: "AR/VR Development",
    description: "Immersive Augmented & Virtual Reality Experiences",
    href: "/services/ar-vr-development",
    icon: PuzzlePieceIcon,
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const segment = useSelectedLayoutSegment();
  const dropdownRef = useRef(null);

  const handleHover = () => {
    setToggle(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header
      ref={dropdownRef}
      className={`sticky top-0 z-50 ${
        segment === null ? "bg-white border-b border-gray-200" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-10 w-auto"
              src={image.IntelgencyLogo}
              alt="Intelgency Logo"
              width={250}
              height={70}
            />
          </Link>
        </div>

        <div
          className={`hidden md:flex justify-center items-center gap-0 lg:gap-7 text-navy-900`}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/"
              className={`px-3 py-2 text-sm navlink ${
                segment === null ? "active" : ""
              }`}
              onClick={() => setToggle(false)}
            >
              Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/about"
              className={`px-3 py-2 text-sm navlink ${
                segment === "about" ? "active" : ""
              }`}
              onClick={() => setToggle(false)}
            >
              About Us
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <button
              className="px-3 py-2 text-sm flex items-center navlink"
              onClick={() => setToggle(!toggle)}
              onMouseEnter={handleHover}
            >
              Our Services
              <ChevronDownIcon
                className={`h-5 w-5 flex-none text-navy-900 ${
                  toggle ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm navlink ${
                segment === "contact" ? "active" : ""
              }`}
              onClick={() => setToggle(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 justify-end">
          <a href="tel:+923441213809" className="navbar-btn shadow-lg">
            Call Us
          </a>
        </div>
      </div>

      <div
        className={`p-4 absolute z-50 top-[5.5rem] lg:left-[20%] lg:right-[20%] bg-white rounded-lg shadow-lg grid grid-cols-2 transition-all duration-300 ease-in-out ${
          toggle ? "opacity-100 visible mt-2" : "opacity-0 invisible"
        }`}
      >
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-navy-50"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-navy-100 group-hover:bg-white">
              <item.icon
                className="h-6 w-6 text-navy-900 group-hover:text-gold-500"
                aria-hidden="true"
              />
            </div>
            <div className="flex-auto">
              <Link
                href={item.href}
                className="block font-semibold text-navy-900 group-hover:text-gold-500"
                onClick={() => setToggle(false)}
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;