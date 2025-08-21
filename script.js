// Translation data
const translations = {
    en: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_contact: "Contact",
        hero_greeting: "Hi, I'm",
        hero_description: "I build exceptional digital experiences with clean, efficient code and modern technologies. Passionate about solving complex problems and creating intuitive user interfaces.",
        hero_contact: "Contact Me",
        hero_work: "My Work",
        hero_resume: "Get My Resume",
        skills_title_1: "My",
        skills_title_2: "Skills",
        skills_description: "I've worked with a variety of technologies in web development. Here are some of my core competencies.",
        skills_programming: "Programming Languages",
        skills_others: "Others",
        projects_title_1: "Featured",
        projects_title_2: "Projects",
        projects_description: "Here are some of my notable projects I've worked on. Each project was built with a unique approach to solve specific problems.",
        project1_description: "Recording and managing student activities and activities using RFID technology as an identity or identifier. This is a modern solution for managing student activities and activities, utilizing RFID technology integrated with a web system.",
        project2_title: "Digitalisasi Form Inspection Quality Control Machining",
        project2_description: "Developing a website for product checking and component recording.",
        project3_description: "Developing a web-based health data management system for the Campus Health Unit, including student/employee data and drug inventory.",
        project4_description: "Digitizing a job application and approval where the work is done through a paper form then digitizing it by creating a website where all the work goes through the website system.",
        view_code: "View Code",
        view_all_projects: "View All Projects",
        experience_title_1: "Work",
        experience_title_2: "Experience",
        experience_description: "My professional journey and the roles I've held in the tech industry.",
        exp1_period: "Dec 2024 - Jun 2025",
        exp1_role: "Internship Fullstack Developer.",
        exp1_task1: "Migrating applications from VB.NET to ASP.NET",
        exp1_task2: "Creating websites using .NET and SQL Server with DevExpress UI components",
        exp1_task3: "Releasing MAUI applications to Android TV",
        exp1_task4: "Developing RESTful API",
        exp2_title: "Fullstack Developer - Project Based",
        exp2_period: "Sep 2024 - Nov 2024",
        exp2_role: "Migrating legacy applications, monitoring IP document uploads, Ensuring part change information is monitored, supporting PQE decisions.",
        exp2_task1: "Migration results from the legacy system used by the PQE department to upload and monitor IP (Part Information) data from Excel documents. IP data contains information on changes to drawing specifications, standard tolerances, materials, processes, and details related to part usage.",
        exp3_title: "Waspang Staff",
        exp3_period: "Dec 2021 - Nov 2022",
        exp3_role: "Mapping new networks and moving old networks.",
        exp3_task1: "Making drawings of a building and layout of a network path in AutoCad.",
        exp3_task2: "Mapping points from network creation and external network mapping on Google Earth.",
        exp3_task3: "Supervision of network construction carried out by technicians in the field.",
        contact_title_1: "Let's",
        contact_title_2: "Connect",
        contact_description: "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!",
        contact_email: "Email Me",
        contact_phone: "Call Me",
        contact_location: "Location",
        footer_copyright: "© 2025 Naufal Fadhlurrohman. All rights reserved."
    },
    id: {
        nav_home: "Beranda",
        nav_skills: "Keahlian",
        nav_projects: "Projek",
        nav_experience: "Pengalaman",
        nav_contact: "Kontak",
        hero_greeting: "Halo, Saya",
        hero_description: "Saya membangun pengalaman digital yang luar biasa dengan kode yang bersih, efisien, dan teknologi modern. Bersemangat dalam memecahkan masalah kompleks dan menciptakan antarmuka pengguna yang intuitif.",
        hero_contact: "Hubungi Saya",
        hero_work: "Karya Saya",
        hero_resume: "Unduh CV Saya",
        skills_title_1: "Keahlian",
        skills_title_2: "Saya",
        skills_description: "Saya telah bekerja dengan berbagai teknologi dalam pengembangan web. Berikut adalah beberapa kompetensi inti saya.",
        skills_programming: "Bahasa Pemrograman",
        skills_others: "Lainnya",
        projects_title_1: "Projek",
        projects_title_2: "Unggulan",
        projects_description: "Berikut adalah beberapa proyek penting yang telah saya kerjakan. Setiap proyek dibangun dengan pendekatan unik untuk memecahkan masalah spesifik.",
        project1_description: "Merekam dan mengelola aktivitas dan kegiatan siswa menggunakan teknologi RFID sebagai identitas atau pengenal. Ini adalah solusi modern untuk mengelola aktivitas dan kegiatan siswa, memanfaatkan teknologi RFID yang terintegrasi dengan sistem web.",
        project2_title: "Digitalisasi Form Inspeksi Quality Control Machining",
        project2_description: "Mengembangkan website untuk pengecekan produk dan pencatatan komponen.",
        project3_description: "Mengembangkan sistem manajemen data kesehatan berbasis web untuk Unit Kesehatan Kampus, termasuk data mahasiswa/karyawan dan inventaris obat.",
        project4_description: "Mendigitalisasikan sebuah pekerjaan permohonan dan persetujuan yang dimana pekerjaan itu dilakukan melalui formulir pada kertas lalu di digitalisasi dengan dibuatkan sebuah website yang dimana semua pekerjaan tersebut melalui sistem website itu.",
        view_code: "Lihat Kode",
        view_all_projects: "Lihat Semua Projek",
        experience_title_1: "Pengalaman",
        experience_title_2: "Kerja",
        experience_description: "Perjalanan profesional saya dan peran-peran yang pernah saya jalani di industri teknologi.",
        exp1_period: "Des 2024 - Jun 2025",
        exp1_role: "Magang Fullstack Developer.",
        exp1_task1: "Migrasi aplikasi dari VB.NET ke ASP.NET",
        exp1_task2: "Membuat website menggunakan .NET dan SQL Server dengan komponen UI DevExpress",
        exp1_task3: "Merilis aplikasi MAUI ke Android TV",
        exp1_task4: "Mengembangkan RESTful API",
        exp2_title: "Fullstack Developer - Berbasis Projek",
        exp2_period: "Sep 2024 - Nov 2024",
        exp2_role: "Migrasi aplikasi lama, memantau unggahan dokumen IP, Memastikan informasi perubahan part dipantau, mendukung keputusan PQE.",
        exp2_task1: "Hasil migrasi dari sistem lama yang digunakan oleh departemen PQE untuk mengunggah dan memantau data IP (Part Information) dari dokumen Excel. Data IP berisi informasi tentang perubahan spesifikasi gambar, toleransi standar, material, proses, dan detail terkait penggunaan part.",
        exp3_title: "Staff Waspang",
        exp3_period: "Des 2021 - Nov 2022",
        exp3_role: "Pemetaan jaringan baru dan pemindahan jaringan lama.",
        exp3_task1: "Membuat gambar bangunan dan tata letak jalur jaringan di AutoCad.",
        exp3_task2: "Memetakan titik-titik dari pembuatan jaringan dan pemetaan jaringan eksternal di Google Earth.",
        exp3_task3: "Pengawasan pembangunan jaringan yang dilakukan oleh teknisi di lapangan.",
        contact_title_1: "Mari",
        contact_title_2: "Terhubung",
        contact_description: "Punya proyek dalam pikiran atau ingin mendiskusikan peluang potensial? Saya akan senang mendengar dari Anda!",
        contact_email: "Email Saya",
        contact_phone: "Telepon Saya",
        contact_location: "Lokasi",
        footer_copyright: "© 2025 Naufal Fadhlurrohman. Semua hak dilindungi."
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Name typing animation variables
let nameAnimationTimeout;
let isTyping = false;

// Carousel variables
let currentSlide = 0;
let totalSlides = 4;
let slidesToShow = 1;
let carouselAutoPlay;

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language toggle buttons
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;

    // Restart name animation with new language if needed
    if (lang === 'id') {
        startNameAnimation('Naufal Fadhlurrohman');
    } else {
        startNameAnimation('Naufal Fadhlurrohman');
    }
}

