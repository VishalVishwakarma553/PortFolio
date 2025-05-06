import { motion } from "motion/react"

const Contact = () => {
    return (
        <div className="text-center my-20 px-4" id="contact">
            <h1 className="text-4xl text-gray-300 mb-20">Contact</h1>
            <div className="flex flex-wrap md:justify-between justify-center gap-10 items-center md:max-w-5xl md:mx-auto">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                >

                <img src="./contact.png " className="h-[300px]" alt="contact"/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1.5}}
                className=" text-white flex flex-col border border-gray-300 p-10 rounded-2xl w-md">
                <form action="" className="grid grid-cols-1 space-y-3">
                    <input type="text" placeholder="Name" className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 " id="input1"/>
                    <input type="text" placeholder="Email" className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 "/>
                    <textarea type="text" placeholder="Write your message" className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 "/>
                    <button className="p-4 rounded-full border border-blue-500 shadow-md shadow-blue-500 hover:border-blue-900 transition-all duration-100">Submit</button>
                </form>
                </motion.div>
            </div>
        </div>
    )
}
export default Contact