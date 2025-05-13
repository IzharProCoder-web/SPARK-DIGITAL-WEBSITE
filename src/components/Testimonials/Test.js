"use client";
import image from "@/constant/Images/image";
import Image from "next/image";
import { useState } from "react";

const Test = ({ mainHeading }) => {
  const testimonials = [
    {
      id: 1,
      name: "Jeremy Lane",
      title: "Team Lead0, Anjon USA",
      message:
        "We have a great business relationship with this team. Their web development services exceeded our expectations and brought our outdated site into the modern age. The communication was excellent throughout, and they made the whole process smooth and stress-free. They truly brought our vision to life.",
      imgUrl: image.client,
    },
    {
      id: 2,
      name: "Julia Balukonis",
      title: "CEO, Tech Innovate",
      message:
        "The graphic design work from this team has been phenomenal. From brand identity to marketing materials, everything has been consistent, creative, and professionally delivered. Their ability to understand our brand voice and turn it into visuals was spot on. Highly recommend them to any serious business.",
      imgUrl: image.client,
    },
    {
      id: 3,
      name: "Scott Shagory",
      title: "Founder, Clinica da Mama",
      message:
        "Their game development service is impressive. We approached them with a concept, and they delivered a fully functional, visually stunning product ahead of schedule. They understood the user experience deeply and made sure the game was both fun and intuitive. We are very satisfied with the outcome.",
      imgUrl: image.client,
    },
    {
      id: 4,
      name: "Michael Rad",
      title: "Director, Rad Solutions",
      message:
        "We had a wide range of requirements spanning web development, branding, and UI/UX design, and this team handled it all with a high level of professionalism. The final product looks incredible and functions flawlessly. Their work ethic, patience, and attention to detail stood out the most.",
      imgUrl: image.client,
    },
  ];

  // Initialize state to track expanded testimonials (false by default)
  const [expanded, setExpanded] = useState(
    new Array(testimonials.length).fill(false)
  );

  // Function to toggle the expanded state for a specific testimonial
  const toggleExpand = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className="py-12 bg-gray-50 mt-5">
      <div className="app__container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2
              className="primary-heading text-center"
              dangerouslySetInnerHTML={{ __html: mainHeading }}
            />
          </div>
          <p className="mt-4 text-gray-900 max-w-6xl mx-auto">
            From software engineers to designers and virtual assistants, our
            handpicked team members have consistently exceeded client
            expectations. Don’t just take our word for it—our clients rave about
            the powerful impact our remote tech teams have had on their success.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => {
            // Calculate word count
            const wordCount = testimonial.message.split(" ").length;
            // Get truncated message (first 30 words)
            const truncatedMessage =
              testimonial.message.split(" ").slice(0, 30).join(" ") + "...";

            return (
              <div
                key={testimonial.id}
                className="bg-white shadow-[0_5px_60px_-15px_rgba(0,0,0,0.1)] p-9 flex flex-col"
              >
                <div className="">
                  <Image
                    src={image.quote2}
                    className="w-10 h-10 mr-4 mb-4"
                    alt="quote icon"
                  />
                  <div>
                    {/* Conditionally render truncated or full message */}
                    <p className="text-gray-700">
                      {wordCount > 30 && !expanded[index]
                        ? truncatedMessage
                        : testimonial.message}
                    </p>
                    {/* Show button only if word count exceeds 30 */}
                    {wordCount > 30 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-red-500 mt-2 inline-block hover:underline"
                      >
                        {expanded[index] ? "show less" : "show more"}
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <Image
                    src={testimonial.imgUrl}
                    className="w-12 h-12 rounded-full"
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Test;
