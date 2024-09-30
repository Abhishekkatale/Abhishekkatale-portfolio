import { motion } from "framer-motion"; // Correct import
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl sm:text-4xl lg:text-5xl"
      >
        Projects
      </motion.h1>
      <div className="px-4 md:px-8 lg:px-16">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-1/4 mb-4 sm:mb-0 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-w-xs rounded"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold text-lg sm:text-xl">{project.title}</h6>
              <p className="mb-4 text-sm sm:text-base lg:text-lg text-neutral-400">
                {project.description}
              </p>

              {/* Render technologies if available */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
