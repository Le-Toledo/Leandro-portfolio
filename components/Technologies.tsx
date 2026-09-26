"use client";

import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiSupabase,
  SiVercel,
  SiRender,
  SiFigma,
  SiPython,
  SiKotlin,
  SiPandas,
  SiFlask,
  SiDjango,

} from "react-icons/si";

const technologyGroups = [
  {
    title: "Front-end",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
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
      { name: "NestJS", icon: SiNestjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    title: "Banco de Dados",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Supabase", icon: SiSupabase },
      { name: "Pandas", icon: SiPandas },
    ],
  },
  {
    title: "DevOps & Deploy",
    technologies: [
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Design & Ferramentas",
    technologies: [{ name: "Figma", icon: SiFigma }],
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
          <p className="mb-4 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Tecnologias
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tecnologias que fazem parte
            <span className="block text-zinc-400">
              do meu desenvolvimento de software.
            </span>
          </h2>

          <p className="mt-6 text-xl leading-8 text-zinc-200">
            Ferramentas e tecnologias que utilizo para criar aplicações web, mobile e
            back-end, além de trabalhar com bancos de dados e deploy.
          </p>
        </motion.div>

        {/* Cards das áreas */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-4 md:grid-cols-2"
        >
          {technologyGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"            >
              <h3 className="mb-6 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-600/60 px-4 py-3 text-sm text-zinc-100 transition-all duration-300 hover:border-cyan-400/30 hover:bg-zinc-900 hover:text-white"
                    >
                      <Icon className="text-xl text-cyan-400" />
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