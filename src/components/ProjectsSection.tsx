import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AgriFlow Management System",
    description:
      "A comprehensive agricultural management platform connecting farmers with resources, market data, and expert guidance for better crop management.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "REST API"],
    github: "#",
  },
  {
    title: "Elevate Estates",
    description:
      "A modern real estate frontend platform with property listings, advanced search filters, and a seamless user experience for buyers and sellers.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    github: "#",
  },
  {
    title: "Bank Application",
    description:
      "A robust banking application built with Java featuring account management, transactions, balance tracking, and secure user authentication.",
    tech: ["Java", "OOPs", "MySQL", "Data Structures"],
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card gradient-border hover-lift rounded-xl overflow-hidden group flex flex-col"
            >
              <div className="h-44 bg-secondary/50 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text opacity-40 group-hover:opacity-70 transition-opacity">
                  {project.title.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <Button variant="heroOutline" size="sm" asChild className="w-full">
                  <a href={project.github}><Github size={14} /> Code</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
