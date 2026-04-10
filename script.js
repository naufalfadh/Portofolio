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
        // Experience section header
        exp_section_title_1: "My",
        exp_section_title_2: "Journey",
        exp_section_description: "My professional experience and educational background in the tech industry.",
        // Tab buttons
        tab_work: "Work Experience",
        tab_edu: "Education",
        // Work Experience
        exp0_period: "Nov 2025 - April 2026",
        exp0_role: "Contract Based.",
        exp0_task1: "Analyze, fix bugs, and develop new features as needed by the CS team",
        exp0_task2: "Provide technical support for internal users and customers experiencing technical problems",
        exp0_task3: "Analyze customer needs and translate them into software solutions",
        exp0_task4: "Collaborate with IT Developer and Customer Experience teams in improving service systems",
        exp1_period: "Dec 2024 - Jun 2025",
        exp1_role: "Internship Fullstack Developer.",
        exp1_task1: "Migrating applications from VB.NET to ASP.NET",
        exp1_task2: "Creating websites using .NET and SQL Server with DevExpress UI components",
        exp1_task3: "Releasing MAUI applications to Android TV",
        exp1_task4: "Developing RESTful API",
        exp2_title: "Fullstack Developer - Project Based",
        exp2_period: "Sep 2024 - Nov 2024",
        exp2_role: "Migrating legacy applications, monitoring IP document uploads, ensuring part change information is monitored, supporting PQE decisions.",
        exp2_task1: "Migration results from the legacy system used by the PQE department to upload and monitor IP (Part Information) data from Excel documents.",
        exp3_title: "Waspang Staff",
        exp3_period: "Dec 2021 - Nov 2022",
        exp3_role: "Mapping new networks and moving old networks.",
        exp3_task1: "Making drawings of a building and layout of a network path in AutoCad.",
        exp3_task2: "Mapping points from network creation and external network mapping on Google Earth.",
        exp3_task3: "Supervision of network construction carried out by technicians in the field.",
        // Education
        edu1_title: "D3 Informatics Management",
        edu1_period: "Sep 2022 – Jul 2025",
        edu1_gpa: "GPA: 3.44 / 4.00",
        edu1_desc: "Full Scholarship Recipient from Astra Group through AHEMCE Group Komatsu Reimanufacturing Asia.",
        edu1_cert1: "MikroTik Certified Network Associate (MTCNA) – 2024",
        edu1_cert2: "Data Science Fundamental Certification – 2024",
        edu1_cert3: "AI Ignition Certification – 2024",
        // Organizations
        org1_title: "Jurnalistik Astratech",
        org1_period: "Jan 2023 – Jan 2024",
        org1_role: "Member – Campus Journalism Organization",
        org1_task1: "Covering and writing news related to campus activities and issues, published via UKM's official bulletin, website, or social media.",
        org1_task2: "Creating creative content such as photos, videos, and publication materials to support news coverage and documentation of campus activities.",
        org1_task3: "Organizing journalism training and workshops to improve writing, photography, and editing skills of members.",
        org2_title: "Astra Gema Islami (AGI)",
        org2_period: "Jan 2024 – Present",
        org2_role: "Member – Islamic Organization",
        org2_task1: "Assist in the implementation of each event held by AGI each year.",
        org2_task2: "Coordinate with food vendors to ensure timely delivery.",
        org2_task3: "Manage and supervise culinary bazaar stands and be responsible for overseeing food supply and distribution.",
        // Contact
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
        project1_description: "Merekam dan mengelola aktivitas dan kegiatan siswa menggunakan teknologi RFID sebagai identitas atau pengenal.",
        project2_title: "Digitalisasi Form Inspeksi Quality Control Machining",
        project2_description: "Mengembangkan website untuk pengecekan produk dan pencatatan komponen.",
        project3_description: "Mengembangkan sistem manajemen data kesehatan berbasis web untuk Unit Kesehatan Kampus, termasuk data mahasiswa/karyawan dan inventaris obat.",
        project4_description: "Mendigitalisasikan sebuah pekerjaan permohonan dan persetujuan yang dimana pekerjaan itu dilakukan melalui formulir pada kertas lalu di digitalisasi dengan dibuatkan sebuah website.",
        view_code: "Lihat Kode",
        view_all_projects: "Lihat Semua Projek",
        // Experience section header
        exp_section_title_1: "Perjalanan",
        exp_section_title_2: "Saya",
        exp_section_description: "Pengalaman profesional dan latar belakang pendidikan saya di industri teknologi.",
        // Tab buttons
        tab_work: "Pengalaman Kerja",
        tab_edu: "Pendidikan",
        // Work Experience
        exp0_period: "Nov 2025 - April 2026",
        exp0_role: "Berbasis Kontrak.",
        exp0_task1: "Menganalisis, memperbaiki bug, dan mengembangkan fitur baru sesuai kebutuhan tim CS",
        exp0_task2: "Memberikan dukungan teknis untuk pengguna internal dan pelanggan yang mengalami masalah teknis",
        exp0_task3: "Menganalisis kebutuhan pelanggan dan menerjemahkannya ke dalam solusi perangkat lunak",
        exp0_task4: "Berkolaborasi dengan tim IT Developer dan Customer Experience dalam meningkatkan sistem layanan",
        exp1_period: "Des 2024 - Jun 2025",
        exp1_role: "Magang Fullstack Developer.",
        exp1_task1: "Migrasi aplikasi dari VB.NET ke ASP.NET",
        exp1_task2: "Membuat website menggunakan .NET dan SQL Server dengan komponen UI DevExpress",
        exp1_task3: "Merilis aplikasi MAUI ke Android TV",
        exp1_task4: "Mengembangkan RESTful API",
        exp2_title: "Fullstack Developer - Berbasis Projek",
        exp2_period: "Sep 2024 - Nov 2024",
        exp2_role: "Migrasi aplikasi lama, memantau unggahan dokumen IP, memastikan informasi perubahan part dipantau, mendukung keputusan PQE.",
        exp2_task1: "Hasil migrasi dari sistem lama yang digunakan oleh departemen PQE untuk mengunggah dan memantau data IP (Part Information) dari dokumen Excel.",
        exp3_title: "Staff Waspang",
        exp3_period: "Des 2021 - Nov 2022",
        exp3_role: "Pemetaan jaringan baru dan pemindahan jaringan lama.",
        exp3_task1: "Membuat gambar bangunan dan tata letak jalur jaringan di AutoCad.",
        exp3_task2: "Memetakan titik-titik dari pembuatan jaringan dan pemetaan jaringan eksternal di Google Earth.",
        exp3_task3: "Pengawasan pembangunan jaringan yang dilakukan oleh teknisi di lapangan.",
        // Education
        edu1_title: "D3 Manajemen Informatika",
        edu1_period: "Sep 2022 – Jul 2025",
        edu1_gpa: "IPK: 3.44 / 4.00",
        edu1_desc: "Penerima Beasiswa Penuh dari Astra Group melalui AHEMCE Group Komatsu Reimanufacturing Asia.",
        edu1_cert1: "MikroTik Certified Network Associate (MTCNA) – 2024",
        edu1_cert2: "Sertifikasi Data Science Fundamental – 2024",
        edu1_cert3: "Sertifikasi AI Ignition – 2024",
        // Organizations
        org1_title: "Jurnalistik Astratech",
        org1_period: "Jan 2023 – Jan 2024",
        org1_role: "Anggota – Organisasi Jurnalistik Kampus",
        org1_task1: "Meliput dan menulis berita terkait kegiatan dan isu kampus, yang diterbitkan melalui buletin resmi UKM, website, atau media sosial.",
        org1_task2: "Membuat konten kreatif seperti foto, video, dan materi publikasi untuk mendukung liputan berita dan dokumentasi kegiatan kampus.",
        org1_task3: "Menyelenggarakan pelatihan jurnalistik dan workshop untuk meningkatkan keterampilan menulis, fotografi, dan penyuntingan anggota.",
        org2_title: "Astra Gema Islami (AGI)",
        org2_period: "Jan 2024 – Sekarang",
        org2_role: "Anggota – Organisasi Keislaman",
        org2_task1: "Membantu pelaksanaan setiap acara yang diadakan oleh AGI setiap tahun.",
        org2_task2: "Berkoordinasi dengan vendor makanan untuk memastikan pengiriman tepat waktu.",
        org2_task3: "Mengelola dan mengawasi stand bazar kuliner serta bertanggung jawab atas pengawasan pasokan dan distribusi makanan.",
        // Contact
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

