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
            {/* Background Image */}
        <motion.div
           className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[100px]"
           style={{ x: mouseX, y: mouseY,
            translateX: "-50%", translateY: "-50%"
            }}
        />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl"
                >
                    {/* Status */}
                    <motion.div 
                        variants={itemVariants}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span> 

                        <span className="text-sm font-medium text-zinc-200">
                            Disponível para novas oportunidades
                        </span>
                    </motion.div>

                    {/* Apresentação */}
                    <motion.p 
                        variants={itemVariants}
                        className="mb-4 text-lg font-medium text-cyan-400"
                    >
                        Olá, eu sou
                    </motion.p>

                    <motion.h1 
                        variants={itemVariants}
                        className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
                    >
                        Leandro{" "}
                         <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Toledo
                        </span>
                    </motion.h1>


                    <motion.h2 
                        variants={itemVariants}
                        className="mt-6 max-w-3xl text-2xl font-medium tracking-tight text-zinc-400 sm:text-3xl md:text-4xl"
                    >
                        Desenvolvedor Web & Mobile
                    </motion.h2>

                    {/* Descrição */}
                    <motion.p 
                        variants={itemVariants}
                        className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
                    >
                      Transformo ideias em aplicações web e mobile modernas, responsivas
                      e funcionais, combinando interfaces bem construídas, integração com
                      APIs e código organizado.
                    </motion.p>

                    {/* Botões */}
                <motion.div 
                        variants={itemVariants}
                        className="mt-10 flex flex-wrap items-center gap-4">
                    <a
                        href="#projetos"
                        className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition-all duration-300 hover:bg-cyan-300"
                    >
                        Ver meus projetos

                        <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>

                    <a
                        href="https://github.com/Le-Toledo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub de Leandro Toledo"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/leandro-toledo88/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Leandro Toledo"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        <FaLinkedinIn />
                    </a>
                </motion.div>

                {/* Tecnologias principais */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-14 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500"
                >
                    <span>React</span>
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Tailwind CSS</span>
                    <span>Flutter</span>
                    <span>PostgreSQL</span>
                    <span>React-Native</span>
                </motion.div>

            </motion.div>
        </div>
        </motion.section>
    );
}