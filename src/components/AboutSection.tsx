import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card gradient-border p-2 rounded-2xl">
              <div className="w-full aspect-square rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={profileImg}
                  alt="Nandhitha Milkuri"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm <span className="text-foreground font-semibold">Nandhitha Milkuri</span>, a passionate
              B.Tech Computer Science student with a drive for building impactful software solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              With hands-on experience in full-stack development, data science, and AI/ML, I love
              tackling complex problems and turning ideas into clean, functional applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My journey spans from building management systems to exploring the frontiers
              of artificial intelligence. I'm always eager to learn and contribute to innovative projects.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Projects", value: "3+" },
                { label: "Internships", value: "3+" },
                { label: "Certifications", value: "5+" },
                { label: "Skills", value: "10+" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
