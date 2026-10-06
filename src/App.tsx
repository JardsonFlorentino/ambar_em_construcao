import logo from './assets/logo.png'
import logoJardson from './assets/logo-jardson.png'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Elementos decorativos de fundo suaves */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-soft/20 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl" />

      {/* Header com Logo */}
      <header className="relative z-10 w-full py-12 flex justify-center items-center">
        {/* Luz dourada sofisticada (Glow Effect) por trás da logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 md:w-96 md:h-48 bg-[#D4AF37]/25 blur-[50px] md:blur-[80px] rounded-[100%] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 md:w-48 md:h-24 bg-[#D4AF37]/40 blur-[30px] rounded-full pointer-events-none mix-blend-multiply" />

        <img src={logo} alt="Âmbar" className="relative z-10 h-16 md:h-24 object-contain transition-transform duration-700 hover:scale-[1.02]" />
      </header>

      {/* Conteúdo Principal */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <span className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-4">
          Novidades em breve
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight">
          Estamos preparando <br className="hidden md:block" />
          algo <span className="italic text-primary">especial</span>
        </h1>
        
        <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Nossa nova coleção de T-Shirts, Pijamas e Moda Fitness está quase pronta. 
          Uma experiência de compra totalmente renovada, com a elegância que você já conhece.
        </p>
      </main>

      {/* Footer / Redes Sociais */}
      <footer className="relative z-10 w-full py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/ambar_mdf/#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="text-xs text-text-secondary mt-2">
          &copy; {new Date().getFullYear()} Âmbar. Todos os direitos reservados.
        </p>
      </footer>

      {/* Assinatura Jardson (Elegante) */}
      <a 
        href="https://www.jardsonflorentino.com.br" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 group z-50 flex items-center gap-3 bg-white/70 backdrop-blur-md border border-primary/20 px-3 py-2 rounded-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300"
        aria-label="Desenvolvido por Jardson Florentino"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-medium group-hover:text-primary transition-colors hidden sm:block pl-2">
          By Jardson
        </span>
        <div className="relative flex items-center justify-center p-[2px] rounded-full bg-gradient-to-br from-primary to-[#b8952c]">
          <img src={logoJardson} alt="Jardson Florentino" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover ring-1 ring-white" />
        </div>
      </a>
    </div>
  )
}

export default App
