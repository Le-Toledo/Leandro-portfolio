export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full border-white/10 bg-zinc-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between p-6">

                <a href="#home"
                className="text-xl font-bold tracking-tight text-white"
                >
                    LT<span className="text-cyan-400">.</span>                   
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#sobre"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                        Sobre
                    </a>

                    <a href="#tecnologias"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                        Tecnologias
                    </a>
                    
                    <a href="#projetos"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                        Projetos
                    </a>

                    <a href="#contato"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                        Contato
                    </a>
                </div>
                
                <a href="#contato"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                    Vamos conversar
                </a>

            </nav>
        </header>
    );
}