// ======================== HERO PHOTO SLIDESHOW ========================
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let current = 0;
    let timer;

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = index;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function next() {
        goTo((current + 1) % slides.length);
    }

    function startAuto() {
        timer = setInterval(next, 3500);
    }

    function stopAuto() {
        clearInterval(timer);
    }

    // Dot click
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAuto();
            goTo(i);
            startAuto();
        });
    });

    // Pause on hover
    const wrapper = document.querySelector('.hero-slideshow');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAuto);
        wrapper.addEventListener('mouseleave', startAuto);
    }

    startAuto();
}

// ======================== TAB SWITCHING ========================
function switchTab(tab) {
    const workPanel = document.getElementById('panel-work');
    const eduPanel = document.getElementById('panel-edu');
    const workBtn = document.getElementById('tab-work');
    const eduBtn = document.getElementById('tab-edu');

    if (tab === 'work') {
        workPanel.classList.remove('hidden');
        eduPanel.classList.add('hidden');
        workBtn.classList.add('tab-active');
        eduBtn.classList.remove('tab-active');
    } else {
        eduPanel.classList.remove('hidden');
        workPanel.classList.add('hidden');
        eduBtn.classList.add('tab-active');
        workBtn.classList.remove('tab-active');

        // Re-trigger fade-in animations for education panel
        const fadeEls = eduPanel.querySelectorAll('.fade-in');
        fadeEls.forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 50);
        });
    }
}

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.documentElement.lang = lang;
    startNameAnimation('Naufal Fadhlurrohman');
}

