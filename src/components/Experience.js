import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Senior Sound Designer"
            company="Uphorik Sounds"
            time="Feb 2021 - Present"
            address="Lagos State, Nigeria"
            companyLink="https://uphoriksounds.com"
            work="Leading sound design and music production projects as a freelance professional. Specializing in creating immersive audio experiences and delivering high-quality sound production services. Expert in sound design, music production, and various audio engineering techniques."
          />

          <Details
            position="Sound Designer"
            company="CEREBRAL & DEXTER MEDIA"
            time="Mar 2018 - Present"
            address="Lagos, Nigeria"
            companyLink="https://cerebralhub.com"
            work="Creating and implementing comprehensive sound design solutions for various media projects. Collaborating with creative teams to develop unique audio experiences that enhance storytelling and audience engagement."
          />

          <Details
            position="Record Producer"
            company="Made Men Music Group"
            time="2017 - 2018"
            address="Lagos, Nigeria"
            companyLink="https://mademenmusicgroup.com"
            work="Produced and engineered recordings for various artists, overseeing the entire production process from concept to final mix. Collaborated with artists to develop their unique sound while maintaining high production standards."
          />

          <Details
            position="Artist / Record Producer"
            company="Mad Fusion Entertainment"
            time="2013 - Mar 2015"
            address="Benin"
            companyLink="https://madfusion.com"
            work="Combined roles as both artist and record producer, creating original music while also producing for other artists. Managed studio sessions, arranged music, and provided creative direction for various projects."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;