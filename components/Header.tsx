export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          LT<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#sobre"
            className="text-base font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Sobre
          </a>

          <a
            href="#tecnologias"
            className="text-base font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Tecnologias
          </a>

          <a
            href="#projetos"
            className="text-base font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="text-base font-medium text-zinc-400 transition-colors hover:text-cyan-400"
          >
            Contato
          </a>
        </div>

        <a
          href="#contato"
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:text-cyan-200"
        >
          Vamos conversar
        </a>
      </nav>
    </header>
  );
}