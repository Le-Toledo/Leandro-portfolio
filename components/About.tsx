"use client";

import { motion } from "motion/react";
import { Code2, Database, Smartphone } from "lucide-react";

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

export default function About() {
  return (
    <section
      id="sobre"
      className="border-t border-white/5 bg-zinc-950/90 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-4 text-xl font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Sobre mim
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Desenvolvimento de software com foco em
            <span className="block text-zinc-400">
              aplicações web, mobile e back-end.
            </span>
          </h2>
        </motion.div>

        {/* Conteúdo da seção */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Texto */}
          <div className="max-w-xl lg:max-w-lg">
            <p className="text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
              Sou desenvolvedor de software e venho construindo projetos
              completos para web e mobile, trabalhando com interfaces, APIs
              REST, autenticação, bancos de dados e integração entre diferentes
              serviços.
            </p>

            <p className="text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">
              Gosto de aprender desenvolvendo soluções reais, passando pelas
              diferentes etapas de uma aplicação  da interface e experiência
              do usuário à lógica de back-end, persistência de dados e deploy.
            </p>
          </div>

          {/* Áreas de atuação */}
          <div>
            <p className="mb-5 text-base font-medium text-zinc-500">
              Áreas de atuação
            </p>

            <motion.div
              variants={cardsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4"
            >
              {/* Web */}
              <motion.div
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Code2 size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Desenvolvimento Web
                    </h3>

                    <p className="mt-1 text-base text-zinc-300">
                      React, Next.js e TypeScript
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile */}
              <motion.div
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Smartphone size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Desenvolvimento Mobile
                    </h3>

                    <p className="mt-1 text-base text-zinc-300">
                      Flutter e React Native
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Back-end */}
              <motion.div
                variants={cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Database size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Back-end & Banco de Dados
                    </h3>

                    <p className="mt-1 text-base text-zinc-300">
                      Node.js, NestJS, APIs REST e PostgreSQL
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}