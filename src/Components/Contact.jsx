import { motion } from "motion/react";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "33bcdfa0-15d8-45b5-ae08-99bc20f5e0f0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="text-center my-20 px-4" id="contact">
      <h1 className="text-4xl text-gray-300 mb-20">Contact</h1>
      <div className="flex flex-wrap md:justify-between justify-center gap-10 items-center md:max-w-5xl md:mx-auto">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
        >
          <img src="./contact.png " className="h-[300px]" alt="contact" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className=" text-white flex flex-col border border-gray-300 p-10 rounded-2xl w-md"
        >
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 space-y-3"
          >
            <input
              type="text"
              placeholder="Name"
              className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 "
              id="input1"
            />
            <input
              type="text"
              placeholder="Email"
              className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 "
            />
            <textarea
              type="text"
              placeholder="Write your message"
              className="outline outline-blue-400 p-4 rounded-2xl text-gray-300 "
            />
            <button className="p-4 rounded-full border border-blue-500 shadow-md shadow-blue-500 hover:border-blue-900 transition-all duration-100" type="submit">
              Submit
            </button>
            <span>{result}</span>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