// Name typing animation function
function startNameAnimation(name) {
    if (isTyping) return;
    
    const typedNameElement = document.getElementById('typed-name');
    const cursor = document.getElementById('cursor');
    
    if (!typedNameElement || !cursor) return;
    
    isTyping = true;
    let i = 0;
    
    // Clear existing content
    typedNameElement.textContent = '';
    cursor.style.animation = 'none';
    
    function typeWriter() {
        if (i < name.length) {
            typedNameElement.textContent += name.charAt(i);
            i++;
            nameAnimationTimeout = setTimeout(typeWriter, 100); // Adjust speed here
        } else {
            // After typing is complete, start the cursor blinking
            cursor.style.animation = 'blink 1s infinite';
            isTyping = false;
            
            // Optional: Restart typing after a delay
            nameAnimationTimeout = setTimeout(() => {
                startNameAnimation(name);
            }, 4000); // Restart after 4 seconds
        }
    }
    
    typeWriter();
}

// Carousel functionality
function initCarousel() {
    const carousel = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    function getSlidesToShow() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    function updateCarousel() {
        slidesToShow = getSlidesToShow();
        const slideWidth = 100 / slidesToShow;
        const translateX = -(currentSlide * slideWidth);
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        const maxSlide = totalSlides - slidesToShow;
        currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
        updateCarousel();
    }
    
    function prevSlide() {
        const maxSlide = totalSlides - slidesToShow;
        currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
        updateCarousel();
    }
    
    function startAutoPlay() {
        carouselAutoPlay = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        if (carouselAutoPlay) {
            clearInterval(carouselAutoPlay);
        }
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            currentSlide = index;
            updateCarousel();
            startAutoPlay();
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // Initialize
    updateCarousel();
    startAutoPlay();
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
    
    // Start name animation after a short delay
    setTimeout(() => {
        startNameAnimation('Naufal Fadhlurrohman');
    }, 800);
    
    // Initialize carousel
    initCarousel();
});

