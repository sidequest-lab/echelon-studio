import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "Vertex Labs",
    category: "Brand & Digital Product",
    description: "Complete rebrand and product redesign for a B2B SaaS platform.",
  },
  {
    client: "Nimbus Health",
    category: "Web Design & Development",
    description: "Marketing website and patient portal for a healthcare startup.",
  },
  {
    client: "Elevate Finance",
    category: "Brand Identity",
    description: "Visual identity system for a modern investment platform.",
  },
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-spacing section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm text-muted-foreground tracking-wide uppercase mb-4 block">
              Selected Work
            </span>
            <h2>
              Projects we're <span className="italic font-normal">proud</span> of
            </h2>
          </div>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            View all work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.client}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * (index + 1),
                ease: "easeOut",
              }}
              className="group block p-6 md:p-8 rounded-lg border border-border bg-background hover:bg-accent/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {project.client}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
