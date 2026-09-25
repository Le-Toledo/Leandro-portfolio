"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiPostgresql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const technologyGroups = [
  {
    title: "Front-end",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Mobile",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "React Native", icon: SiReact },
    ],
  },
  {
    title: "Back-end",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Ferramentas",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      className="border-t border-white/5 bg-zinc-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Tecnologias
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tecnologias que utilizo para
            <span className="block text-zinc-500">
              transformar ideias em código.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
            Ferramentas e tecnologias que utilizo no desenvolvimento de
            aplicações web, mobile e back-end.
          </p>
        </motion.div>

        {/* Cards das áreas */}
        <motion.div 
           variants={cardsContainerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.15 }}
           className="mt-16 grid gap-4 md:grid-cols-2">
          {technologyGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Nome da área */}
              <h3 className="mb-6 text-lg font-semibold text-white">
                {group.title}
              </h3>

              {/* Tecnologias da área */}
              <div className="flex flex-wrap gap-3">
                {group.technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-zinc-900 hover:text-white"
                    >
                      <Icon className="text-lg text-cyan-400" />

                      <span>{technology.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}