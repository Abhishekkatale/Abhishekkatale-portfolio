import aboutImg from "../assets/Abhi.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
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
        <div className="border-b border-neutral-900 pb-8">
            <h1 className="my-20 text-center text-4xl font-semibold">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>

            <div className="flex flex-wrap">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <motion.img
                            className="rounded-2xl w-[300px] lg:w-[400px] object-cover"
                            src={aboutImg}
                            alt="About"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start p-4 lg:p-8">
                        <motion.p
                            className="my-2 max-w-xl py-6"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
