import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="relative w-full h-0 pb-[90%] sm:pb-[40%] overflow-hidden">
      {/* Google Map iframe */}
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src="https://maps.google.com/maps?q=Nust+H12+MDDC&output=embed"
        title="Google Map - NUST H12 MDDC"
      ></iframe>

      {/* Overlayed Info Box */}
      <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-lg p-6 text-sm md:text-base w-[90%] md:w-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-700 uppercase text-xs mb-1">
              Address
            </h4>
            <p className="text-gray-800">
              Office #11, Ground Floor, MDDC Building, NUST, H-12, Islamabad,
              Pakistan
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 uppercase text-xs mb-1">
              Email
            </h4>
            <p>
              <a
                href="mailto:intelgencyitsolutions@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                intelgencyitsolutions@gmail.com
              </a>
            </p>
            <h4 className="font-semibold text-gray-700 uppercase text-xs mt-4 mb-1">
              Phone
            </h4>
            <p className="text-gray-800">+92 339 5177899</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
