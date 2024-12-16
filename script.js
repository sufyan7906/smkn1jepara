// Menu Toggle untuk Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling untuk semua link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi scroll untuk project cards
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Form Handling untuk WhatsApp
function sendToWhatsApp(e) {
    e.preventDefault();
    
    // Mengambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Format pesan untuk WhatsApp
    const text = `Halo, saya ${name}%0A%0AEmail: ${email}%0A%0APesan: ${message}`;
    
    // Ganti nomor WhatsApp di sini (format: 62812345678)
    const phoneNumber = '628995920780'; // Sesuaikan dengan nomor WA Anda
    
    // Membuat URL WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    
    // Membuka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Animasi typing effect untuk subtitle
const subtitle = document.querySelector('.subtitle');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Mulai animasi typing setelah halaman dimuat
window.addEventListener('load', typeWriter);

// Tambahkan animasi scroll untuk semua section
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Tambahkan efek parallax pada hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Tambahkan animasi hover untuk skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
