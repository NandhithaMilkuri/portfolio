import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card gradient-border hover-lift p-8 rounded-xl text-center"
        >
          <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
            <GraduationCap size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-1">Bachelor of Technology</h3>
          <p className="text-primary font-medium mb-2">Computer Science & Engineering</p>
          <p className="text-muted-foreground text-sm">Currently pursuing a B.Tech in CSE with focus on software development, data science, and emerging technologies.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
