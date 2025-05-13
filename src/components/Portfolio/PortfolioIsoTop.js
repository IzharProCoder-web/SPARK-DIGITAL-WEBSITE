"use client";

import image from "@/constant/Images/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: "konnect-city",
    name: "Konnect City",
    imgUrl: image.KonnectCity,
  },
  {
    id: "streetfood",
    name: "Street Food",
    imgUrl: image.FoodStreet,
  },
  {
    id: "ball-contrl",
    name: "Ball Contrl",
    imgUrl: image.BallControl,
  },
  {
    id: "direct-portal",
    name: "Direct Portal",
    imgUrl: image.DirectPortal1,
  },
];

const PortfolioIsoTop = () => {
  return (
    <div className="app__container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <Link
          href={`/portfolio/${project.id}`}
          key={project.id}
          className="block group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative w-full h-56">
            <Image
              src={project.imgUrl}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {project.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioIsoTop;
