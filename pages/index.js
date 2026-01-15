import React, { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Configure Firebase e PagBank para ativar o cadastro/login');
  };

  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        body { font-family: 'Montserrat', sans-serif; }
        .hero-title { font-family: 'Cormorant Garamond', serif; }
        .gradient-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-gold {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 50%, #d4af37 100%);
          transition: all 0.4s ease;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border-2 border-[#d4af37] text-[#d4af37] text-sm font-semibold tracking-widest">
              EBOOK VIVO
            </span>
          </div>

          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6">
            <div className="text-white mb-2">O IMPOSTOR</div>
            <div className="gradient-gold">DENTRO DE VOCÊ</div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Descubra a voz que sabota sua vida — e faça ela calar.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-gray-400 text-2xl line-through">R$ 500</span>
            <span className="text-5xl font-bold gradient-gold">R$ 60</span>
            <span className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
              Vagas Limitadas
            </span>
          </div>

          <div className="mb-12">
            <div className="max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Sua imagem aqui</p>
            </div>
          </div>

          <p className="text-2xl tracking-widest text-gray-300 mb-12">HENRIQUE SIQUEIRA</p>

          <a href="#cadastro" className="inline-block btn-gold text-[#0a0e1a] font-bold text-lg px-12 py-5 rounded-full">
            GARANTA SUA VAGA
          </a>
        </div>
      </section>

      <section id="cadastro" className="py-24">
        <div className="max-w-lg mx-auto px-6">
          <div className="bg-[#1a2332] p-10 rounded-3xl border-2 border-[#d4af37]/30">
            <h2 className="hero-title text-4xl font-bold text-center mb-8">
              Comece sua jornada
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-lg text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#0a0e1a] border border-gray-700 rounded-lg text-white"
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" className="w-full btn-gold text-[#0a0e1a] font-bold text-lg py-4 rounded-lg">
                PAGAR R$ 60 E COMEÇAR
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
