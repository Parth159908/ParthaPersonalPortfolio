import { motion } from "framer-motion";
import { Brain, FileText, Workflow, Share2 } from "lucide-react";

// TODO: Move services data to src/data/portfolio.json under a "services" key
const SERVICES = [
  {
    icon: Share2,
    title: "SharePoint & SPFx Development",
    subtitle: "Microsoft 365 · SPFx · Enterprise Portals",
    description:
      "Developing enterprise-grade SharePoint Online solutions, custom SPFx web parts, document management systems, and modern collaboration portals tailored for business productivity and operational efficiency.",
    tags: ["SharePoint", "SPFx", "React", "TypeScript", "Microsoft 365"],
  },
  {
    icon: Workflow,
    title: "Power Platform Solutions",
    subtitle: "Power Apps · Power Automate · Dataverse",
    description:
      "Designing modern business applications and workflow automation systems using Power Apps and Power Automate. From approval systems to operational dashboards and enterprise process automation.",
    tags: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Canvas Apps",
      "Workflow Automation",
    ],
  },

  {
    icon: Brain,
    title: "AI Document Automation",
    subtitle: "Azure AI · OCR · Intelligent Extraction",
    description:
      "Building AI-powered document processing systems using Azure AI Document Intelligence, custom extraction models, and classification models to automate invoice processing, compliance verification, and business document workflows.",
    tags: [
      "Azure AI",
      "Document Intelligence",
      "OCR",
      "AI Builder",
      "Automation",
    ],
  },
  {
    icon: FileText,
    title: "Copilot & Business Automation",
    subtitle: "Copilot Studio · AI Workflows · Integrations",
    description:
      "Creating intelligent Copilot agents and AI-driven workflow solutions that automate document review, compliance checks, approvals, and business operations using Microsoft AI and automation services.",
    tags: [
      "Copilot Studio",
      "AI Agents",
      "Power Platform",
      "Business Automation",
      "Integrations",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl sm:text-5xl font-black tracking-tight mb-16"
        >
          <span className="hero-heading">What I</span>{" "}
          <span className="text-white">bring to the table.</span>
        </motion.h2>

        <div className="space-y-0">
          {SERVICES.map((service, index) => {
            const num = String(index + 1).padStart(2, "0");
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                {index === 0 && <div className="h-px bg-[#1a1a1a] mb-10" />}

                <div className="grid md:grid-cols-[80px_1fr] gap-6 pb-10">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-black text-[#1f1f1f] select-none">
                      {num}
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[#111] border border-[#2a2a2a]">
                          <Icon size={18} className="text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-500 mt-0.5">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#111] border border-[#2a2a2a] text-gray-400 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#1a1a1a] mb-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
