// ==================== VARIABLES ====================
const signupForm = document.getElementById('signupForm');
const toggleFormBtn = document.getElementById('toggleFormBtn');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const priceSummary = document.getElementById('priceSummary');
const submitBtn = document.getElementById('submitBtn');

let isLoginMode = false;

// ==================== FORM TOGGLE ====================
toggleFormBtn.addEventListener('click', () => {
  isLoginMode = !isLoginMode;
  
  if (isLoginMode) {
    // Switch to login mode
    formTitle.textContent = 'Bem-vindo de volta';
    formSubtitle.textContent = 'Acesse seu Ebook Vivo';
    priceSummary.style.display = 'none';
    submitBtn.textContent = 'ACESSAR AGORA';
    toggleFormBtn.textContent = '← Criar nova conta';
  } else {
    // Switch to signup mode
    formTitle.textContent = 'Sua transformação começa aqui';
    formSubtitle.textContent = 'Garanta seu acesso por apenas R$ 60';
    priceSummary.style.display = 'block';
    submitBtn.textContent = 'GARANTIR MINHA VAGA POR R$ 60';
    toggleFormBtn.textContent = 'Já tenho conta →';
  }
});

// ==================== FORM SUBMISSION ====================
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (isLoginMode) {
    handleLogin(email, password);
  } else {
    handleSignup(email, password);
  }
});

// ==================== HANDLE SIGNUP ====================
function handleSignup(email, password) {
  console.log('Signup:', email, password);
  
  // TODO: Integrate with Firebase Auth
  // TODO: Integrate with PagBank payment
  
  alert(`Cadastro criado com sucesso!

Email: ${email}

PRÓXIMO PASSO:
Configure o Firebase e PagBank seguindo as instruções do README.md

Por enquanto, este é apenas um exemplo visual.`);
}

// ==================== HANDLE LOGIN ====================
function handleLogin(email, password) {
  console.log('Login:', email, password);
  
  // TODO: Integrate with Firebase Auth
  
  alert(`Login realizado!

Email: ${email}

PRÓXIMO PASSO:
Configure o Firebase seguindo as instruções do README.md para ativar a autenticação.`);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== PARALLAX EFFECT ====================
let lastScrollTop = 0;
const parallaxBg = document.querySelector('.parallax-bg');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Parallax background
  if (scrollTop < window.innerHeight) {
    parallaxBg.style.transform = `translateY(${scrollTop * 0.5}px)`;
  }
  
  lastScrollTop = scrollTop;
});

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.icon-card, .persona-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// ==================== FORM VALIDATION ====================
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('blur', () => {
  if (!isValidEmail(emailInput.value)) {
    emailInput.style.borderColor = '#DC2626';
  } else {
    emailInput.style.borderColor = '#FFD700';
  }
});

passwordInput.addEventListener('blur', () => {
  if (passwordInput.value.length < 6) {
    passwordInput.style.borderColor = '#DC2626';
  } else {
    passwordInput.style.borderColor = '#FFD700';
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.style.borderColor === 'rgb(220, 38, 38)') {
    emailInput.style.borderColor = '#333';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.style.borderColor === 'rgb(220, 38, 38)') {
    passwordInput.style.borderColor = '#333';
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ==================== BUTTON RIPPLE EFFECT ====================
document.querySelectorAll('.btn-premium').forEach(button => {
  button.addEventListener('click', function(e) {
    // Create ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    // Position ripple
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c🔥 O IMPOSTOR DENTRO DE VOCÊ', 'color: #FFD700; font-size: 24px; font-weight: bold; font-family: Playfair Display;');
console.log('%cEbook Vivo - Por Henrique Siqueira', 'color: #FFA500; font-size: 14px;');
console.log('%c\nPara configurar Firebase e PagBank, veja o README.md', 'color: #999; font-size: 12px;');

// ==================== PRELOAD IMAGES ====================
const imagesToPreload = [
  'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/Michelle_Obama_2013_official_portrait.jpg'
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});

console.log('✅ Imagens precarregadas');

// ==================== LOADING STATE ====================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  console.log('✅ Página carregada completamente');
});

// ==================== ERROR HANDLING ====================
window.addEventListener('error', (e) => {
  console.error('❌ Erro detectado:', e.message);
});

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⚡ Tempo de carregamento: ${pageLoadTime}ms`);
  });
}
