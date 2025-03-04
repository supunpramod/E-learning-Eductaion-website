import React from "react";
import pic3 from "../../assets/pic3.png";

import { motion } from "framer-motion";


const Banner2 = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                {/* Banner Text */}
                <div className="flex flex-col justify-center">
                    <h1>Join Our Community to Start your Journey</h1>
                    <p>Embark on a journey of growth, learning, and connection by joining our community. Whether you're looking for inspiration, guidance, or collaboration, you'll find a supportive network of like-minded individuals ready to help you succeed. Take the first step today and become part of something bigger!</p>

                    
                </div>

                {/* Banner Image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        src={pic3}
                        alt="Learning Platform"
                        className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                    />
                </div>

                
                
            </div>
        </section>
    );
};

export default Banner2;
