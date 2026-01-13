// SAWA TOWING Website JavaScript
// - Mobile menu toggle (with aria attributes)
// - Active nav highlighting
// - Simple animations
// - Contact form: opens a mailto draft (static site friendly)

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    function closeMenu() {
        if (!hamburger || !navMenu) return;
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }

    function toggleMenu() {
        if (!hamburger || !navMenu) return;
        const isOpen = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('menu-open', isOpen);
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu();
        });
    });

    // Simple animation for service cards
    const cards = document.querySelectorAll('.service-card, .area-card');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => card.classList.add('animate'));
    }

    // Contact form (mailto)
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');

    function setStatus(msg, type) {
        if (!statusEl) return;
        statusEl.textContent = msg;
        statusEl.className = 'form-status ' + (type || '');
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailTo = form.getAttribute('data-email') || 'info@example.com';
            const name = (document.getElementById('name')?.value || '').trim();
            const phone = (document.getElementById('phone')?.value || '').trim();
            const email = (document.getElementById('email')?.value || '').trim();
            const service = (document.getElementById('service')?.value || '').trim();
            const message = (document.getElementById('message')?.value || '').trim();

            if (!name || !phone || !service || !message) {
                setStatus('Please fill in the required fields.', 'error');
                return;
            }

            const subject = `Tow request: ${service} (${name})`;
            const bodyLines = [
                `Name: ${name}`,
                `Phone: ${phone}`,
                email ? `Email: ${email}` : '',
                `Service: ${service}`,
                '',
                'Details:',
                message,
                '',
                '---',
                'Sent from the SAWA TOWING website.'
            ].filter(Boolean);

            const mailto = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

            setStatus('Opening your email app… If nothing opens, please call instead.', 'success');
            window.location.href = mailto;
        });
    }

    // Apply dark theme permanently
    document.body.classList.add('dark-theme');
});
