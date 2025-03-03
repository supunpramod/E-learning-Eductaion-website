import React from "react"

import {motion} from "framer-motion";
import { FaBell } from "react-icons/fa";


const Subscribe = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            className="container py-24 md:py-48">

                <motion.div
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.6,ease:"easeInOut"}}
                
                
                className="flex flex-col justify-center">
                    <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        
                        <h1 className="text-4xl font-bold">450K+ Students are learning from us</h1>
                        <p>Join 450,000+ learners enhancing their skills with expert-led courses. Whether you're a beginner or advanced, our platform offers comprehensive learning experiences to help you succeed. 🚀 Start learning now and unlock new opportunities!</p>
                        <a href="" className="primary-btn !mt-8 inline-flex items-center gap-4 group">Subscribe Now
                        <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                        </a>
                        
                    </div>


                </motion.div>

            </motion.div>
            

        </section>
    )
}

export default Subscribe