import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, BookOpen, Headphones } from 'lucide-react';

export default function ImpostorLandingV2() {
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
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        
        .hero-title {
          font-family: 'Playfair Display', serif;
        }
        
        .parallax-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-image: url('/images/capa-ebook.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }
        
        .parallax-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(180deg, 
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.7) 50%,
            rgba(0,0,0,0.95) 100%);
          z-index: 1;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5),
                       0 0 40px rgba(255, 215, 0, 0.3);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scaleIn 1s ease-out forwards;
          opacity: 0;
        }
        
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }
        .delay-4 { animation-delay: 1.2s; }
        .delay-5 { animation-delay: 1.5s; }
        
        .btn-premium {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-premium::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-premium:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .btn-premium:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 60px rgba(255, 215, 0, 0.6);
        }
        
        .icon-card {
          background: linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(0,0,0,0.8) 100%);
          border: 2px solid rgba(255, 215, 0, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }
        
        .icon-card:hover {
          transform: translateY(-10px) scale(1.05);
          border-color: rgba(255, 215, 0, 0.8);
          box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
        }
        
        .persona-card {
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .persona-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
          transition: left 0.7s;
        }
        
        .persona-card:hover::before {
          left: 100%;
        }
        
        .persona-card:hover {
          transform: scale(1.08);
        }
      `}</style>

      {/* Parallax Background */}
      <div className="parallax-bg"></div>
      <div className="parallax-overlay"></div>

      {/* Content */}
      <div className="content-wrapper">
        
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
              
              {/* Badge */}
              <div className="animate-fade-in-up mb-8">
                <span className="inline-block px-8 py-3 border-2 border-yellow-500 text-yellow-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase backdrop-blur-md bg-black/30">
                  ✨ EBOOK VIVO ✨
                </span>
              </div>

              {/* Main Title */}
              <h1 className="hero-title text-5xl md:text-8xl lg:text-9xl font-black mb-8 animate-fade-in-up delay-1">
                <div className="text-white text-glow leading-tight">O IMPOSTOR</div>
                <div className="gradient-gold text-glow leading-tight mt-4">DENTRO DE VOCÊ</div>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up delay-2">
                Descubra a voz que sabota sua vida<br/>
                <span className="text-yellow-400 font-semibold">— e faça ela calar.</span>
              </p>

              {/* Price */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-scale-in delay-3">
                <div className="relative">
                  <span className="text-gray-500 text-3xl md:text-4xl line-through">R$ 500</span>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center rotate-12 animate-pulse">
                    <span className="text-xs font-bold">OFF</span>
                  </div>
                </div>
                <div className="text-6xl md:text-8xl font-black gradient-gold">R$ 60</div>
              </div>

              <div className="animate-fade-in-up delay-4 mb-12">
                <div className="inline-block px-6 py-3 bg-red-600 text-white text-sm font-bold rounded-full animate-pulse">
                  ⚡ APENAS 100 VAGAS DISPONÍVEIS
                </div>
              </div>

              {/* CTA */}
              <div className="animate-fade-in-up delay-5 mb-16">
                <a 
                  href="#cadastro" 
                  className="btn-premium inline-block text-black font-bold text-lg md:text-xl px-16 py-6 rounded-full tracking-wider shadow-2xl relative z-10"
                >
                  QUERO TRANSFORMAR MINHA VIDA AGORA
                </a>
              </div>

              {/* Author */}
              <p className="text-xl md:text-2xl tracking-[0.3em] text-gray-400 font-light animate-fade-in-up delay-5">
                POR HENRIQUE SIQUEIRA
              </p>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={48} className="text-yellow-400 opacity-70" />
          </div>
        </section>

        {/* Solid Black Background from here */}
        <div className="bg-black">

          {/* What is Ebook Vivo - Dramatic */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-20">
                  <h2 className="hero-title text-5xl md:text-7xl font-black mb-6">
                    Não é um PDF comum.
                  </h2>
                  <h3 className="hero-title text-4xl md:text-6xl font-black gradient-gold mb-8">
                    É uma EXPERIÊNCIA.
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                    O primeiro Ebook Vivo sobre Síndrome do Impostor do Brasil
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  
                  <div className="icon-card p-10 rounded-3xl text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                      <BookOpen size={48} className="text-black" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-yellow-400">Páginas Vivas</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Vire páginas como um livro real. Cada capítulo se revela com animações cinematográficas.
                    </p>
                  </div>

                  <div className="icon-card p-10 rounded-3xl text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                      <Play size={48} className="text-black" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-yellow-400">Vídeos Integrados</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Assista conteúdo exclusivo dentro do livro. Aprenda de forma multissensorial.
                    </p>
                  </div>

                  <div className="icon-card p-10 rounded-3xl text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                      <Headphones size={48} className="text-black" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-yellow-400">Narração Inteligente</h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Cada palavra destacada enquanto é narrada. Como um filme para seus ouvidos.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Giants Section - Einstein & Michelle */}
          <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            <div className="container mx-auto px-6">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-20">
                  <p className="text-2xl md:text-3xl text-gray-400 italic mb-8 leading-relaxed">
                    "Até os gigantes duvidaram de si mesmos."
                  </p>
                  <h2 className="hero-title text-4xl md:text-6xl font-black gradient-gold">
                    Inspirado em mentes brilhantes que<br/>venceram o impostor interior
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                  
                  {/* Einstein - GRANDE */}
                  <div className="persona-card group">
                    <div className="relative overflow-hidden rounded-3xl border-4 border-yellow-500/30 group-hover:border-yellow-500 transition-all">
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-black">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
                          alt="Albert Einstein" 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <h3 className="text-4xl md:text-5xl font-black mb-2 text-white">EINSTEIN</h3>
                        <p className="text-yellow-400 text-xl font-semibold mb-4">Gênio que se sentia uma fraude</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "O exagero do meu valor é tão claro que me sinto culpado"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Michelle Obama - GRANDE */}
                  <div className="persona-card group">
                    <div className="relative overflow-hidden rounded-3xl border-4 border-yellow-500/30 group-hover:border-yellow-500 transition-all">
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-black">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg"
                          alt="Michelle Obama" 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <h3 className="text-4xl md:text-5xl font-black mb-2 text-white">MICHELLE</h3>
                        <p className="text-yellow-400 text-xl font-semibold mb-4">Primeira Dama que se achava "não boa o suficiente"</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          "Ainda tenho um pouco daquela síndrome do impostor"
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="text-center mt-16">
                  <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                    Se até eles enfrentaram essa batalha interna...<br/>
                    <span className="text-yellow-400 font-bold">você não está sozinho.</span>
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section id="cadastro" className="py-32 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl mx-auto">
                
                <div className="text-center mb-12">
                  <h2 className="hero-title text-4xl md:text-6xl font-black mb-6 text-white">
                    {showLogin ? 'Bem-vindo de volta' : 'Sua transformação começa aqui'}
                  </h2>
                  <p className="text-xl text-gray-400">
                    {showLogin ? 'Acesse seu Ebook Vivo' : 'Garanta seu acesso por apenas R$ 60'}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl border-2 border-yellow-500/30 shadow-2xl">
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-300 mb-3">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-xl focus:outline-none focus:border-yellow-500 text-white text-lg transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-300 mb-3">
                        Senha
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="w-full px-6 py-4 bg-black border-2 border-gray-700 rounded-xl focus:outline-none focus:border-yellow-500 text-white text-lg transition-colors"
                        placeholder="••••••••"
                      />
                    </div>

                    {!showLogin && (
                      <div className="bg-black p-6 rounded-2xl border-2 border-yellow-500/30">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-400 text-lg">Investimento único:</span>
                          <span className="text-4xl font-black gradient-gold">R$ 60</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                          <span>✓ Acesso vitalício</span>
                          <span>✓ 12 capítulos</span>
                          <span>✓ Vídeos exclusivos</span>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-premium w-full text-black font-bold text-xl py-6 rounded-xl relative"
                    >
                      {showLogin ? 'ACESSAR AGORA' : 'GARANTIR MINHA VAGA POR R$ 60'}
                    </button>
                  </form>

                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setShowLogin(!showLogin)}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                    >
                      {showLogin ? '← Criar nova conta' : 'Já tenho conta →'}
                    </button>
                  </div>

                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    <span className="font-semibold">Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    <span className="font-semibold">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💯</span>
                    <span className="font-semibold">Satisfação Garantida</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center">
              <p className="text-gray-500 mb-2">
                © 2026 O Impostor Dentro de Você • Todos os direitos reservados
              </p>
              <p className="text-gray-600 text-sm">
                Henrique Siqueira
              </p>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