// Language button event listeners
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-id').addEventListener('click', () => switchLanguage('id'));

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const html = document.documentElement;

// Check for saved theme preference or use default
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

if (savedTheme === 'dark') {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
} else {
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Intersection Observer for scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    observer.observe(element);
}); 

// Resume download functionality
const downloadResumeBtn = document.getElementById('download-resume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        // Create a link element
        const link = document.createElement('a');
        
        // Use different resume based on current language
        if (currentLanguage === 'id') {
            link.href = "./assets/CV ATS NAUFAL FADHLURROHMAN V.IND.pdf";
            link.download = 'CV NAUFAL FADHLURROHMAN (Bahasa Indonesia).pdf';
        } else {
            link.href = "./assets/CV ATS NAUFAL FADHLURROHMAN V.ENG.pdf";
            link.download = 'CV NAUFAL FADHLURROHMAN (English).pdf';
        }
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Clean up timeouts when page is about to unload
window.addEventListener('beforeunload', () => {
    if (nameAnimationTimeout) {
        clearTimeout(nameAnimationTimeout);
    }
    if (carouselAutoPlay) {
        clearInterval(carouselAutoPlay);
    }
});

// Touch/swipe support for carousel on mobile devices
function addTouchSupport() {
    const carousel = document.getElementById('projectCarousel');
    if (!carousel) return;
    
    let startX = 0;
    let endX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        // Stop autoplay during touch
        if (carouselAutoPlay) {
            clearInterval(carouselAutoPlay);
        }
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const threshold = 50; // Minimum swipe distance
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                const maxSlide = totalSlides - slidesToShow;
                currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
            } else {
                // Swipe right - previous slide
                const maxSlide = totalSlides - slidesToShow;
                currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
            }
            
            // Update carousel
            const slideWidth = 100 / slidesToShow;
            const translateX = -(currentSlide * slideWidth);
            carousel.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
        // Restart autoplay
        carouselAutoPlay = setInterval(() => {
            const maxSlide = totalSlides - slidesToShow;
            currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
            const slideWidth = 100 / slidesToShow;
            const translateX = -(currentSlide * slideWidth);
            carousel.style.transform = `translateX(${translateX}%)`;
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }, 5000);
    });
}

// Initialize touch support after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addTouchSupport();
});
