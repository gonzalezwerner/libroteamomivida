// ==========================================
// Base de datos de Páginas
// ==========================================
const pagesData = [
  { front: { type: 'cover' }, back: { type: 'inner-cover' } },
  { front: { type: 'page', title: 'I. El Milagro', text: '15 de marzo...<br><br>Una fecha que se quedará grabada en mi alma para siempre. Fue el día exacto en el que mi suerte y mi vida entera cambiaron al conocerte.' }, back: { type: 'page', text: 'Desde ese momento, cruzar palabras contigo se convirtió en la razón más hermosa para despertar. Conectamos de una manera que jamás creí posible.' } },
  { front: { type: 'photo', src: 'amor1.jpg', caption: 'Mi Reina' }, back: { type: 'page', text: 'Cada vez que hablamos, el mundo se detiene. Tu voz se convirtió en mi melodía favorita, y tu existencia en mi más grande adoración.' } },
  { front: { type: 'page', title: 'II. Mi Paz', text: 'Geraldine... cada llamada que hacemos es espectacular. Nunca había conectado el alma a alguien con tanta magia y perfección.' }, back: { type: 'page', text: 'Pero ¿sabes qué es aún más hermoso y sagrado para mí? Poder dormir en llamada a tu lado. Escuchar tu respiración y soñar contigo.' } },
  { front: { type: 'page', text: 'En esas horas de la madrugada, cuando el mundo está oscuro, yo me siento protegido. Me haces sentir en casa, en un castillo impenetrable.' }, back: { type: 'photo', src: 'amor2.jpg', caption: 'Mi Refugio' } },
  { front: { type: 'page', title: 'III. Gratitud', text: 'Quiero agradecerte profundamente por todo tu trato y tu tiempo infinito durante este hermoso y caótico mes.' }, back: { type: 'page', text: 'Gracias por no rendirte, por regalarme la luz brillante de tu mirada y la pureza incondicional de tu hermoso corazón.' } },
  { front: { type: 'photo', src: 'amor3.jpg', caption: 'Tú' }, back: { type: 'page', text: 'No hay en todo el universo alguien como tú. Eres extraordinaria en cuerpo, mente y alma. Absolutamente irrepetible.' } },
  { front: { type: 'page', title: 'IV. Mis Sombras', text: 'Y sabiendo lo afortunado que soy al tener a la mujer más hermosa... me duele el alma saber que he cometido acciones equivocadas.' }, back: { type: 'page', text: 'Perdóname por mis ansiedades, por mis miedos que en ocasiones me nublan y me hacen herirte sin querer, porque eres a quien más amo.' } },
  { front: { type: 'page', text: 'Reconozco que mi TOC juega conmigo, que a veces crea tormentas donde solo debería haber paz sagrada. Sé lo difícil que a veces resulta lidiar con ello.' }, back: { type: 'page', text: 'Pero, mi princesa, quiero que te quede grabado para la eternidad que nada de eso altera o empaña este amor colosal que te tengo.' } },
  { front: { type: 'photo', src: 'amor4.jpg', caption: 'Perdón' }, back: { type: 'page', text: 'Esa batalla mental es dura, y no es excusa. Te lastima, y eso me quiebra el corazón por completo cada noche.' } },
  { front: { type: 'page', title: 'V. Mi Elección', text: 'Por eso quiero elegirte todos los días. Así tenga que batallar conmigo mismo un millón de veces, enfrentaré al infinito por ti.' }, back: { type: 'page', text: 'Eres mi razón suprema para ser mejor. Este arrepentimiento es abrumadoramente sincero. Te necesito a mi lado.' } },
  { front: { type: 'page', text: 'Geraldine, siempre vas a ser mi princesa. Mi hermosa reina celestial. Tú eres la dueña absoluta del rincón más puro de mi ser.' }, back: { type: 'photo', src: 'amor5.jpg', caption: 'Mi Princesa' } },
  { front: { type: 'page', title: 'VI. El Futuro', text: 'Deseo con toda mi fuerza poder seguir avanzando de la mano, que todo el dolor cicatrice gracias a nuestro profundo cuidado.' }, back: { type: 'page', text: 'Espero vivir incontables y mágicos momentos más llenos de tu risa y de toda la complicidad que nos hace uno solo.' } },
  { front: { type: 'page', text: 'Anhelo locamente las sensaciones hermosas que me provocas cuando me dices que nos vemos, o cuando decides trasnochar a mi lado.' }, back: { type: 'page', text: 'Te juro que hoy prometo cuidar tu corazón de la manera más sublime, madura y hermosa posible de ahora en adelante.' } },
  { front: { type: 'photo', src: 'amor6.jpg', caption: 'Te Amo' }, back: { type: 'page', text: 'Cada instante sin ti se vuelve gris. Tú eres el color, la esperanza y la magia pura que mi pobre vida había perdido hace años.' } },
  { front: { type: 'page', title: 'VII. Un Deseo', text: 'No imagino, ni quiero imaginar, ninguna otra vida que no sea acariciando tu rostro y sabiendo que nos pertenecemos.' }, back: { type: 'page', text: 'El miedo inmenso a perderte ha derrumbado todas mis corazas, y me ha mostrado que el amor que te tengo es inquebrantable.' } },
  { front: { type: 'page', text: 'Gracias infinitas por ser mi ancla de oro puro en estos días grises.' }, back: { type: 'page', text: 'Ese legendario y sagrado 15 de marzo todo valió la pena. Entré a este universo donde siempre rogaré por tus besos.' } },
  { front: { type: 'page', text: 'Y si tuviera que elegir un solo segundo para vivir por toda la eternidad, elegiría de inmediato el momento en que me crucé contigo.' }, back: { type: 'page', text: '...Venceré al miedo y al TOC siempre, tan solo por ganarme un instante más haciéndote feliz.' } },
  { front: { type: 'page', title: 'VIII. Por Siempre', text: 'Te amo con una devoción extrema. Tú y yo somos la historia y el poema más sublime y extraordinario que el destino pudo crear.' }, back: { type: 'page', text: 'Perdona mis caídas. Toma mi mano, Geraldine, y permíteme continuar dibujando contigo nuestro infinito juntos.' } },
  { front: { type: 'page', center: true, text: 'Siempre seré tuyo.<br>Y tú serás por siempre mi reina.' }, back: { type: 'page', center: true, text: '<div class="final-forgiveness highlight-name">Geraldine...<br>Te Amo Absolutamente.</div>' } },
  { front: { type: 'inner-cover' }, back: { type: 'back-cover-outside' } },
];

