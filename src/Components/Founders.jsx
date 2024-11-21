import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Founders = () => {
  const visionText = `Lorem ipsum dolor sit amet consectetur. Eget interdum sagittis sit
  eu nulla eu sollicitudin urna. Tortor id turpis ut ullamcorper. Mi
  consectetur suscipit augue scelerisque vitae sed donec tortor
  interdum. Nisi nunc lacus sed cursus. Sem feugiat iaculis amet eget
  sed quis id. Scelerisque nunc enim sit leo in venenatis ac. Cras
  lorem mattis ac amet.`;

  const missionText = `Lorem ipsum dolor sit amet consectetur. Eget interdum sagittis sit
  eu nulla eu sollicitudin urna. Tortor id turpis ut ullamcorper. Mi
  consectetur suscipit augue scelerisque vitae sed donec tortor
  interdum. Nisi nunc lacus sed cursus. Sem feugiat iaculis amet eget
  sed quis id. Scelerisque nunc enim sit leo in venenatis ac. Cras
  lorem mattis ac amet. Tincidunt cursus natoque sem maecenas neque
  tellus in. Amet viverra bibendum etiam purus ultricies diam.`;

  const [visionDisplayedText, setVisionDisplayedText] = useState("");
  const [missionDisplayedText, setMissionDisplayedText] = useState("");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!animationComplete) {
      let visionCharIndex = 0;
      let missionCharIndex = 0;

      const visionInterval = setInterval(() => {
        if (visionCharIndex < visionText.length) {
          setVisionDisplayedText((prev) => prev + visionText[visionCharIndex]);
          visionCharIndex++;
        } else {
          clearInterval(visionInterval);
        }
      }, 30);

      const missionInterval = setInterval(() => {
        if (missionCharIndex < missionText.length) {
          setMissionDisplayedText((prev) => prev + missionText[missionCharIndex]);
          missionCharIndex++;
        } else {
          clearInterval(missionInterval);
          setAnimationComplete(true);
        }
      }, 30);

      return () => {
        clearInterval(visionInterval);
        clearInterval(missionInterval);
      };
    }
  }, [animationComplete, visionText, missionText]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 max-w-7xl w-full">
        {/* Vision Section */}
        <div className="flex flex-col gap-4 bg-[#F1F5F9] p-6 md:p-8 lg:p-10 w-full md:w-[48%] h-auto">
          <h4 className="text-xl md:text-2xl font-medium">Our Vision</h4>
          <motion.p
            className="text-sm md:text-base leading-6 md:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {animationComplete ? visionText : visionDisplayedText}
          </motion.p>
        </div>
        {/* Mission Section */}
        <div className="flex flex-col gap-4 bg-[#F1F5F9] p-6 md:p-8 lg:p-10 w-full md:w-[48%] h-auto">
          <h4 className="text-xl md:text-2xl font-medium">Our Mission</h4>
          <motion.p
            className="text-sm md:text-base leading-6 md:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {animationComplete ? missionText : missionDisplayedText}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
