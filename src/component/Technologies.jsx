import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5, DiCss3, DiJavascript1, DiMysql, DiMongodb, DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si"; // For Express.js
import { motion } from "framer-motion";

const Technologies = () => {
    // Animation variant for each icon
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>

            <div className="flex flex-wrap items-center justify-center gap-8">
                {/* HTML */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    <DiHtml5 className="text-7xl text-orange-500" />
                </motion.div>

                {/* CSS */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                    <DiCss3 className="text-7xl text-blue-500" />
                </motion.div>

                {/* JavaScript */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                    <DiJavascript1 className="text-7xl text-yellow-400" />
                </motion.div>

                {/* MySQL */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                >
                    <DiMysql className="text-7xl text-blue-600" />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                    <DiMongodb className="text-7xl text-green-600" />
                </motion.div>

                {/* Node.js */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                >
                    <DiNodejsSmall className="text-7xl text-green-500" />
                </motion.div>

                {/* Express.js */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                >
                    <SiExpress className="text-7xl text-gray-600" />
                </motion.div>

                {/* React */}
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-6"
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;