// Name typing animation function
function startNameAnimation(name) {
    if (isTyping) return;
    
    const typedNameElement = document.getElementById('typed-name');
    const cursor = document.getElementById('cursor');
    
    if (!typedNameElement || !cursor) return;
    
    isTyping = true;
    let i = 0;
    
    typedNameElement.textContent = '';
    cursor.style.animation = 'none';
    
    function typeWriter() {
        if (i < name.length) {
            typedNameElement.textContent += name.charAt(i);
            i++;
            nameAnimationTimeout = setTimeout(typeWriter, 100);
        } else {
            cursor.style.animation = 'blink 1s infinite';
            isTyping = false;
            nameAnimationTimeout = setTimeout(() => {
                startNameAnimation(name);
            }, 4000);
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
        if (carouselAutoPlay) clearInterval(carouselAutoPlay);
    }
    
    prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });
    nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            currentSlide = index;
            updateCarousel();
            startAutoPlay();
        });
    });
    
    window.addEventListener('resize', () => { updateCarousel(); });
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    updateCarousel();
    startAutoPlay();
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
    
    setTimeout(() => {
        startNameAnimation('Naufal Fadhlurrohman');
    }, 800);
    
    initCarousel();
    initHeroSlideshow();
});

// Language button event listeners
document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-id').addEventListener('click', () => switchLanguage('id'));

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const html = document.documentElement;

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
            window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
            if (mobileMenu) mobileMenu.classList.add('hidden');
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
}, { threshold: 0.1 });

fadeElements.forEach(element => {
    observer.observe(element);
});

// Resume download functionality
const downloadResumeBtn = document.getElementById('download-resume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        if (currentLanguage === 'id') {
            link.href = "./assets/CV ATS NAUFAL FADHLURROHMAN V.IND.pdf";
            link.download = 'CV NAUFAL FADHLURROHMAN (Bahasa Indonesia).pdf';
        } else {
            link.href = "./assets/CV ATS NAUFAL FADHLURROHMAN  V.ENG.pdf";
            link.download = 'CV NAUFAL FADHLURROHMAN (English).pdf';
        }
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Clean up timeouts
window.addEventListener('beforeunload', () => {
    if (nameAnimationTimeout) clearTimeout(nameAnimationTimeout);
    if (carouselAutoPlay) clearInterval(carouselAutoPlay);
});

// Touch/swipe support for carousel
function addTouchSupport() {
    const carousel = document.getElementById('projectCarousel');
    if (!carousel) return;
    
    let startX = 0;
    let endX = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        if (carouselAutoPlay) clearInterval(carouselAutoPlay);
    });
    
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        endX = e.touches[0].clientX;
    });
    
    carousel.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                const maxSlide = totalSlides - slidesToShow;
                currentSlide = currentSlide >= maxSlide ? 0 : currentSlide + 1;
            } else {
                const maxSlide = totalSlides - slidesToShow;
                currentSlide = currentSlide <= 0 ? maxSlide : currentSlide - 1;
            }
            const slideWidth = 100 / slidesToShow;
            const translateX = -(currentSlide * slideWidth);
            carousel.style.transform = `translateX(${translateX}%)`;
            
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }
        
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

document.addEventListener('DOMContentLoaded', () => {
    addTouchSupport();
});