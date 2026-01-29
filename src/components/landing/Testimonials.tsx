import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Studio transformed our brand from forgettable to unforgettable. Their attention to detail and strategic thinking elevated everything we do.",
    author: "Sarah Chen",
    role: "CEO, Vertex Labs",
  },
  {
    quote:
      "Working with them felt effortless. They understood our vision immediately and delivered something far beyond our expectations.",
    author: "Marcus Williams",
    role: "Founder, Nimbus Health",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-sm text-muted-foreground tracking-wide uppercase mb-4 block">
            Testimonials
          </span>
          <h2>
            What our clients <span className="italic font-normal">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index + 1),
                ease: "easeOut",
              }}
              className="p-8 md:p-10 rounded-lg border border-border bg-background"
            >
              <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
