"use client";

import React, { useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from 'react';

const TECH_1 =[
  { i: 'agno', n: 'Agno' }, { i: 'beautifulsoup', n: 'BeautifulSoup' }, { i: 'crewai', n: 'CrewAI' },
  { i: 'langchain', n: 'LangChain' }, { i: 'linux', n: 'Linux' }, { i: 'n8n', n: 'n8n' },
  { i: 'numpy', n: 'NumPy' }, { i: 'opencv', n: 'OpenCV' }, { i: 'openpyxl', n: 'OpenPyXL' }
];
const TECH_2 =[
  { i: 'pandas', n: 'Pandas' }, { i: 'plotly', n: 'Plotly' }, { i: 'pyautogui', n: 'PyAutoGUI' },
  { i: 'scikitlearn', n: 'Scikit-Learn' }, { i: 'seaborn', n: 'Seaborn' }, { i: 'selenium', n: 'Selenium' },
  { i: 'sql', n: 'SQL' }, { i: 'streamlit', n: 'Streamlit' }
];

export default function AsimovAcademy() {
  const [countdown, setCountdown] = useState("00:00:00:00");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs
  const orbMouseRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navIndicatorRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);
  const techMarqueeRef = useRef<HTMLDivElement>(null);
  const introOverlayRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const techSectionRef = useRef<HTMLElement>(null);
  const introLogoOverlayRef = useRef<HTMLDivElement>(null);

  // States para interação de botões GIF
  const[wppHovered, setWppHovered] = useState(false);
  const [userHovered, setUserHovered] = useState(false);
  const[wppGifV, setWppGifV] = useState(0);
  const[userGifV, setUserGifV] = useState(0);

  // Animação Slot Logo
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&!?';
  const FINAL_WORD = 'ASIMOV';
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  let isSlotAnimating = useRef(false);

  const animateLogoSlot = () => {
    if (isSlotAnimating.current) return;
    isSlotAnimating.current = true;
    let doneCount = 0;

    lettersRef.current.forEach((span, i) => {
      if (!span) return;
      span.classList.remove('slot-done');
      const finalChar = FINAL_WORD[i];
      const delay = i * 120;
      const spinDuration = 280;
      const totalFrames = 18;
      let frame = 0;

      setTimeout(() => {
        span.style.opacity = '1';
        const spin = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const randomChar = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

          if (frame < totalFrames) {
            span.textContent = randomChar;
            span.style.color = `rgba(255,255,255,${0.3 + progress * 0.7})`;
          } else {
            clearInterval(spin);
            span.textContent = finalChar;
            span.style.color = '#fff';
            span.classList.add('slot-done');
            span.style.textShadow = '0 0 18px rgba(120,130,212,0.9)';
            setTimeout(() => { span.style.textShadow = ''; }, 400);
            doneCount++;
            if (doneCount === FINAL_WORD.length) isSlotAnimating.current = false;
          }
        }, spinDuration / totalFrames);
      }, delay);
    });
  };

  // Setup Geral (Orb, Countdown, Scroll)
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Orb Mouse Effect
    let mX = window.innerWidth / 2, mY = window.innerHeight / 2;
    let cX = mX, cY = mY;
    let reqId: number;

    const handleMove = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY; };
    const handleTouch = (e: TouchEvent) => { mX = e.touches[0].clientX; mY = e.touches[0].clientY; };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    const fluidLoop = () => {
      cX += (mX - cX) * 0.07; cY += (mY - cY) * 0.07;
      const vx = mX - cX, vy = mY - cY, spd = Math.sqrt(vx * vx + vy * vy);
      if (orbMouseRef.current) {
        orbMouseRef.current.style.transform = `translate3d(${cX}px,${cY}px,0) rotate(${Math.atan2(vy, vx) * 180 / Math.PI}deg) scale(${1 + Math.min(spd * 0.003, 0.45)},${1 - Math.min(spd * 0.001, 0.18)})`;
      }
      reqId = requestAnimationFrame(fluidLoop);
    };
    fluidLoop();

    // Countdown
    const targetDate = new Date(2026, 4, 5, 18, 59, 36).getTime();
    let promoScrambling = true;

    const updateRealCountdown = () => {
      const now = Date.now();
      const distance = targetDate - now;
      if (distance < 0) { setCountdown("00:00:00:00"); return; }
      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);
      setCountdown(`${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    };

    let ticks = 25;
    const scrambleIntv = setInterval(() => {
      setCountdown(`${String(Math.floor(Math.random() * 99)).padStart(2, '0')}:${String(Math.floor(Math.random() * 99)).padStart(2, '0')}:${String(Math.floor(Math.random() * 99)).padStart(2, '0')}:${String(Math.floor(Math.random() * 99)).padStart(2, '0')}`);
      ticks--;
      if (ticks <= 0) {
        clearInterval(scrambleIntv);
        promoScrambling = false;
        updateRealCountdown();
      }
    }, 45);

    const timeIntv = setInterval(() => { if (!promoScrambling) updateRealCountdown(); }, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(reqId);
      clearInterval(scrambleIntv);
      clearInterval(timeIntv);
    };
  },[]);

  // Tech Carousel Interaction
  const isDownTech = useRef(false);
  const startXTech = useRef(0);
  const scrollLeftTech = useRef(0);
  const techAutoScroll = useRef(true);

  useEffect(() => {
    let reqId: number;
    let isCancelledTech = false;
    const runTechScroll = () => {
      if (isCancelledTech) return;
      const el = techMarqueeRef.current;
      if (el && techAutoScroll.current && !isDownTech.current) {
        const half = el.scrollWidth / 2;
        el.scrollLeft += 0.7;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      reqId = requestAnimationFrame(runTechScroll);
    };
    runTechScroll();
    return () => { isCancelledTech = true; cancelAnimationFrame(reqId); }
  },[]);

  const handleTechMouseDown = (e: ReactMouseEvent) => {
    if (!techMarqueeRef.current) return;
    isDownTech.current = true; techAutoScroll.current = false;
    techMarqueeRef.current.classList.add('active');
    startXTech.current = e.pageX - techMarqueeRef.current.offsetLeft;
    scrollLeftTech.current = techMarqueeRef.current.scrollLeft;
  };
  const handleTechMouseLeave = () => {
    if (!techMarqueeRef.current) return;
    isDownTech.current = false; techAutoScroll.current = true;
    techMarqueeRef.current.classList.remove('active');
  };
  const handleTechMouseUp = () => {
    if (!techMarqueeRef.current) return;
    isDownTech.current = false;
    techMarqueeRef.current.classList.remove('active');
    setTimeout(() => { if (!isDownTech.current) techAutoScroll.current = true; }, 1000);
  };
  const handleTechMouseMove = (e: ReactMouseEvent) => {
    if (!isDownTech.current || !techMarqueeRef.current) return;
    e.preventDefault();
    techMarqueeRef.current.scrollLeft = scrollLeftTech.current - ((e.pageX - techMarqueeRef.current.offsetLeft) - startXTech.current) * 1.5;
  };

  const handleCardMouseMove = (e: ReactMouseEvent, cardEl: HTMLDivElement | null) => {
    if (!cardEl) return;
    const r = cardEl.getBoundingClientRect();
    cardEl.style.setProperty('--tx', (e.clientX - r.left) + 'px');
    cardEl.style.setProperty('--ty', (e.clientY - r.top) + 'px');
  };

  // Motor Principal do Canvas & Sequência de Animação
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const canvas = document.getElementById('c') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isCancelledCanvas = false;
    let reqIdCanvas: number;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const handleResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);

    const charCache: Record<string, { cvs: HTMLCanvasElement, o: number }> = {};
    function getCharCvs(char: string, color: string, size: number) {
      const key = `${char}|${color}|${Math.round(size)}`;
      if (charCache[key]) return charCache[key];
      const c = document.createElement('canvas'), pad = size * 1.8;
      c.width = pad * 2; c.height = pad * 2;
      const x = c.getContext('2d')!;
      x.fillStyle = color; x.font = `${Math.round(size)}px 'JetBrains Mono', monospace`;
      x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(char, pad, pad);
      return (charCache[key] = { cvs: c, o: pad });
    }

    const IS_MOB = window.innerWidth < 768;
    const N_TOTAL = IS_MOB ? 350 : 720;
    const CFG = { N: N_TOTAL, T0: 1400, T1: 3200, T2: 5400, T_BURST: 5900, T3: 8200, T_HERO: 6000 };
    const E = { io3: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 };

    const T_LOGO_FADE_IN_START = CFG.T1 + 200;
    const T_LOGO_FADE_IN_DUR = 900;
    const T_LOGO_FADE_OUT_START = CFG.T_BURST - 600;
    const T_LOGO_FADE_OUT_DUR = 700;

    let lastLogoAlpha = -1;
    let globalParticleAlphaMultiplier = 1;

    function updateLogoOverlay(t: number) {
      let alpha = 0;
      if (t >= T_LOGO_FADE_IN_START && t < T_LOGO_FADE_IN_START + T_LOGO_FADE_IN_DUR) {
        alpha = (t - T_LOGO_FADE_IN_START) / T_LOGO_FADE_IN_DUR;
      } else if (t >= T_LOGO_FADE_IN_START + T_LOGO_FADE_IN_DUR && t < T_LOGO_FADE_OUT_START) {
        alpha = 1;
      } else if (t >= T_LOGO_FADE_OUT_START && t < T_LOGO_FADE_OUT_START + T_LOGO_FADE_OUT_DUR) {
        alpha = 1 - (t - T_LOGO_FADE_OUT_START) / T_LOGO_FADE_OUT_DUR;
      } else if (t >= T_LOGO_FADE_OUT_START + T_LOGO_FADE_OUT_DUR) {
        alpha = 0;
      }
      alpha = Math.max(0, Math.min(1, alpha));
      globalParticleAlphaMultiplier = 1 - alpha;

      if (Math.abs(alpha - lastLogoAlpha) > 0.005 && introLogoOverlayRef.current) {
        lastLogoAlpha = alpha;
        introLogoOverlayRef.current.style.opacity = alpha.toString();
      }
    }

    class P {
      char: string; color: string; fs: number; ba: number; alpha: number;
      x: number; y: number; vx: number; vy: number; tx: number; ty: number;
      sx: number; sy: number; dvx: number; dvy: number; stagger: number;
      dispSpeed: number; restX: number; restY: number; cached: any;
      entryDelay: number; entryDur: number; entryScale: number; entryAngle: number; entryDist: number;

      constructor() {
        this.char = ['0', '1', '+', '·', '#', '%'][Math.floor(Math.random() * 6)];
        this.color =['#fff', '#ccc', '#888', '#555', '#333'][Math.floor(Math.random() * 5)];
        this.fs = (IS_MOB ? 9 : 11) + Math.random() * 3;
        this.ba = 0.28 + Math.random() * 0.5; this.alpha = this.ba;
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 1.4; this.vy = (Math.random() - 0.5) * 1.4;
        this.tx = W / 2; this.ty = H / 2;
        this.sx = this.x; this.sy = this.y;
        this.dvx = 0; this.dvy = 0;
        this.stagger = Math.random() * 0.1;
        this.dispSpeed = 0.5 + Math.random() * 1.1;
        this.restX = Math.random() * W; this.restY = Math.random() * H;
        this.cached = getCharCvs(this.char, this.color, this.fs);
        this.entryDelay = Math.random() * 900; this.entryDur = 500 + Math.random() * 400;
        this.entryScale = 0.4 + Math.random() * 0.6; this.entryAngle = Math.random() * Math.PI * 2;
        this.entryDist = 60 + Math.random() * 180;
      }
      draw(t: number) {
        let a = this.alpha * globalParticleAlphaMultiplier;
        if (t < CFG.T0) {
          if (t < this.entryDelay) return;
          const entryProgress = Math.min(1, (t - this.entryDelay) / this.entryDur);
          const ep = 1 - Math.pow(1 - entryProgress, 3);
          a *= ep;
          const offsetFade = 1 - ep;
          const ox = Math.cos(this.entryAngle) * this.entryDist * offsetFade;
          const oy = Math.sin(this.entryAngle) * this.entryDist * offsetFade;

          ctx!.save();
          ctx!.globalAlpha = Math.max(0, Math.min(1, a));
          const sc = this.entryScale + (1 - this.entryScale) * ep;
          ctx!.translate(this.x + ox, this.y + oy);
          ctx!.scale(sc, sc);
          ctx!.drawImage(this.cached.cvs, -this.cached.o, -this.cached.o);
          ctx!.restore();
          return;
        }
        ctx!.globalAlpha = Math.max(0, Math.min(1, a));
        ctx!.drawImage(this.cached.cvs, this.x - this.cached.o, this.y - this.cached.o);
      }
    }

    let particles = Array.from({ length: CFG.N }, () => new P());
    let logoPoints: { x: number, y: number }[] =[];
    let phase = 'float', animT: number | null = null;
    let snapConverge = false, snapDisperse = false, heroRevealed = false;
    const waves: any[] =[];

    function spawnWave(delay: number) {
      setTimeout(() => waves.push({ r: 2, a: 1.0, spd: 8 + Math.random() * 5 }), delay);
    }
    function shuffle(a: any[]) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } }

    function makeFallback() {
      const off = document.createElement('canvas'); off.width = W; off.height = H;
      const oc = off.getContext('2d', { willReadFrequently: true })!; oc.fillStyle = 'white';
      oc.font = `900 ${Math.round(W * (IS_MOB ? 0.22 : 0.13))}px sans-serif`;
      oc.textAlign = 'center'; oc.textBaseline = 'middle'; oc.fillText(IS_MOB ? 'A' : 'ASIMOV', W / 2, H / 2);
      const step = IS_MOB ? 4 : 5, data = oc.getImageData(0, 0, W, H).data, pts =[];
      for (let py = 0; py < H; py += step) for (let px = 0; px < W; px += step) if (data[(py * W + px) * 4 + 3] > 80) pts.push({ x: px, y: py });
      shuffle(pts); const r = pts.slice(0, CFG.N); while (r.length < CFG.N) r.push({ x: W / 2, y: H / 2 }); return r;
    }

    function sampleLogo(cb: () => void) {
      const img = new Image(); img.crossOrigin = 'anonymous';
      img.onload = () => {
        if (isCancelledCanvas) return;
        // Calcula dimensões idênticas ao que a overlay CSS vai mostrar
        // CSS usa: width = min(80vw, 1100px) no desktop
        let tw = IS_MOB ? W * 0.88 : Math.min(W * 0.80, 1100);
        let th = tw / (img.naturalWidth / img.naturalHeight);
        if (IS_MOB && th > H * 0.65) { const sc = (H * 0.65) / th; tw *= sc; th *= sc; }

        // Aplica o mesmo scale CSS que a overlay usa (max-width: 95vw)
        if (tw > W * 0.95) { const sc = (W * 0.95) / tw; tw *= sc; th *= sc; }

        const off = document.createElement('canvas'); off.width = W; off.height = H;
        const oc = off.getContext('2d', { willReadFrequently: true })!;
        oc.drawImage(img, (W - tw) / 2, (H - th) / 2, tw, th);
        const step = Math.max(2, Math.floor(tw / (IS_MOB ? 65 : 140)));
        const data = oc.getImageData(0, 0, W, H).data; const pts =[];
        for (let py = 0; py < H; py += step) for (let px = 0; px < W; px += step)
          if (data[(py * W + px) * 4 + 3] > 60) pts.push({ x: px, y: py });
        shuffle(pts); logoPoints = pts.slice(0, CFG.N);
        while (logoPoints.length < CFG.N) logoPoints.push({ x: W / 2, y: H / 2 }); cb();
      };
      img.onerror = () => { 
        if (isCancelledCanvas) return;
        logoPoints = makeFallback(); cb(); 
      };
      img.src = '/img/asimov.webp';
    }

    // Funções Cinematics / Helpers visuais exportadas para o escopo
    const startBadgeTyping = () => {
      let twI = 0, twC = 0, twDel = false;
      const TW =['Criar dashboards', 'Construir IAs', 'Automatizar tarefas', 'Analisar dados'];
      const el = document.getElementById('tw-text');
      const type = () => {
        if (!el) return;
        const w = TW[twI]; el.textContent = twDel ? w.substring(0, --twC) : w.substring(0, ++twC);
        let d = twDel ? 28 : 58;
        if (!twDel && twC === w.length) { d = 2200; twDel = true; }
        else if (twDel && twC === 0) { twDel = false; twI = (twI + 1) % TW.length; d = 400; }
        setTimeout(type, d);
      };
      type();
    };

    const countUpSimple = (el: HTMLElement | null, target: number, fmt: (v: number) => string, ms: number) => {
      if (!el) return; const s = Date.now();
      const step = () => {
        const p = Math.min(1, (Date.now() - s) / ms);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      step();
    };

    const cinematicCount = (el: HTMLElement | null, target: number, fmt: (v: number) => string, ms: number) => {
      if (!el) return; const s = Date.now(); const ease = (t: number) => 1 - Math.pow(1 - t, 4);
      const wrapper = document.createElement('span');
      wrapper.style.cssText = `display:inline-block; position:relative; overflow:hidden; vertical-align:middle; height:1.3em; line-height:1.3;`;
      el.parentNode?.replaceChild(wrapper, el); wrapper.id = el.id;

      const inner = document.createElement('span');
      inner.style.cssText = `display:inline-block; position:relative; transform:translateY(120%) scale(0.6); opacity:0; transition:transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease; font-weight:700; font-size:1.22em; color:#fff; will-change:transform;`;
      inner.textContent = fmt(0); wrapper.appendChild(inner);

      requestAnimationFrame(() => { requestAnimationFrame(() => { inner.style.transform = 'translateY(0) scale(1)'; inner.style.opacity = '1'; }); });

      const step = () => {
        const p = Math.min(1, (Date.now() - s) / ms);
        inner.textContent = fmt(target * ease(p));
        if (p < 1) requestAnimationFrame(step);
      };
      step();
    };

    const startTypingCode = () => {
      const CODE =[
        { h: '<span class="kw">import</span> <span class="fn">pandas</span> <span class="kw">as</span> <span class="va">pd</span>' }, { h: '<span class="kw">from</span> <span class="fn">sklearn.ensemble</span> <span class="kw">import</span> <span class="acc">RandomForestClassifier</span>' }, { h: '<span class="kw">from</span> <span class="fn">openai</span> <span class="kw">import</span> <span class="acc">OpenAI</span>' }, { h: '' },
        { h: '<span class="cm"># Inicializando pipeline neural</span>' }, { h: '<span class="va">df</span> <span class="op">=</span> <span class="fn">pd</span>.<span class="fn">read_csv</span>(<span class="str">\'data_mesh.csv\'</span>)' }, { h: '<span class="va">X</span>  <span class="op">=</span> <span class="va">df</span>[[<span class="str">\'features\'</span>, <span class="str">\'clusters\'</span>]]' }, { h: '' },
        { h: '<span class="cm"># Treinamento otimizado</span>' }, { h: '<span class="va">model</span> <span class="op">=</span> <span class="acc">RandomForestClassifier</span>(<span class="nm">n_estimators</span><span class="op">=</span><span class="nm">500</span>)' }, { h: '<span class="va">model</span>.<span class="fn">fit</span>(<span class="va">X_train</span>, <span class="va">y_train</span>)' }, { h: '' },
        { h: '<span class="cm"># Inferência e insights via LLM</span>' }, { h: '<span class="va">client</span> <span class="op">=</span> <span class="acc">OpenAI</span>()' }, { h: '<span class="va">resp</span> <span class="op">=</span> <span class="va">client</span>.<span class="fn">chat</span>.<span class="fn">completions</span>.<span class="fn">create</span>(' },
        { h: '    <span class="va">model</span><span class="op">=</span><span class="str">"gpt-4o"</span>,' }, { h: '    <span class="va">messages</span><span class="op">=</span>[{<span class="str">"role"</span>:<span class="str">"user"</span>, <span class="str">"content"</span>:<span class="va">insights</span>}]' }, { h: ')' }
      ];
      const out = document.getElementById('typed-code'), lnEl = document.getElementById('line-nums'), body = document.getElementById('code-body');
      let ln = 1, lineIdx = 0, fullHtml = '';
      if (!out || !lnEl) return;

      const updateLn = (n: number) => { lnEl.innerHTML = Array.from({ length: n }, (_, i) => `${i + 1}<br>`).join(''); };
      const updateLatencyLoop = () => {
        const mv2 = document.getElementById('mv2');
        if (mv2) mv2.textContent = (Math.floor(Math.random() * 7) + 10) + 'ms';
        setTimeout(updateLatencyLoop, 800 + Math.random() * 1200);
      };

      const typeNextLine = () => {
        if (lineIdx >= CODE.length) {
          const cur = document.getElementById('cur'); if (cur) cur.style.display = 'none';
          setTimeout(() => {
            document.getElementById('result-card')?.classList.add('vis');
            setTimeout(() => {
              countUpSimple(document.getElementById('mv1'), 98.4, (v) => v.toFixed(1) + '%', 900);
              countUpSimple(document.getElementById('mv3'), 150, (v) => '+' + Math.round(v) + 'k', 800);
              countUpSimple(document.getElementById('mv2'), 12, (v) => v.toFixed(0) + 'ms', 700);
              setTimeout(updateLatencyLoop, 900);
            }, 300);
          }, 400); return;
        }
        let raw = CODE[lineIdx].h, tokens: any[] =[], temp = '', isTag = false;
        for (let i = 0; i < raw.length; i++) {
          if (raw[i] === '<') { if (temp) tokens.push({ isTag: false, text: temp }); temp = '<'; isTag = true; }
          else if (raw[i] === '>') { temp += '>'; tokens.push({ isTag: true, text: temp }); temp = ''; isTag = false; } else temp += raw[i];
        }
        if (temp) tokens.push({ isTag: isTag, text: temp });
        updateLn(ln);
        let tIdx = 0, charIdx = 0, currentLineHtml = '';

        const typeChar = () => {
          if (tIdx >= tokens.length) {
            fullHtml += currentLineHtml + '\n'; out.innerHTML = fullHtml; ln++; lineIdx++;
            if (body) body.scrollTop = body.scrollHeight;
            setTimeout(typeNextLine, raw.length === 0 ? 80 : 180 + Math.random() * 100); return;
          }
          let tok = tokens[tIdx];
          if (tok.isTag) { currentLineHtml += tok.text; tIdx++; typeChar(); }
          else {
            currentLineHtml += tok.text[charIdx]; out.innerHTML = fullHtml + currentLineHtml; charIdx++;
            if (charIdx >= tok.text.length) { charIdx = 0; tIdx++; }
            if (body) body.scrollTop = body.scrollHeight;
            setTimeout(typeChar, 10 + Math.random() * 25);
          }
        };
        typeChar();
      };
      updateLn(1); typeNextLine();
    };

    function revealHero() {
      introOverlayRef.current?.classList.add('gone');
      heroRef.current?.classList.add('visible');
      headerRef.current?.classList.add('visible');
      techSectionRef.current?.classList.add('visible');
      document.body.classList.add('hero-visible');

      // Limpeza de overlay visual para não empilhar na árvore DOM
      setTimeout(() => {
        if (introOverlayRef.current) introOverlayRef.current.style.display = 'none';
      }, 1500);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        startBadgeTyping();
        cinematicCount(document.getElementById('count-hours'), 40, (v) => '+' + Math.floor(v), 1600);
        cinematicCount(document.getElementById('count-devs'), 20, (v) => '+' + Math.floor(v) + '.000', 2000);
      }, 600);

      setTimeout(() => { startTypingCode(); }, 1100);
      setTimeout(() => { animateLogoSlot(); }, 1300);
    }

    function loop(ts: number) {
      if (isCancelledCanvas) return;
      if (!animT) animT = ts;
      const t = ts - animT;

      if (t < CFG.T0) phase = 'float';
      else if (t < CFG.T1) { if (!snapConverge) { particles.forEach(p => { p.sx = p.x; p.sy = p.y; }); snapConverge = true; } phase = 'converge'; }
      else if (t < CFG.T2) phase = 'formed';
      else if (t < CFG.T_BURST) phase = 'charge';
      else if (t < CFG.T3) {
        if (!snapDisperse) {
          particles.forEach(p => {
            p.sx = p.x; p.sy = p.y;
            const base = Math.atan2(p.sy - H / 2, p.sx - W / 2);
            const swirl = (Math.random() - 0.5) * 1.8;
            const spd = 0.8 + Math.random() * 2.8;
            p.dvx = Math.cos(base + swirl) * spd;
            p.dvy = Math.sin(base + swirl) * spd;
          });
          spawnWave(0); spawnWave(200); spawnWave(420); spawnWave(680); spawnWave(950); spawnWave(1300);
          snapDisperse = true;
        }
        phase = 'disperse';
      } else phase = 'bg';

      // Liberação de memória após animação visual encerrar e as ondas acabarem
      if (phase === 'bg' && waves.length === 0) { 
        ctx!.clearRect(0, 0, W, H); 
        canvas.style.display = 'none'; // Esconde canvas do layout
        if (introLogoOverlayRef.current) introLogoOverlayRef.current.style.display = 'none'; // Limpa a logo
        return; // Interrompe o loop liberando toda a CPU
      }

      ctx!.clearRect(0, 0, W, H);
      let prog = 0;
      if (phase === 'converge') prog = (t - CFG.T0) / (CFG.T1 - CFG.T0);
      if (phase === 'formed') prog = (t - CFG.T1) / (CFG.T2 - CFG.T1);
      if (phase === 'charge') prog = (t - CFG.T2) / (CFG.T_BURST - CFG.T2);
      if (phase === 'disperse') prog = (t - CFG.T_BURST) / (CFG.T3 - CFG.T_BURST);
      prog = Math.max(0, Math.min(1, prog));

      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i]; w.r += w.spd; w.a *= 0.97;
        if (w.a < 0.008) { waves.splice(i, 1); continue; }
        ctx!.save(); ctx!.strokeStyle = `rgba(130,148,255,${w.a})`; ctx!.lineWidth = 2.5;
        ctx!.shadowColor = 'rgba(130,148,255,0.5)'; ctx!.shadowBlur = 22;
        ctx!.beginPath(); ctx!.arc(W / 2, H / 2, w.r, 0, Math.PI * 2); ctx!.stroke(); ctx!.restore();
      }

      if (phase !== 'bg') {
        for (const p of particles) {
          switch (phase) {
            case 'float':
              p.x += p.vx; p.y += p.vy; p.alpha = p.ba;
              if (p.x < -30) p.x = W + 30; if (p.x > W + 30) p.x = -30;
              if (p.y < -30) p.y = H + 30; if (p.y > H + 30) p.y = -30; break;
            case 'converge':
              const adj = Math.max(0, Math.min(1, (prog - p.stagger) / (1 - p.stagger))); const ep = E.io3(adj);
              p.x = p.sx + (p.tx - p.sx) * ep; p.y = p.sy + (p.ty - p.sy) * ep; p.alpha = p.ba; break;
            case 'formed':
              p.x = p.tx + Math.sin(ts * 0.0016 + p.ty * 0.04) * 1.1; p.y = p.ty + Math.cos(ts * 0.0016 + p.tx * 0.04) * 1.1; p.alpha = p.ba + 0.4; break;
            case 'charge':
              p.x = p.tx + Math.sin(ts * 0.054 + p.tx * 0.09) * (prog * 4.8); p.y = p.ty + Math.cos(ts * 0.054 + p.ty * 0.09) * (prog * 4.8); p.alpha = p.ba + 0.5 * prog; break;
            case 'disperse':
              const pp = Math.min(1, prog * p.dispSpeed);
              const dEp = pp < 0.5 ? 2 * pp * pp : 1 - Math.pow(-2 * pp + 2, 2) / 2;
              p.x = p.sx + p.dvx * dEp * 3200 + (p.restX - p.sx) * Math.pow(dEp, 2.5);
              p.y = p.sy + p.dvy * dEp * 3200 + (p.restY - p.sy) * Math.pow(dEp, 2.5);
              p.alpha = p.ba * Math.max(0, 1 - Math.pow(prog * 0.85, 0.65));
              break;
          }
          p.draw(t);
        }
      }
      updateLogoOverlay(t);
      if (t >= CFG.T_HERO && !heroRevealed) { heroRevealed = true; revealHero(); }
      
      reqIdCanvas = requestAnimationFrame(loop);
    }

    sampleLogo(() => {
      if (isCancelledCanvas) return;
      particles.forEach((p, i) => { p.tx = logoPoints[i].x; p.ty = logoPoints[i].y; });
      reqIdCanvas = requestAnimationFrame(loop);
    });

    return () => { 
      isCancelledCanvas = true;
      cancelAnimationFrame(reqIdCanvas);
      window.removeEventListener('resize', handleResize); 
    };
  },[]);

  // CTA Button Particles
  const spawnBtnParticles = () => {
    const btnSvg = document.getElementById('btn-svg-particles');
    if (!btnSvg) return;
    btnSvg.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        const startX = 30 + Math.random() * 140, startY = 25, r = 1.5 + Math.random() * 2;
        const vx = (Math.random() - 0.5) * 80, vy = -(20 + Math.random() * 40);
        circle.setAttribute('cx', startX.toString()); circle.setAttribute('cy', startY.toString()); circle.setAttribute('r', r.toString());
        circle.setAttribute('fill', Math.random() > 0.5 ? '#7882d4' : '#fff'); circle.setAttribute('opacity', '0.9');
        btnSvg.appendChild(circle);

        let t = 0, ax = startX, ay = startY;
        const animPart = () => {
          t += 0.018; ax += vx * 0.018; ay += vy * 0.018 + 0.4;
          circle.setAttribute('cx', ax.toString()); circle.setAttribute('cy', ay.toString());
          circle.setAttribute('opacity', Math.max(0, 0.9 - t * 1.2).toString());
          if (t < 0.75) requestAnimationFrame(animPart); else circle.remove();
        };
        animPart();
      }, i * 55);
    }
  };

  // Funções Utilitárias JSX
  const replayGif = (e: ReactMouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) { const b = img.src.split('?')[0]; img.src = b + '?v=' + Date.now(); }
  };

  const handleNavIndicator = (e: ReactMouseEvent<HTMLDivElement>) => {
    const item = e.currentTarget;
    const navContainer = document.getElementById('nav-links');
    if (!navIndicatorRef.current || !navContainer) return;
    const rect = item.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();
    const left = rect.left - containerRect.left + (rect.width / 2) - 2.5;
    navIndicatorRef.current.style.transform = `translateX(${left}px)`;
    navIndicatorRef.current.style.opacity = '1';
  };

  return (
    <>
      {/* Promo Bar */}
      <div id="promo-bar">
        O aniversário da Asimov está chegando
        <span id="countdown">{countdown}</span>
        <a href="#" className="promo-btn">
          <span className="btn-txt">Inscreva-se</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div className="fluid-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-mouse" id="orb-mouse" ref={orbMouseRef}></div>
      </div>

      <div id="intro-overlay" ref={introOverlayRef}></div>

      <div id="intro-logo-overlay" ref={introLogoOverlayRef}>
        <img id="intro-logo-img" src="/img/asimov.webp" alt="Asimov Academy" />
      </div>

      <canvas id="c"></canvas>

      {/* Header */}
      <header
        id="header"
        ref={headerRef}
        onMouseMove={(e) => {
          if (!headerRef.current) return;
          const r = headerRef.current.getBoundingClientRect();
          headerRef.current.style.setProperty('--hx', (e.clientX - r.left) + 'px');
        }}
        onMouseLeave={() => headerRef.current?.style.setProperty('--hx', '-300px')}
      >
        <div className="nav-logo" onMouseEnter={animateLogoSlot}>
          <div className="logo-text" id="logo-text">
            {FINAL_WORD.split('').map((char, i) => (
              <span key={i} className="logo-letter" ref={(el) => { lettersRef.current[i] = el }}>{char}</span>
            ))}
          </div>
        </div>

        <nav
          className="nav-links"
          id="nav-links"
          onMouseLeave={() => { setTimeout(() => { if (navIndicatorRef.current) navIndicatorRef.current.style.opacity = '0'; }, 300); }}
        >
          <div className="nav-indicator" id="nav-indicator" ref={navIndicatorRef}></div>
          <div className="nav-item" onMouseEnter={handleNavIndicator}>
            <div className="nav-link">Formações <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9" /></svg></div>
            <div className="dropdown">
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></div><div className="drop-text"><h4>Engenheiro de Agentes de IA</h4><p>Arquiteturas inteligentes e autônomas.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg></div><div className="drop-text"><h4>Analista de Dados</h4><p>Domine o fluxo e visualização de dados.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg></div><div className="drop-text"><h4>AI Designer</h4><p>Produtos revolucionados com IA.</p></div></a>
            </div>
          </div>
          <div className="nav-item" onMouseEnter={handleNavIndicator}>
            <div className="nav-link">Trilhas <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9" /></svg></div>
            <div className="dropdown cols-2">
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div><div className="drop-text"><h4>Automações com n8n</h4><p>Integrações sem limites estruturais.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></svg></div><div className="drop-text"><h4>Dashboards com Python</h4><p>Visualização analítica avançada.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg></div><div className="drop-text"><h4>Visão Computacional</h4><p>Processamento visual algorítmico.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg></div><div className="drop-text"><h4>Engenharia de Dados</h4><p>Pipelines e arquiteturas escaláveis.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></svg></div><div className="drop-text"><h4>Python para Web</h4><p>Backend robusto para aplicações web.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2" /></svg></div><div className="drop-text"><h4>Data Science & ML</h4><p>Modelagem preditiva e estatística.</p></div></a>
            </div>
          </div>
          <div className="nav-item" onMouseEnter={handleNavIndicator}><a href="#" className="nav-link">Cursos</a></div>
          <div className="nav-item" onMouseEnter={handleNavIndicator}><a href="#" className="nav-link">Projetos</a></div>
          <div className="nav-item" onMouseEnter={handleNavIndicator}>
            <div className="nav-link">Gratuitos <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9" /></svg></div>
            <div className="dropdown cols-2">
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /></svg></div><div className="drop-text"><h4>Materiais</h4><p>E-books e resumos técnicos.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg></div><div className="drop-text"><h4>Python Iniciantes</h4><p>Seus primeiros passos.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" /></svg></div><div className="drop-text"><h4>Python para IA</h4><p>Básico de inteligência artificial.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /></svg></div><div className="drop-text"><h4>Python para Dados</h4><p>Análise exploratória simples.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /></svg></div><div className="drop-text"><h4>Blog</h4><p>Artigos técnicos semanais.</p></div></a>
              <a href="#" className="drop-item"><div className="drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg></div><div className="drop-text"><h4>Newsletter</h4><p>Atualizações do mercado.</p></div></a>
            </div>
          </div>
        </nav>

        <div className="nav-ctas">
          <a href="#" className="btn-wpp" onMouseEnter={() => { setWppHovered(true); setWppGifV(Date.now()); }} onMouseLeave={() => setWppHovered(false)}>
            <div className={`gif-icon-wrap ${wppHovered ? 'active' : ''}`}>
              <img className="img-still" src="/img/whatsapp.png" alt="WhatsApp" />
              <img className="gif-animated" src={`/gifs/whatsapp.gif?v=${wppGifV}`} alt="WhatsApp" />
            </div>
          </a>
          <a href="#" className="btn-login" onMouseEnter={() => { setUserHovered(true); setUserGifV(Date.now()); }} onMouseLeave={() => setUserHovered(false)}>
            <div className={`gif-icon-wrap ${userHovered ? 'active' : ''}`}>
              <img className="img-still" src="/img/user.png" alt="user" />
              <img className="gif-animated" src={`/gifs/user.gif?v=${userGifV}`} alt="user" />
            </div>
            Entrar
          </a>
          <a href="#" className="btn-enroll">Matricule-se</a>
          <button className="mobile-toggle" aria-label="Menu" onClick={() => setIsMobileMenuOpen(true)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="badge" id="badge">
              <span className="badge-dot"></span>
              <span className="badge-code">
                <span style={{ color: '#555' }}>print</span>(<span style={{ color: '#888' }}>&quot;<span id="tw-text"></span><span className="cursor" style={{ height: '.9em', background: '#555', width: '2px', animation: 'blink 1s step-end infinite', boxShadow: 'none', marginLeft: 0 }}></span>&quot;</span>)
              </span>
            </div>

            <h1 className="hero-headline" id="headline">
              Aprenda Python do zero e construa projetos reais com{' '}
              <span className="word-ia">IA</span>
            </h1>

            <p className="hero-sub" id="sub">O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação.</p>
            <ul className="bullets" id="bullets">
              <li className="bullet">
                <div className="b-icon subtle-hover-hint" onMouseEnter={replayGif}><img src="/gifs/clock.gif" alt="Icon" /></div>
                <span><strong id="count-hours" className="text-highlight">+0</strong> horas de conteúdo direto ao ponto</span>
              </li>
              <li className="bullet">
                <div className="b-icon subtle-hover-hint" onMouseEnter={replayGif}><img src="/gifs/project.gif" alt="Icon" /></div>
                <span>Projetos reais com Python + IA desde o módulo 1</span>
              </li>
              <li className="bullet">
                <div className="b-icon subtle-hover-hint" onMouseEnter={replayGif}><img src="/gifs/certificate.gif" alt="Icon" /></div>
                <span>Certificado reconhecido pelo mercado</span>
              </li>
              <li className="bullet">
                <div className="b-icon" style={{ background: 'transparent', border: 'none', width: 'auto', padding: 0 }}>
                  <div className="avatars"><div className="avatar"></div><div className="avatar"></div><div className="avatar"></div></div>
                </div>
                <span>Suporte da comunidade com <strong id="count-devs" className="text-highlight">+0.000</strong> alunos</span>
              </li>
            </ul>
            <div className="hero-actions" id="actions">
              <a href="#" className="btn-p" id="cta-btn" onMouseEnter={spawnBtnParticles}>
                <svg className="btn-particles" id="btn-svg-particles" viewBox="0 0 200 50" fill="none"></svg>
                <span>Quero começar agora</span><span className="arrow">→</span>
              </a>
              <a href="#" className="btn-s">Ver o que vou aprender</a>
            </div>
          </div>

          <div className="hero-right" id="hero-right">
            <div
              className="code-wrap"
              onMouseMove={(e) => {
                if (!codeWindowRef.current) return;
                const r = codeWindowRef.current.getBoundingClientRect();
                codeWindowRef.current.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                codeWindowRef.current.style.setProperty('--my', (e.clientY - r.top) + 'px');
              }}
              onMouseLeave={() => {
                codeWindowRef.current?.style.setProperty('--mx', '-300px');
                codeWindowRef.current?.style.setProperty('--my', '-300px');
              }}
            >
              <div className="code-window" ref={codeWindowRef}>
                <div className="win-bar">
                  <div className="win-dots"><span className="d d-r"></span><span className="d d-y"></span><span className="d d-g"></span></div>
                  <div className="win-tabs"><div className="tab active">ai_core.py</div><div className="tab">models.ipynb</div></div>
                </div>
                <div className="code-body" id="code-body">
                  <div className="line-nums" id="line-nums"></div>
                  <div className="code-content">
                    <div id="typed-code"></div><span className="cursor" id="cur" style={{ animation: 'blink 1s step-end infinite' }}></span>
                  </div>
                </div>
                <div className="result-card" id="result-card">
                  <div className="result-header">
                    <span className="result-label">// System Status</span>
                    <span className="result-status"><span className="status-dot"></span> Online</span>
                  </div>
                  <div className="metrics">
                    <div className="metric"><div className="metric-val" id="mv1">—</div><div className="metric-lbl">Acurácia</div></div>
                    <div className="metric"><div className="metric-val" id="mv2">—</div><div className="metric-lbl">Latência</div></div>
                    <div className="metric"><div className="metric-val" id="mv3">—</div><div className="metric-lbl">Amostras</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech-section" ref={techSectionRef}>
        <div
          className="tech-marquee-container"
          id="tmc"
          ref={techMarqueeRef}
          onMouseDown={handleTechMouseDown}
          onMouseLeave={handleTechMouseLeave}
          onMouseUp={handleTechMouseUp}
          onMouseMove={handleTechMouseMove}
        >
          <div className="tech-marquee-track">
            {/* Bloco A */}
            <div className="tech-row tech-row-1">
              {[...Array(15)].map((_, c) => TECH_1.map((t, idx) => (
                <div key={`t1-a-${c}-${idx}`} className="tech-card" onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget as HTMLDivElement)} onMouseLeave={(e) => { e.currentTarget.style.setProperty('--tx', '-300px'); e.currentTarget.style.setProperty('--ty', '-300px'); }}>
                  <div className="tech-icon"><img src={`/img/spinner-items/${t.i}.webp`} alt={t.n} /></div><span className="tech-name">{t.n}</span>
                </div>
              )))}
            </div>
            <div className="tech-row tech-row-2" style={{ marginLeft: '-130px', marginTop: '-1px' }}>
              {[...Array(15)].map((_, c) => TECH_2.map((t, idx) => (
                <div key={`t2-a-${c}-${idx}`} className="tech-card" onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget as HTMLDivElement)} onMouseLeave={(e) => { e.currentTarget.style.setProperty('--tx', '-300px'); e.currentTarget.style.setProperty('--ty', '-300px'); }}>
                  <div className="tech-icon"><img src={`/img/spinner-items/${t.i}.webp`} alt={t.n} /></div><span className="tech-name">{t.n}</span>
                </div>
              )))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mob-close">
          <button className="mobile-toggle-close" onClick={() => setIsMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="mob-links">
          <MobNavItem label="Formações" items={[
            { label: 'Engenheiro de Agentes de IA', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></> },
            { label: 'Analista de Dados', icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></> },
            { label: 'AI Designer', icon: <><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></> }
          ]} />
          <MobNavItem label="Trilhas" items={[
            { label: 'Automações com n8n', icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /> },
            { label: 'Dashboards com Python', icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /></> },
            { label: 'Visão Computacional', icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></> },
            { label: 'Engenharia de Dados', icon: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></> },
            { label: 'Python para Web', icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></> },
            { label: 'Data Science & ML', icon: <polygon points="12 2 2 7 12 12 22 7 12 2" /> },
          ]} />
          <div className="mob-nav-item"><a href="#" className="mob-nav-header">Cursos</a></div>
          <div className="mob-nav-item"><a href="#" className="mob-nav-header">Projetos</a></div>
        </div>
        <div className="mob-ctas" style={{ marginTop: 'auto' }}>
          <a href="#" className="btn-wpp" onMouseEnter={() => { setWppHovered(true); setWppGifV(Date.now()); }} onMouseLeave={() => setWppHovered(false)} style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`gif-icon-wrap ${wppHovered ? 'active' : ''}`}><img className="img-still" src="/img/whatsapp.png" alt="WhatsApp" /><img className="gif-animated" src={`/gifs/whatsapp.gif?v=${wppGifV}`} alt="WhatsApp" /></div>
          </a>
          <a href="#" className="btn-login" onMouseEnter={() => { setUserHovered(true); setUserGifV(Date.now()); }} onMouseLeave={() => setUserHovered(false)} style={{ width: '100%', justifyContent: 'center' }}>
            <div className={`gif-icon-wrap ${userHovered ? 'active' : ''}`}><img className="img-still" src="/img/user.png" alt="user" /><img className="gif-animated" src={`/gifs/user.gif?v=${userGifV}`} alt="user" /></div>
            Entrar
          </a>
          <a href="#" className="btn-enroll" style={{ width: '100%', justifyContent: 'center' }}>Matricule-se</a>
        </div>
      </div>
    </>
  );
}

function MobNavItem({ label, items }: { label: string, items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mob-nav-item ${isOpen ? 'open' : ''}`}>
      <div className="mob-nav-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
      </div>
      <div className="mob-dropdown">
        <div style={{ padding: '8px 0' }}>
          {items.map((sub, i) => (
            <a href="#" key={i} className="mob-drop-item">
              <div className="mob-drop-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{sub.icon}</svg></div>
              <span className="mob-drop-label">{sub.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}