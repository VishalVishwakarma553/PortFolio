import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from "motion/react"
import { animate } from "motion";

const iconMove = (duration) => ({
  initial: {y:-10},
  animate: {
    y:[-10, 10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technology = () => {
  return (
    <div className="max-w-6xl mx-auto" id="technology">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-80}}
      transition={{duration:1.5}}
      className="text-4xl my-20 text-gray-300 text-center">Technology</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1}}
      className="flex flex-wrap justify-center gap-4 items-center pb-12">
        <motion.div 
        variants={iconMove(2.5)}
        initial="initial"
        animate="animate"
        className="border-2 border-gray-300 p-4 rounded-lg ">
          <FaReact className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
        variants={iconMove(6)}
        initial="initial"
        animate="animate"
        className="border-2 border-neutral-400 p-4 rounded-lg ">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconMove(3)}
        initial="initial"
        animate="animate"
        className="border-2 border-neutral-400 p-4 rounded-lg ">
          <SiMysql className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconMove(4)}
        initial="initial"
        animate="animate"
        className="border-2 border-neutral-400 p-4 rounded-lg ">
          <FaNodeJs className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
        variants={iconMove(5)}
        initial="initial"
        animate="animate"
        className="border-2 border-neutral-400 p-4 rounded-lg ">
          <SiPostman className="text-7xl text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Technology;
