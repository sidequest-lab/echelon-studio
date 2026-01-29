import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm text-muted-foreground tracking-wide uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="mb-6">
              Design with <span className="italic font-normal">intention</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We believe in the power of restraint. Every element earns its place.
              Every decision serves a purpose. We don't follow trends—we focus on
              what works.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach combines strategic thinking with exceptional craft to
              create digital experiences that feel effortless yet memorable.
              The result? Brands that connect, products that convert, and designs
              that stand the test of time.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-semibold mb-1">12+</p>
                <p className="text-sm text-muted-foreground">Years of experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold mb-1">150+</p>
                <p className="text-sm text-muted-foreground">Projects delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Client retention</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
