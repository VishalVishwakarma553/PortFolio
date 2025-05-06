import { motion } from "motion/react";
const About = () => {
  return (
    <div className="my-20" id="about">
      <h1 className="text-4xl text-center pb-10 text-zinc-200 mb-10">
        About <span className="text-neutral-300"> Me</span>
      </h1>
      <div className="flex flex-wrap  max-w-5xl gap-28 justify-center items-center mx-auto">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src="./about.jpg" alt="Aboutt" />
        </motion.div>
        <motion.p
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white sm:w-1/2 px-6 sm:px-0 about"
        >
          I am a tech enthusiast with expertise in React.js, MongoDB, Node.js,
          and more. Passionate about creating innovative solutions. A aspiring
          software developer with a strong foundation in full-stack web
          development and problem-solving . Skilled in collaborating within
          agile teams, translating user needs into technical solutions, and
          delivering high-quality, maintainable code.Adaptable at integrating
          APIs, and implementing secure authentica tion systems. Passionate
          about continuous learning and building impactful tech solutions that
          solve real-world problems.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
