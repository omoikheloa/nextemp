import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        py-3 px-6 shadow-dark cursor-default absolute dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const SoundSkills = () => {
  const ref = React.useRef(null);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center
          mb-64 md:mb-32 rounded-full
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-default flex rounded-full font-semibold bg-dark text-light px-6 py-7 shadow-dark
            dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        >
          Audio
        </motion.div>
        
        {/* DAW Skills */}
        <Skill name="Pro Tools" x="-20vw" y="2vw" />
        <Skill name="Logic Pro" x="-5vw" y="-10vw" />
        <Skill name="Ableton Live" x="20vw" y="6vw" />
        
        {/* Sound Design */}
        <Skill name="Sound Design" x="0vw" y="12vw" />
        <Skill name="Foley Art" x="-20vw" y="-15vw" />
        <Skill name="Field Recording" x="15vw" y="-12vw" />
        
        {/* Music Production */}
        <Skill name="Mixing" x="-35vw" y="-5vw" />
        <Skill name="Mastering" x="32vw" y="-5vw" />
        <Skill name="Composition" x="0vw" y="-20vw" />
        
        {/* Additional Skills */}
        <Skill name="Audio Post" x="-25vw" y="18vw" />
        <Skill name="Studio Recording" x="28vw" y="18vw" />
        <Skill name="Sound FX" x="-15vw" y="-8vw" />
        <Skill name="Audio Restoration" x="25vw" y="-8vw" />
        <Skill name="Vocal Production" x="8vw" y="15vw" />
      </div>
    </>
  );
};

export default SoundSkills;