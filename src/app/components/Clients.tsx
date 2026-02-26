import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type ClientLogo = {
  name: string;
  src: string;
};

const clients: ClientLogo[] = [
  { name: "Client Partner", src: "/client-logos/client-partner.svg" },
  { name: "Brothers Solar & Security", src: "/client-logos/brothers-solar-security.svg" },
  { name: "Indian Army", src: "/client-logos/indian-army.svg" },
  { name: "Jayram Transport Corp.", src: "/client-logos/jayram-transport.svg" },
  { name: "Shahknowz Mentorville", src: "/client-logos/shahknowz-mentorville.svg" },
  { name: "Veespa Paints Pvt Ltd", src: "/client-logos/veespa-paints.svg" },
];

export function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden py-20 md:py-32 bg-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-8rem] h-80 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-[-10rem] h-96 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.14),transparent_68%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Partnerships built on delivery, reliability, and measurable impact across defense,
            education, logistics, and industrial sectors.
          </p>
        </motion.div>

        <div className="relative rounded-3xl border border-slate-700/70 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {clients.map((client, index) => (
              <motion.article
                key={client.name}
                initial={{ opacity: 0, scale: 0.95, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-600/70 bg-slate-800/60 p-3 sm:p-4 shadow-[0_0_0_1px_rgba(148,163,184,0.06)] transition-all duration-300 hover:border-cyan-400/55 hover:shadow-[0_18px_40px_-24px_rgba(34,211,238,0.7)]"
              >
                <div className="relative flex h-24 sm:h-28 lg:h-32 items-center justify-center rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 px-3 py-2">
                  <ImageWithFallback
                    src={client.src}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <p className="mt-3 text-center text-xs sm:text-sm text-slate-300 tracking-wide">
                  {client.name}
                </p>

                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-130%" }}
                  whileHover={{ x: "130%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