const bookContainer = document.getElementById('book');
const numOfPapers = pagesData.length;

const fragment = document.createDocumentFragment();

pagesData.forEach((paperData, index) => {
    const paperObj = document.createElement('div');
    paperObj.className = 'paper';
    paperObj.id = `p${index + 1}`;
    // Z-index inverso para stacking
    const zIndexDepth = (numOfPapers - index) * 2;
    paperObj.style.transform = `rotateY(0deg) translateZ(${zIndexDepth}px)`;
    paperObj.setAttribute('data-z', zIndexDepth);

    const front = document.createElement('div');
    front.className = 'front';
    front.innerHTML = buildContent(paperData.front, 'front');

    const back = document.createElement('div');
    back.className = 'back';
    back.innerHTML = buildContent(paperData.back, 'back');

    paperObj.appendChild(front);
    paperObj.appendChild(back);
    fragment.appendChild(paperObj);
});

bookContainer.appendChild(fragment);

function buildContent(data, side) {
    if (data.type === 'cover') return `<div class="front-content cover"><div class="cover-glow"></div><h1 class="title">Ecos de mi<br>Amor y Perdón</h1><p class="subtitle">Para mi reina más hermosa...</p><div class="cover-ornament">❦</div><p class="instruction">Toca Avanzar o Desliza</p></div>`;
    if (data.type === 'inner-cover') return `<div class="${side}-content inner-cover"><div class="inner-ornament">❦</div></div>`;
    if (data.type === 'back-cover-outside') return `<div class="back-content cover"><div class="cover-ornament">❦</div><p class="subtitle" style="margin-top: 30px;">Siempre tuyo...</p></div>`;
    if (data.type === 'photo') return `<div class="${side}-content page"><div class="photo-frame"><img src="${data.src}" alt="Foto ${data.caption}"></div><div class="photo-caption">${data.caption}</div></div>`;
    if (data.type === 'page') {
        let content = '';
        if(data.title) content += `<h2 class="chapter">${data.title}</h2>`;
        content += `<div class="poem-text ${data.center ? 'center-text' : ''}">${data.text}</div>`;
        return `<div class="${side}-content page">${content}</div>`;
    }
}

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const indicator = document.getElementById('page-indicator');
const papersElems = document.querySelectorAll('.paper');

