"use client";

import { motion, useMotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.section
      id="home"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950"
    >
      {/* Efeito de luz seguindo o mouse */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[100px]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto max-w-3xl lg:mx-0 lg:max-w-5xl"
        >
          {/* Status */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-base font-semibold text-zinc-100">
              Disponível para novas oportunidades
            </span>
          </motion.div>

          {/* Apresentação */}
          <motion.p
            variants={itemVariants}
            className="mb-4 text-2xl font-medium text-cyan-400"
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Leandro{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Toledo
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-7 max-w-3xl text-3xl font-medium tracking-tight text-zinc-300 sm:text-4xl md:text-5xl"
          >
            Desenvolvedor de Software
          </motion.h2>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9"
          >
            Desenvolvo aplicações web e mobile, criando interfaces modernas,
            APIs e soluções back-end com foco em organização, integração e
            experiência do usuário.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-lg font-semibold text-zinc-950 transition-all duration-300 hover:bg-cyan-300"
            >
              Ver meus projetos

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://github.com/Le-Toledo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Leandro Toledo"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/leandro-toledo88/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Leandro Toledo"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>

          {/* Tecnologias principais */}
          <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-wrap items-center gap-3"
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Flutter",
              "Node.js",
              "NestJS",
              "PostgreSQL",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.20] px-4 py-2 text-base font-medium text-zinc-100"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
