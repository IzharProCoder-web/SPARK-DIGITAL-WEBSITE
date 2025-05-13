"use client";

import React, { useState } from "react";
import Image from "next/image";

// Technology icons (update the import paths as needed)
import python from "@/assets/technologies/python.png";
import unity from "@/assets/technologies/unity.png";
import unreal from "@/assets/technologies/unreal.png";
import blender from "@/assets/technologies/blender.png";
import figma from "@/assets/technologies/figma.png";
import adobePs from "@/assets/technologies/adobePs.png";
import adobeIllustrator from "@/assets/technologies/adobeIllustrator.png";
import adobePremierePro from "@/assets/technologies/adobePremierePro.png";
import reactJs from "@/assets/technologies/reactJs.png";
import javascript from "@/assets/technologies/javascript.png";
import Typescript from "@/assets/technologies/Typescript.png";
import nextjs from "@/assets/technologies/nextjs.svg";
import mongodb from "@/assets/technologies/mongodb.png";
import exprssjs from "@/assets/technologies/exprssjs.png";
import nodejs from "@/assets/technologies/nodejs.png";
import flutter from "@/assets/technologies/flutter.png";
import seo from "@/assets/technologies/seo.webp";
import googleads from "@/assets/technologies/googleads.webp";
import reactnativeInner from "@/assets/technologies/reactnative-inner.svg";

const categories = [
  { id: "webDevelopment", label: "Web Development" },
  { id: "videoeidting", label: "Video Editing" },
  { id: "graphicDesigning", label: "Graphic Designing" },
  { id: "digitalMarketing", label: "Digital Marketing" },
];

const technologies = [
  // Digital Marketing (example placeholders; replace as needed)
  {
    name: "SEO",
    icon: seo, // placeholder, swap with your own icon
    category: "digitalMarketing",
  },
  {
    name: "Google Ads",
    icon: googleads, // placeholder
    category: "digitalMarketing",
  },

  // Graphic Designing
  {
    name: "Blender",
    icon: blender,
    category: "graphicDesigning",
  },
  {
    name: "Figma",
    icon: figma,
    category: "graphicDesigning",
  },
  {
    name: "Adobe PS",
    icon: adobePs,
    category: "graphicDesigning",
  },
  {
    name: "Adobe Illustrator",
    icon: adobeIllustrator,
    category: "graphicDesigning",
  },
  {
    name: "Adobe Premiere Pro",
    icon: adobePremierePro,
    category: "graphicDesigning",
  },

  // Game dev
  {
    name: "Unity (Game Dev)",
    icon: unity,
    category: "gameDevelopment",
  },
  {
    name: "Unreal Engine",
    icon: unreal,
    category: "gameDevelopment",
  },

  // Web Development
  {
    name: "React.js",
    icon: reactJs,
    category: "webDevelopment",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "webDevelopment",
  },
  {
    name: "TypeScript",
    icon: Typescript,
    category: "webDevelopment",
  },
  {
    name: "Next.js",
    icon: nextjs,
    category: "webDevelopment",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "webDevelopment",
  },
  {
    name: "Express.js",
    icon: exprssjs,
    category: "webDevelopment",
  },
  {
    name: "Node.js",
    icon: nodejs,
    category: "webDevelopment",
  },
  {
    name: "Python",
    icon: python,
    category: "webDevelopment",
  },

  // Mobile dev
  {
    name: "React Native",
    icon: reactnativeInner,
    category: "mobileDevelopment",
  },
  {
    name: "Flutter",
    icon: flutter,
    category: "mobileDevelopment",
  },
];

const TechnologyGrid = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No technologies available for this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-[80%] m-auto">
      {items.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="rounded-full w-20 h-20 flex items-center justify-center">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-800">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
};

const TechnologiesWeUse = ({ mainHeading }) => {
  const [activeCategory, setActiveCategory] = useState("webDevelopment");

  // Filter the technologies based on the active category
  const filteredTechnologies = technologies.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="w-full md:max-w-[80%] bg mx-auto px-4">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2
            className="primary-heading text-center"
            dangerouslySetInnerHTML={{ __html: mainHeading }}
          />
        </div>

        {/* Tabs (Categories) */}
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-x-6 mb-8">
          {categories.map((cat) => (
            <li
              key={cat.id}
              className={`px-4 py-2 cursor-pointer transition-colors duration-300 border border-gray-300 rounded-lg text-base ${
                activeCategory === cat.id
                  ? "text-red-500 font-semibold border-b-2 border-red-500"
                  : "text-gray-500 font-semibold hover:text-red-500"
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </li>
          ))}
        </ul>

        {/* Grid (Filtered by Category) */}
        <TechnologyGrid items={filteredTechnologies} />
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
