import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Eduskills (AICTE)",
    period: "2024",
    description: "Worked on data analysis, visualization, and machine learning models. Applied statistical methods to derive actionable insights from complex datasets.",
  },
  {
    role: "AI-ML Virtual Intern",
    company: "Eduskills (AICTE)",
    period: "2024",
    description: "Explored artificial intelligence and machine learning concepts. Built and trained models for real-world classification and prediction tasks.",
  },
  {
    role: "SQL Intern",
    company: "Eduskills (AICTE)",
    period: "2024",
    description: "Gained expertise in database design, complex SQL queries, optimization techniques, and relational database management systems.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card gradient-border p-5 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}">
                      <Briefcase size={16} className="text-primary" />
                      <span className="text-xs text-primary font-mono">{exp.period}</span>
                    </div>
                    <h3 className="font-semibold text-base">{exp.role}</h3>
                    <p className="text-sm text-primary/80 mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