let currentLocation = 1;
const maxLocation = numOfPapers + 1;

// SISTEMA DE OPTIMIZACIÓN EXTREMA
function optimizeMemory() {
    papersElems.forEach((paper, index) => {
        const pageNum = index + 1;
        if (Math.abs(pageNum - currentLocation) > 2) {
            paper.style.display = 'none'; 
        } else {
            paper.style.display = 'block'; 
        }
    });
}

function updateBookPosition() {
    bookContainer.classList.remove('book-opened', 'book-finished');

    if (currentLocation === 1) {
        // Nada, el CSS controla el default con la animación gentleBookFloat
    } else if (currentLocation === maxLocation) {
        bookContainer.classList.add('book-finished');
    } else {
        bookContainer.classList.add('book-opened');
    }

    if(currentLocation === 1) indicator.innerText = "Inicio";
    else if(currentLocation === maxLocation) indicator.innerText = "Final";
    else indicator.innerText = `Página ${currentLocation - 1}`;
    
    optimizeMemory();
}


function goNextPage() {
    if (currentLocation < maxLocation) {
        const currentPaper = papersElems[currentLocation - 1];
        
        const nextTarget = currentLocation + 2; 
        if(nextTarget <= numOfPapers) papersElems[nextTarget - 1].style.display = 'block';

        currentPaper.classList.add("flipped");
        currentPaper.style.transform = `rotateY(-180deg) translateZ(${currentPaper.getAttribute('data-z')}px)`;
        currentLocation++;
        updateBookPosition();
        if(currentLocation === maxLocation) { nextBtn.style.opacity = '0.3'; nextBtn.style.pointerEvents = 'none'; }
        prevBtn.style.opacity = '1'; prevBtn.style.pointerEvents = 'auto';
        
        // Estallido de corazones magicos al pasar
        createMagicBurst();
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        const prevPaper = papersElems[currentLocation - 2];

        const prevTarget = currentLocation - 3;
        if(prevTarget >= 0) papersElems[prevTarget].style.display = 'block';

        prevPaper.classList.remove("flipped");
        prevPaper.style.transform = `rotateY(0deg) translateZ(${prevPaper.getAttribute('data-z')}px)`;
        currentLocation--;
        updateBookPosition();
        if (currentLocation === 1) { prevBtn.style.opacity = '0.3'; prevBtn.style.pointerEvents = 'none'; }
        nextBtn.style.opacity = '1'; nextBtn.style.pointerEvents = 'auto';
        
        createMagicBurst();
    }
}

function createMagicBurst() {
    if(window.innerWidth > 900) {
        createTouchSparks(window.innerWidth/2, window.innerHeight/2 + 100, 8);
    } else {
        createTouchSparks(window.innerWidth/2, window.innerHeight/2 + 50, 4); // Liviano en movil
    }
}

// SWIPE EVENTS 
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

let lastMouseMove = 0;
document.addEventListener('mousemove', e => {
    const isMobile = window.innerWidth <= 900;
    if(isMobile) return; 

    const now = Date.now();
    if(now - lastMouseMove > 60) { 
        if(Math.random() > 0.8) createTouchSparks(e.clientX, e.clientY, 1);
        lastMouseMove = now;
    }
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > SWIPE_THRESHOLD) goNextPage();
    if (touchEndX - touchStartX > SWIPE_THRESHOLD) goPrevPage();
}, {passive: true});

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);
window.addEventListener('resize', updateBookPosition);
updateBookPosition();
prevBtn.style.opacity = '0.3'; 
prevBtn.style.pointerEvents = 'none';

