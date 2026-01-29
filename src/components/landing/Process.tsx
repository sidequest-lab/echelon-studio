import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dive deep into your business, audience, and goals. Research and strategy form the foundation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Concepts become reality. We explore, iterate, and refine until the solution feels inevitable.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Development with precision. Clean code, smooth animations, and attention to every detail.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ensure a smooth launch and provide support to help your project thrive long-term.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm text-muted-foreground tracking-wide uppercase mb-4 block">
            How We Work
          </span>
          <h2>
            A process built for <span className="italic font-normal">clarity</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index + 1),
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="relative">
                <span className="text-4xl md:text-5xl font-semibold text-muted-foreground/30 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
