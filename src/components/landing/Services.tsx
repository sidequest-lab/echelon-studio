import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Brand Strategy",
    description:
      "We define what your brand stands for and how it should be perceived. Clear positioning that resonates with your audience.",
  },
  {
    title: "Visual Identity",
    description:
      "From logos to complete design systems, we create cohesive visual languages that express your brand's unique character.",
  },
  {
    title: "Digital Product Design",
    description:
      "User-centered interfaces that are intuitive, beautiful, and conversion-focused. Web and mobile applications that work.",
  },
  {
    title: "Web Development",
    description:
      "Clean, performant code that brings designs to life. Modern tech stacks built for speed, scalability, and maintainability.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm text-muted-foreground tracking-wide uppercase mb-4 block">
            What We Do
          </span>
          <h2>
            Services built for <span className="italic font-normal">impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index + 1),
                ease: "easeOut",
              }}
              className="group p-6 md:p-8 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors"
            >
              <span className="text-xs text-muted-foreground mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
