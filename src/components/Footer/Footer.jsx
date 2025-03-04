import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className="py-28 bg-[#f7f7f7]">
            <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}

            className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                    {/* First section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">Brightmind Academy</h1>
                        <p>
                            Your gateway to mastering web and mobile development. We provide industry-relevant courses, hands-on projects, and expert guidance to help you build a successful career in tech. Whether you're a beginner or an experienced professional, our academy offers the tools and support you need to excel in the digital world. Join us and turn your passion into expertise!
                        </p>
                    </div>

                    {/* Second section */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Courses</h1>
                            <ul className="space-y-2 text-lg text-dark2">
                                <li className="cursor-pointer hover:text-secondary duration-200">Web Development</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">Software Development</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">Apps Development</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">E-learning</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">Links</h1>
                            <ul className="space-y-2 text-lg text-dark2">
                                <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">Services</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">About</li>
                                <li className="cursor-pointer hover:text-secondary duration-200">Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* Third section */}
                    <div className="space-y-4 max-w-[300px]">
                        <h1 className="text-2xl font-bold">Get In Touch</h1>
                        <div className="flex items-center">
                            <input 
                                type="text" 
                                placeholder="Enter your email" 
                                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
                            />
                            <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                        </div>
                        
                        {/* Social icons */}
                        <div className="flex space-x-6 py-3">
                            <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                                <FaWhatsapp />
                            </a>
                            <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                                <FaInstagram />
                            </a>
                            <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                                <TbWorldWww />
                            </a>
                            <a href="#" className="cursor-pointer hover:text-primary hover:scale-105 duration-200">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