// ==========================================
// WOW PARTICLES (ROMANTIC EDITION)
// ==========================================
const canvas = document.getElementById('petalsCanvas');
const ctx = canvas.getContext('2d', { alpha: true });
let particlesArray = [];
let sparksArray = [];
let fireFliesArray = [];

const isMobile = window.innerWidth < 900;
const numberOfPetals = isMobile ? 6 : 25; 
const numberOfFireflies = isMobile ? 8 : 30;

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 

// PÉTALOS DE ROSA
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 6;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.05 - 0.025;
        this.scaleY = Math.random() * 0.5 + 0.5;
        this.scaleYDelta = Math.random() * 0.02;
        const colors = ['rgba(255, 77, 109, 0.5)', 'rgba(255, 30, 80, 0.4)', 'rgba(230, 184, 162, 0.4)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.y += this.speedY; this.x += this.speedX + Math.sin(this.angle) * 0.5;
        this.angle += this.spin; this.scaleY += this.scaleYDelta;
        if(this.scaleY > 1 || this.scaleY < -1) this.scaleYDelta = -this.scaleYDelta;
        if (this.y > canvas.height + this.size) { this.y = 0 - this.size; this.x = Math.random() * canvas.width; }
    }
    draw() {
        ctx.save(); ctx.translate(this.x, this.y); ctx.rotate(this.angle); ctx.scale(1, this.scaleY);
        ctx.beginPath(); ctx.ellipse(0, 0, this.size, this.size/1.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        if(!isMobile) { ctx.shadowBlur = 4; ctx.shadowColor = this.color; }
        ctx.fill(); ctx.restore();
    }
}

// LUCIÉRNAGAS ROMÁNTICAS
class Firefly {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 200;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = -(Math.random() * 0.8 + 0.2);
        this.speedX = Math.random() * 0.6 - 0.3;
        this.life = Math.random() * 100;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.life * 0.05) * 0.6;
        this.life += 1;
        if (this.y < -10) { this.y = canvas.height + 10; this.x = Math.random() * canvas.width; }
    }
    draw() {
        const opacity = Math.abs(Math.sin(this.life * 0.03));
        ctx.fillStyle = `rgba(255, 230, 150, ${opacity})`;
        ctx.beginPath();
        if(isMobile) { ctx.fillRect(this.x, this.y, this.size*1.5, this.size*1.5); } 
        else { ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
    }
}

// CHISPAS MÁGICAS AL INTERACTUAR
class Spark {
    constructor(x, y) {
        this.x = x + (Math.random() * 20 - 10); 
        this.y = y + (Math.random() * 20 - 10);
        this.size = Math.random() * 3 + 1.5; 
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3 - 2; // Tienden a subir
        this.life = 100;
        this.color = (Math.random() > 0.4) ? 'rgba(255, 184, 162, ' : 'rgba(255, 77, 109, ';
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        this.life -= 3; 
        this.size *= 0.95;
    }
    draw() {
        ctx.fillStyle = this.color + (this.life/100) + ')';
        ctx.beginPath();
        if(isMobile) { ctx.fillRect(this.x, this.y, this.size, this.size); } 
        else { ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
    }
}

function createTouchSparks(x, y, count = 2) {
    if (sparksArray.length > (isMobile ? 15 : 40)) return; 
    for(let i=0; i<count; i++) sparksArray.push(new Spark(x, y));
}

function initParticles() {
    for (let i = 0; i < numberOfPetals; i++) particlesArray.push(new Particle());
    for (let i = 0; i < numberOfFireflies; i++) fireFliesArray.push(new Firefly());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < fireFliesArray.length; i++) {
        fireFliesArray[i].update(); fireFliesArray[i].draw();
    }
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(); particlesArray[i].draw();
    }
    for (let i = 0; i < sparksArray.length; i++) {
        sparksArray[i].update(); sparksArray[i].draw();
    }
    sparksArray = sparksArray.filter(spark => spark.life > 0);
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
