import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities.
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {[
              { icon: Mail, label: "milkurinandhitha@gmail.com", href: "mailto:milkurinandhitha@gmail.com" },
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nandhitha-milkuri/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                  <item.icon size={18} />
                </div>
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
