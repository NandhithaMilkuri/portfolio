import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Database, Wrench, BookOpen } from "lucide-react";

const categories = [
  {
    title: "Languages & Core",
    icon: Code2,
    skills: ["SQL", "Java", "Data Structures", "OOPs"],
  },
  {
    title: "Frontend Development",
    icon: BookOpen,
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "UI/UX Design"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "CRUD Operations", "Data Modeling"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Node.js", "REST API", "RBAC"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        {/* Slideshow */}
        <div className="relative overflow-hidden rounded-xl glass-card gradient-border p-8 min-h-[220px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={false}
              animate={{
                opacity: currentSlide === i ? 1 : 0,
                x: currentSlide === i ? 0 : currentSlide > i ? -60 : 60,
              }}
              transition={{ duration: 0.5 }}
              className={`${currentSlide === i ? "block" : "hidden"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === i ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
