import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation variants for the project entries
  const entryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial="hidden"
            animate="visible"
            variants={entryVariants}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Staggered effect
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Render technologies if available */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
