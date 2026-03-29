import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  { title: "Azure AI Fundamentals", issuer: "Microsoft", icon: "☁️" },
  { title: "DSA Bootcamp", issuer: "GeeksforGeeks", icon: "💻" },
  { title: "Smart India Hackathon", issuer: "SIH Participation", icon: "🏆" },
  { title: "Python for Data Science", issuer: "NPTEL / Coursera", icon: "📊" },
  { title: "Web Development Fundamentals", issuer: "Udemy", icon: "🌐" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="gradient-text">Certifications</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card gradient-border hover-lift p-6 rounded-xl text-center"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <Award size={20} className="text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
