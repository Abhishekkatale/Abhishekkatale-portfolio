import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Abhi.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    // Animation variants for the text and image
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="border-b border-neutral-900 pb-8 lg:pb-16 lg:mb-20">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            className="pb-8 text-3xl font-light tracking-tight lg:text-7xl lg:mt-16"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            Abhishek Katale
                        </motion.h1>
                        <motion.span
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        >
                            Software Developer
                        </motion.span>
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tight"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            src={profilePic}
                            alt="Abhishek Katale"
                            className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Hero;
