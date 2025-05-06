import HeroSVG from "../assets/HeroSvg";
import { motion } from "motion/react"

const FramerMotion = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay:delay}
  }
})
const Hero = () => {
  return (
    <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between mx-auto sm:my-20 p-4 my-20" id="hero">
      <div className="text-white md:w-1/2 space-y-2">
        <motion.h1  
        variants={FramerMotion(0)}
        initial="hidden"
        animate="visible"
          className="text-6xl font-thin tracking-tight lg:text-7xl  sm:text-start"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Vishal Vishwkarma
        </motion.h1>
        <motion.span 
        variants={FramerMotion(0.5)}
        initial="hidden"
        animate="visible"
        className="text-4xl tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text">
          A full Stack Developer
        </motion.span>
        <motion.p
        variants={FramerMotion(1)}
        initial="hidden"
        animate="visible"
        className="font-light about my-2 py-6">
          I have practical knowledge in frontend architecture, backend structure, database maintenance, and integrations with third-party services, and I breathe life into ideas through clean coding and creative ideas. I'm always keen on learning new technologies and take on challenges that challenge me outside my comfort zone. Either working in a team or as an individual,delectus sunt?, I always aim to provide influential digital solutions aligned with both user requirements and business objectives.
        </motion.p>
      </div>
      <div className="md:w-1/2 w-sm px-2 sm:w-md">
        <HeroSVG />
      </div>
    </div>
  );
};
export default Hero;
