import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Hamburger from "./Hamburger";
const Navbar = () => {
  return(
    <div className="flex items-center justify-between my-5 md:px-5 mx-2 ">
      <h1 className="text-2xl text-white portfolio">Portfolio</h1>
      <div className="sm:flex gap-6 text-white hidden icon-list">
        <a href="#hero" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#technology" className="hover:underline">Technology</a>
        <a href="#project" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
      <div className=" sm:flex gap-4 text-gray-300 hidden ">
      <a href="https://www.linkedin.com/in/vishal-vishwkarmaofficial/" target="_blank"><CiLinkedin className="h-10 w-10 hover:text-blue-500 hover:scale-110 transition-all duration-100" /></a> 
      <a href="https://github.com/VishalVishwakarma553" target="_blank"><FaGithub className="h-9 w-9 hover:text-blue-500 hover:scale-110 transition-all duration-100" /></a> 
      <FaInstagram className="h-9 w-9 hover:text-blue-500 hover:scale-110 transition-all duration-100"/>
      </div>
      <div className="sm:hidden">
      <Hamburger ></Hamburger>
      </div>
    </div>
  )
}
export default Navbar
