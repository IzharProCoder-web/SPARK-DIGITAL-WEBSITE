"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhoWeAreTabs = () => {
  const tabs = [
    {
      id: "whoWeAre",
      label: "WHO WE ARE?",
      content: `
        Our vision is to forge an equitable future in technological exchange, catalyzing innovation to address some of the most complex challenges in global markets. Together, we hope to shape a more inclusive and interconnected world by challenging the status quo and acting as a resistance to the global inequality and tribalism.
      `,
    },
    {
      id: "ourMission",
      label: "Our Mission",
      content: `
        At Intelgency, our mission is to cultivate the world’s most productive and purpose-driven workplace by harnessing the power of artificial intelligence for habit and factory automation, unlocking over 100 million developer hours per month to fuel innovation at scale and drive true transformation for our partners.
      `,
    },
    {
      id: "ourPlan",
      label: "Our Vision",
      content: `
        Our custom solutions are backed by meticulous research and 
        analysis; because your other competitors are just one click away 
        from stealing your audience. We use all your creativity and 
        resources into shaping your business as a customer magnet.
      `,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-10 px-4 text-white">
      <div className="w-full mx-auto">
        {/* Tabs (Top Navigation) */}
        <div className="flex flex-wrap bg-gradient-to-b from-red-600 to-red-500 items-center justify-center space-x-2 sm:space-x-12 border-b border-white/25 pt-2">
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
