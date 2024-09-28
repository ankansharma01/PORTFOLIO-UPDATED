import React from "react";
import aboutImg from "../assets/about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 ;g:p-8"
        >
          <div className="flex flex-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}} 
        className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
