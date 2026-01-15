import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

export default function ImpostorLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você vai integrar Firebase Auth + PagBank
    console.log('Email:', email, 'Password:', password);
    // Depois de criar conta, redireciona pro pagamento PagBank
  };

  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }
        
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 1;
          mix-blend-mode: overlay;
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .mirror-glow {
          box-shadow: 0 0 80px rgba(212, 175, 55, 0.3),
                      inset 0 0 40px rgba(10, 14, 26, 0.8);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        
        .btn-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #d4af37 100%);
          background-size: 200% 200%;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-gold:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }
        
        .btn-gold::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .btn-gold:hover::before {
          left: 100%;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Grain Overlay */}
      <div className="grain"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a2332] to-[#0a0e1a]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600 rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Badge Ebook Vivo */}
            <div className="text-center mb-8 animate-fade-in-up">
              <span className="inline-block px-6 py-2 border-2 border-[#d4af37] text-[#d4af37] text-sm font-semibold tracking-[0.3em] uppercase">
                Ebook Vivo
              </span>
            </div>

            {/* Main Title */}
            <h1 className="hero-title text-6xl md:text-8xl font-bold text-center mb-6 animate-fade-in-up delay-1">
              <div className="text-white mb-2">O IMPOSTOR</div>
              <div className="gradient-gold">DENTRO DE VOCÊ</div>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-2">
              Descubra a voz que sabota sua vida — e faça ela calar.
            </p>

            {/* Price Badge */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-3">
              <span className="text-gray-400 text-2xl line-through">R$ 500</span>
              <span className="text-5xl font-bold gradient-gold">R$ 60</span>
              <span className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full animate-pulse">
                Vagas Limitadas
              </span>
            </div>

            {/* Mirror Image Placeholder - Você substituirá pela imagem real */}
            <div className="relative max-w-md mx-auto mb-12 animate-fade-in-up delay-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#1a2332] to-[#0a0e1a] rounded-lg mirror-glow flex items-center justify-center border border-[#d4af37]/20">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <Camera size={48} className="text-[#d4af37]" />
                  </div>
                  <p className="text-gray-400 text-sm">Imagem do espelho/personagem aqui</p>
                  <p className="text-gray-500 text-xs mt-2">(Substitua esta div pela sua imagem)</p>
                </div>
              </div>
            </div>

            {/* Author */}
            <p className="text-center text-2xl tracking-[0.3em] text-gray-300 font-light mb-12 animate-fade-in-up delay-4">
              HENRIQUE SIQUEIRA
            </p>

            {/* CTA Button */}
            <div className="text-center animate-fade-in-up delay-4">
              <a href="#cadastro" className="inline-block btn-gold text-[#0a0e1a] font-bold text-lg px-12 py-5 rounded-full tracking-wider hover:scale-105 transition-transform">
                GARANTA SUA VAGA AGORA
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-16 animate-bounce">
              <div className="inline-flex flex-col items-center text-gray-500">
                <span className="text-xs mb-2 tracking-widest">ROLE PARA BAIXO</span>
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 bg-[#d4af37] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Ebook Vivo Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="hero-title text-5xl font-bold text-center mb-6">
              O que é um <span className="gradient-gold">Ebook Vivo?</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Não é apenas um livro digital. É uma experiência imersiva que transforma sua jornada.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-[#d4af37]/20 card-hover">
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-2xl font-bold mb-4 gradient-gold">Páginas Interativas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Vire as páginas como um livro real, com efeitos visuais e transições suaves que tornam a leitura única.
                </p>
              </div>

              <div className="bg-[#1a2332] p-8 rounded-2xl border border-[#d4af37]/20 card-hover">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold mb-4 gradient-gold">Vídeos Integrados</h3>
                <p className="text-gray-400 leading-relaxed">
                  Assista a conteúdos exclusivos dentro do próprio livro, complementando sua compreensão de forma visual.
                </p>
              </div>

              <div className="bg-[#1a2332] p-8 rounded-2xl border border-[#d4af37]/20 card-hover">
                <div className="text-5xl mb-4">🔊</div>
                <h3 className="text-2xl font-bold mb-4 gradient-gold">Leitura Automática</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ouça cada palavra sendo narrada com destaque sincronizado, perfeito para aprender de forma multissensorial.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#d4af37]/10 to-transparent border-l-4 border-[#d4af37] rounded-r-2xl">
                <p className="text-xl text-gray-300">
                  <span className="gradient-gold font-bold">O primeiro Ebook Vivo</span> sobre Síndrome do Impostor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section - Einstein & Michelle */}
      <section className="py-24 bg-[#0d1117] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-12 italic">
              "Inspirado nas jornadas de grandes mentes que também enfrentaram a Síndrome do Impostor"
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* Einstein Placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-[#d4af37]/30 mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-4xl">🧠</span>
                </div>
                <p className="text-gray-500 text-sm">Albert Einstein</p>
                <p className="text-gray-600 text-xs">Físico Teórico</p>
              </div>

              {/* Michelle Obama Placeholder */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gray-800 border-2 border-[#d4af37]/30 mb-4 overflow-hidden flex items-center justify-center">
                  <span className="text-4xl">👑</span>
                </div>
                <p className="text-gray-500 text-sm">Michelle Obama</p>
                <p className="text-gray-600 text-xs">Ex-Primeira Dama dos EUA</p>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
              Mesmo as pessoas mais brilhantes já duvidaram de si mesmas. Este livro explora como elas superaram esse desafio.
            </p>
          </div>
        </div>
      </section>

      {/* Signup/Payment Section */}
      <section id="cadastro" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-[#1a2332] p-10 rounded-3xl border-2 border-[#d4af37]/30 shadow-2xl">
              
              <div className="text-center mb-8">
                <h2 className="hero-title text-4xl font-bold mb-4">
                  {showLogin ? 'Bem-vindo de volta' : 'Comece sua jornada'}
                </h2>
                <p className="text-gray-400">
                  {showLogin ? 'Faça login para acessar seu ebook' : 'Crie sua conta e garanta seu acesso'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37] text-white transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-lg focus:outline-none focus:border-[#d4af37] text-white transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {!showLogin && (
                  <div className="bg-[#0a0e1a] p-4 rounded-lg border border-[#d4af37]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Valor do Ebook Vivo:</span>
                      <span className="text-2xl font-bold gradient-gold">R$ 60</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Pagamento único • Acesso vitalício • Vagas limitadas
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full btn-gold text-[#0a0e1a] font-bold text-lg py-4 rounded-lg"
                >
                  {showLogin ? 'ENTRAR' : 'PAGAR R$ 60 E COMEÇAR'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowLogin(!showLogin)}
                  className="text-[#d4af37] hover:underline text-sm"
                >
                  {showLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login'}
                </button>
              </div>

              {!showLogin && (
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-xs text-gray-500 text-center">
                    Após o pagamento, você receberá um email de confirmação e poderá acessar imediatamente seu Ebook Vivo.
                  </p>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-xs">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Garantia 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 O Impostor Dentro de Você • Todos os direitos reservados
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Henrique Siqueira
          </p>
        </div>
      </footer>
    </div>
  );
}
