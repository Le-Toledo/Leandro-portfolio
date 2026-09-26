"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const codeQuestImages = [
  "/projects/codequest/codequest.png",
  "/projects/codequest/codequest-1.png",
  "/projects/codequest/codequest-2.png",
  "/projects/codequest/codequest-3.png",
  "/projects/codequest/codequest-4.png",
];

const vendaiImages = [
  "/projects/vendai/vendai-1.png",
  "/projects/vendai/vendai-2.png",
  "/projects/vendai/vendai-3.png",
  "/projects/vendai/vendai-4.png",
];

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVendaiImage, setCurrentVendaiImage] = useState(0);

  function nextImage() {
    setCurrentImage((current) =>
      current === codeQuestImages.length - 1 ? 0 : current + 1
    );
  }

  function previousImage() {
    setCurrentImage((current) =>
      current === 0 ? codeQuestImages.length - 1 : current - 1
    );
  }

  function nextVendaiImage() {
    setCurrentVendaiImage((current) =>
      current === vendaiImages.length - 1 ? 0 : current + 1
    );
  }

  function previousVendaiImage() {
    setCurrentVendaiImage((current) =>
      current === 0 ? vendaiImages.length - 1 : current - 1
    );
  }

  return (
    <section
      id="projetos"
      className="border-t border-white/5 bg-zinc-950/90 py-24 sm:py-32"
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
            Projetos
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Projetos que mostram
            <span className="block text-zinc-400">
              meu desenvolvimento na prática.
            </span>
          </h2>

          <p className="mt-6 text-xl leading-8 text-zinc-200">
            Projetos desenvolvidos para aplicar na prática conhecimentos em
            desenvolvimento web e mobile, APIs, banco de dados e experiência
            do usuário.
          </p>
        </motion.div>

        {/* CodeQuest */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Informações */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-xl font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Projetos em destaque
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                CodeQuest
              </h3>

              <p className="mt-6 text-xl leading-8 text-zinc-200">
                Aplicativo mobile desenvolvido em React Native para tornar o
                aprendizado de programação mais interativo, combinando
                desafios, lógica e uma experiência inspirada em jogos.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["React Native", "TypeScript", "Mobile", "UI/UX"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xm font-medium text-zinc-200"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Le-Toledo/devquest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  <FaGithub size={18} />
                  Ver código
                </a>

                <a
                  href="https://apps.apple.com/br/app/codequest/id6787722072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Ver na App Store

                  <ExternalLink
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm text-zinc-500">
                  {currentImage + 1} / {codeQuestImages.length}
                </p>
              </div>
            </div>

            {/* Carrossel CodeQuest */}
            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-t border-white/10 bg-black/20 p-6 lg:border-l lg:border-t-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[470px] w-full"
                >
                  <Image
                    src={codeQuestImages[currentImage]}
                    alt={`Tela ${currentImage + 1} do CodeQuest`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={previousImage}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-zinc-900"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Próxima imagem"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-zinc-900"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {codeQuestImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Mostrar imagem ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === index
                        ? "w-6 bg-cyan-400"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* VendAI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          <div className="grid lg:grid-cols-2">
            {/* Carrossel VendAI */}
            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden border-b border-white/10 bg-black/20 p-6 lg:border-b-0 lg:border-r">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVendaiImage}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[470px] w-full"
                >
                  <Image
                    src={vendaiImages[currentVendaiImage]}
                    alt={`Tela ${currentVendaiImage + 1} do VendAI`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={previousVendaiImage}
                aria-label="Imagem anterior do VendAI"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-zinc-900"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextVendaiImage}
                aria-label="Próxima imagem do VendAI"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-zinc-900"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {vendaiImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentVendaiImage(index)}
                    aria-label={`Mostrar imagem ${index + 1} do VendAI`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentVendaiImage === index
                        ? "w-6 bg-cyan-400"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Informações VendAI */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-xl font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Aplicação completa
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                VendAI
              </h3>

              <p className="mt-6 text-xl leading-8 text-zinc-200">
                Plataforma de gestão para profissionais e pequenos negócios,
                desenvolvida em Flutter com back-end em NestJS, API REST,
                autenticação, PostgreSQL e recursos de inteligência
                artificial.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Flutter",
                  "Dart",
                  "NestJS",
                  "TypeScript",
                  "PostgreSQL",
                  "Prisma",
                  "REST API",
                  "IA",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xm font-medium text-zinc-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://vendai-site-xi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Conhecer o VendAI

                  <ExternalLink
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-8">
                <p className="text-sm text-zinc-500">
                  {currentVendaiImage + 1} / {vendaiImages.length}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}