import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Abhi.jpg";
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 lg:pb-16 lg:mb-20">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"                        
                        className="pb-8 text-3xl font-light tracking-tight lg:text-7xl lg:mt-16">
                            Abhishek Katale
                        </motion.h1>
                        <motion.span 
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"  
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-5xl tracking-tight text-transparent">
                            Software Developer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"  
                        className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0}}
                            animate={{ x: 0, opacity: 1}}
                            transition={{ duration: 1, delay:1.2}}
                            src={profilePic}
                            alt="Abhishek Katale"
                            className="rounded-2xl w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover"
                        />
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Hero;
