import React from "react";

const projectDetails = {
  "konnect-city": {
    name: "Welcome to Konnect City: Where Vision Becomes Reality",
    description:
      "Step into Konnect City, a groundbreaking digital metropolis where innovation, opportunity, and collaboration converge. Designed for creators, entrepreneurs, investors, and visionaries, Konnect City is more than a platform—it's a vibrant ecosystem that empowers you to shape the future.Explore immersive virtual storefronts, engage with dynamic advertising, and unlock exclusive opportunities through augmented reality (AR) and cutting-edge technology. Whether you're launching a new venture, making strategic investments, or forging global connections, Konnect City provides the tools and environment to thrive in a world driven by creativity and progress.Join us today and build your legacy in the city of tomorrow.",
    banner: "",
  },
  streetfood: {
    name: "Street Food",
    description:
      "We proudly developed a dynamic website for a multivendor street food application in the UK, designed to connect food vendors with customers seamlessly. This platform enhances user experience with intuitive navigation, responsive design, and robust functionality.",
    banner: "",
  },
  "ball-contrl": {
    name: "Ball Contrl",
    description:
      "Ball Control is a premier platform dedicated to women's football, offering personalized coaching services and training programs. Users can book professional coaches. Additionally, it feature a store with high-quality football products and an affiliate marketing program.",
    banner: "",
  },
  "direct-portal": {
    name: "Direct portal",
    description:
      "We proudly developed the Direct Portal for Project Management, designed to streamline project workflows and enhance collaboration. This portal offers an intuitive interface, real-time tracking, and efficient management tools, making it easier for teams to achieve their goals.",
    banner: "",
  },
};

const ProjectDetail = ({ params }) => {
  const { projectId } = params;
  const project = projectDetails[projectId];

  if (!project) {
    return <div className="p-4">Project not found.</div>;
  }

  return (
    <div className="">
      <div className="w-full h-[200px] bg-green-400 mb-6 text-3xl font-semibold flex items-center justify-center">Banner Image</div>
      <div className="app__container">
        <h1 className="text-2xl font-bold mb-2 mt-5 text-gray-800">
          {project.name}
        </h1>
        <p className="text-md text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
