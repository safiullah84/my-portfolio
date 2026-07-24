// 1. DATA OBJECTS
const skillsData = {
    languages: [
        { name: 'JavaScript', level: '90%' },
        { name: 'PHP', level: '38%' },
        { name: 'C++', level: '50%' }
    ],
    frontend: [
        { name: 'HTML & CSS', level: '95%' },
        { name: 'React.js', level: '88%' },
        { name: 'Tailwind CSS', level: '90%' }
    ],
    backend: [
        { name: 'Node.js', level: '58%' },
        { name: 'MonogoDB', level: '65%' },
        { name: 'REST APIs', level: '75%' }
    ],
    database: [
        { name: 'MongoDB', level: '60%' },
        { name: 'MySQL', level: '65%' },
        { name: 'SQL', level: '48%' }
    ],
    tools: [
        { name: 'Git & GitHub', level: '85%' },
        { name: 'VS Code', level: '95%' },
        { name: 'Postman', level: '40%' }
    ],
    computerScience: [
        { name: 'Data Structures', level: '85%' },
        { name: 'Algorithms', level: '70%' },
        { name: 'OOP', level: '43%' }
    ]
};

const projectsData = [
    { id: '01', title: 'Blinkit Clone (Work is Underway on the project)', desc: 'A real-time grocery delivery platform inspired by Blinkit. Features secure authentication, cart management, and payment gateway.', tags: ['React', 'Node.js', 'Express', 'MongoDB'] },
    { id: '02', title: 'Prep-Master-AI', desc: 'Prep Master AI leverages React.js and Node.js to provide an interactive prep platform, storing user data securely and delivering personalized questions and feedback via integrated AI APIs.', tags: ['React.js', 'Node.js', 'API Integration', 'MongoDB'], github: 'https://github.com/safiullah84/prep-master-AI-frontend.git', live: 'https://prep-master-ai.netlify.app/' },
    { id: '03', title: 'Hospital Management Systems', desc: 'Hospital Management System is a web-based application developed using HTML, CSS, JavaScript, PHP, and MySQL. The system helps manage hospital operations digitally by providing modules for patient management, doctor management, appointment booking, medical records, billing, and user authentication. I implemented CRUD operations, designed the database schema, connected the frontend with the backend, and ensured smooth data flow between all modules. This project gave me practical experience in full-stack web development and database management.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], github: 'https://github.com/safiullah84/Hospital-Management-System.git', live: 'https://safiullah84.github.io/Hospital-Management-System/' },
    { id: '04', title: 'Only Frontend(Seek-2-Learn)', desc: 'The project improved user engagement by creating a visually appealing website with easy navigation, built using HTML, CSS, and JavaScript to enhance the overall experience.Designed to attract users and promote course enrollment through a clean, responsive interface.Focused on delivering a simple yet.', tags: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/safiullah84/seek-2-Learn.git', live: 'https://safiullah84.github.io/seek-2-Learn/' }
];

// 2. RENDER SKILLS
function renderSkillsCategory(categoryId, skillsArray) {
    const container = document.getElementById(categoryId);
    if (!container) return;
    
    container.innerHTML = skillsArray.map(skill => `
        <div class="skill-progress-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span style="color: #EF4444">${skill.level}</span>
            </div>
            <div class="progress-bg">
                <div class="progress-bar" style="width: ${skill.level}"></div>
            </div>
        </div>
    `).join('');
}

// 3. RENDER PROJECTS
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projectsData.map(proj => `
        <div class="project-card">
            <div class="project-main">
                <h3><span class="project-id">${proj.id}</span>${proj.title}</h3>
                <p class="project-desc">${proj.desc}</p>
                <div class="project-tags">
                    ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-actions">
                <a class="btn-git" href="${proj.github || '#'}" target="_blank" rel="noopener noreferrer"><i data-lucide="github"></i> GitHub</a>
                <a class="btn-live" href="${proj.live || '#'}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i> Live Demo</a>
            </div>
        </div>
    `).join('');
}

// 4. INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    // Render Skills DOM
    renderSkillsCategory('languages-skills', skillsData.languages);
    renderSkillsCategory('frontend-skills', skillsData.frontend);
    renderSkillsCategory('backend-skills', skillsData.backend);
    renderSkillsCategory('database-skills', skillsData.database);
    renderSkillsCategory('tools-skills', skillsData.tools);
    renderSkillsCategory('cs-skills', skillsData.computerScience);

    // Render Projects DOM
    renderProjects();

    // Initialize Icons (Lucide)
    lucide.createIcons();

    const heroVideo = document.querySelector('.hero-bg-video');
    const heroControl = document.getElementById('hero-video-control');
    const hireBtn = document.getElementById('btn-hire');
    const hireModalOverlay = document.getElementById('hire-modal-overlay');
    const hireModalClose = document.getElementById('hire-modal-close');
    const hireForm = document.getElementById('hire-form');

    if (heroVideo && heroControl) {
        heroControl.addEventListener('click', () => {
            if (heroVideo.paused) {
                heroVideo.play();
                heroControl.innerHTML = '<i data-lucide="pause-circle"></i>';
            } else {
                heroVideo.pause();
                heroControl.innerHTML = '<i data-lucide="play-circle"></i>';
            }

            if (heroVideo.muted) {
                heroVideo.muted = false;
            }

            lucide.createIcons();
        });
    }

    function openHireModal() {
        hireModalOverlay.classList.add('active');
        hireModalOverlay.setAttribute('aria-hidden', 'false');
    }

    function closeHireModal() {
        hireModalOverlay.classList.remove('active');
        hireModalOverlay.setAttribute('aria-hidden', 'true');
    }

    if (hireBtn && hireModalOverlay && hireModalClose) {
        hireBtn.addEventListener('click', openHireModal);
        hireModalClose.addEventListener('click', closeHireModal);
        hireModalOverlay.addEventListener('click', (event) => {
            if (event.target === hireModalOverlay) {
                closeHireModal();
            }
        });
    }

    function sendViaMailClient(subject, body) {
        const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }

    function sendContactMessage(name, email, message) {
        if (isEmailJSConfigured()) {
            return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name,
                from_email: email,
                message,
                reply_to: email,
                to_email: CONTACT_EMAIL
            });
        }

        const subject = `New contact from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        sendViaMailClient(subject, body);
        return Promise.resolve();
    }

    function sendHireMessage(company, name, email, message) {
        if (isEmailJSConfigured()) {
            return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                company_name: company,
                from_name: name,
                from_email: email,
                message,
                reply_to: email,
                to_email: CONTACT_EMAIL
            });
        }

        const subject = `Hire request: ${company}`;
        const body = `Company: ${company}\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        sendViaMailClient(subject, body);
        return Promise.resolve();
    }

    if (hireForm) {
        hireForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const company = document.getElementById('company-name').value;
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            sendHireMessage(company, name, email, message)
                .then(() => {
                    hireForm.reset();
                    closeHireModal();
                })
                .catch((error) => {
                    console.error('Hire form error:', error);
                    alert('Failed to submit. Please try again later.');
                });
        });
    }

    // Form Submit Handler
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // replace with your EmailJS service ID
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // replace with your EmailJS template ID
    const CONTACT_EMAIL = 'safiullahakhter84@gmail.com';
    const form = document.getElementById('contact-form');

    function isEmailJSConfigured() {
        return typeof emailjs !== 'undefined' &&
            EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
            EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
            typeof emailjs.send === 'function';
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            sendContactMessage(name, email, message)
                .then(() => {
                    form.reset();
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    alert('Failed to send message. Please try again later.');
                });
        });
    }
});