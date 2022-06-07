import React from "react";
import Logo from "../../profile.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../../src/App.css";
import { IoMove } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        drag
        dragConstraints={{ left: -60, right: 60, top: -100, bottom: 100 }}
      >
        <div className="p-5   cursor-pointer max-w-xl m-2  mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-5">
          <div className="shrink-0">
            <img src={Logo} className="w-24  sm:w-80 rounded-xl " alt="Logo" />
          </div>
          <div className="p-1 sm:m-10">
            <h1 className="text-xl sm:text-4xl font-bold text-black">
              LEANDRO BORDON
            </h1>
            <p className="text-sm text-left sm:text-base text-black">
              Frontend Developer
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-row space-x-4 text-center my-4">
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            drag
            dragConstraints={{ left: -60, right: 60, top: -100, bottom: 100 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="flex bg-black  cursor-pointer rounded-xl ">
                <IoMove className="text-white m-2 cursor-pointer w-4 h-auto " />
                <Link to="/about-me">
                  <button className="rounded-xl shadow-lg text-center text-white  py-0 px-7 sm:py-1 sm:px-14    bg-black hover:bg-white hover:text-black border  border-black text-lg">
                    About me
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            drag
            dragConstraints={{ left: -60, right: 60, top: -100, bottom: 100 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="flex bg-black rounded-xl  cursor-pointer">
                <IoMove className="text-white m-2 cursor-pointer w-4 h-auto " />
                <Link to="/Contact">
                  <button className="rounded-xl shadow-lg text-center text-white  py-0 px-7 sm:py-1 sm:px-14    bg-black hover:bg-white hover:text-black border  border-black text-lg">
                    Contact
                  </button>
                  {/* <button className=" rounded-xl shadow-lg ml-4 text-center inline-flex sm:py-1 sm:px-14  text-black bg-white  py-0 px-7 focus:outline-none hover:bg-black hover:text-white hover:border-black  border  text-lg">
              Contact
  </button>*/}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
