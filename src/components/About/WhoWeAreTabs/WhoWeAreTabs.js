"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhoWeAreTabs = () => {
  const tabs = [
    {
      id: "whoWeAre",
      label: "WHO WE ARE?",
      content: `
       Our vision is to create a future where technology drives fairness and fuels innovation, solving complex global market challenges. We aim to forge a connected, inclusive world by pushing boundaries, defying norms, and delivering solutions that unite and empower communities.
      `,
    },
    {
      id: "ourMission",
      label: "Our Mission",
      content: `
        At Spark Digital, our mission is to create a highly productive and meaningful workplace by using artificial intelligence to streamline habits and automate processes, freeing up millions of developer hours each month to spark innovation and drive real change for our partners.
      `,
    },
    {
      id: "ourPlan",
      label: "Our Vision",
      content: `
     Our tailored solutions are built on careful research and analysis, ensuring you stay ahead of competitors who are just a click away from winning your audience. We channel your creativity and resources into making your business a customer magnet.
      `,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-10 px-4 text-white">
      <div className="w-full mx-auto">
        {/* Tabs (Top Navigation) */}
        <div className="flex flex-wrap bg-[#1E3A8A] items-center justify-center space-x-2 sm:space-x-12 border-b border-white/25 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm md:text-lg font-bold 
                border-b-4 
                ${
                  activeTab === tab.id
                    ? "border-white text-white"
                    : "border-transparent hover:text-white"
                }
                transition-colors duration-300
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <div className="text-sm md:text-xl text-center text-gray-700 max-w-4xl m-auto leading-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-gray-700 whitespace-pre-line"
            >
              {currentTab.content}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreTabs;
