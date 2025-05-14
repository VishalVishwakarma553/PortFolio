import { projects } from "../constants/constant";
import { motion } from "motion/react"


const Projects = () => {
  return (
    <motion.div 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:100}}
    transition={{duration:1.5}}
    className="px-4" id="project">
      <h1 className="text-4xl my-20 text-center text-gray-300">Projects</h1>
      {projects.map((projects, idx) => (
        <motion.div
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:100}}
        transition={{duration:1}}
        className="p-4 flex flex-wrap-reverse sm:flex-nowrap max-w-3xl text-white border border-blue-300 rounded-2xl hover:shadow-2xl shadow-blue-600 hover:scale-102 transition-all duration-100 mx-auto mb-10
        ">
          <div className="mr-2">
            <h2 className="pb-2 text-2xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-bold">{projects.name}</h2>
            <p className="mb-2 text-gray-200">{projects.description}</p>
            <div className="flex gap-2">

            <a href={projects.GithubUrl} className="p-4 border border-blue-600 rounded-2xl hover:bg-blue-400 shadow-2xl shadow-blue-600 cursor-pointer">Github</a>
            <a href={projects.LiveUrl} className="p-4 border border-blue-600 rounded-2xl hover:bg-blue-400 shadow-2xl shadow-blue-600 cursor-pointer">Live</a>
            </div>
          </div>
          <img src={projects.img} alt="image" className="sm:w-[400px] w-full" />
        </motion.div>
      ))}
      <div className="flex justify-center my-5">

      <a href="https://github.com/VishalVishwakarma553" className="p-4 border border-blue-500 rounded-2xl text-white text-3xl hover:text-blue-500 hover:border-blue-100  cursor-pointer transition-all duration-200" style={{fontFamily: "'Poppins', sans-serif"}}>See more</a>
      </div>
    </motion.div>
  );
};

export default Projects;
