// Skills data
const skills = [
    { title: "Programming Languages", content: "Python, HTML, JavaScript, CSS, Java, Dart, PHP" },
    { title: "Frameworks & Libraries", content: "React, Express.js, Bootstrap, Laravel, Tailwind CSS, Node.js, Flutter" },
    { title: "Database Management", content: "MySQL, Firebase, MongoDB" },
    { title: "Data Analysis & Visualization", content: "KNIME, Power BI, Pandas, Numpy" },
    { title: "Machine Learning & AI", content: "Scikit-learn, AWS Rekognition" },
    { title: "Cloud Technology", content: "AWS" },
    { title: "Creative Writing", content: "Collaborative writing, World-building, Character development" },
];

// Projects data
const projects = [
    {
        title: "Scribble",
        description: "My first programming project started in 2022, a Discord bot hosted locally on my computer. It is an economy and games bot developed using Discord.js. It is also a chatbot, utilising the Gemini API to get the Gen AI responses.",
        category: "",
        images: ["https://i.ibb.co/2tDTqHk/Screenshot-2024-08-14-154847.png"],
        pills: [{ "Documentation": "https://docs.google.com/document/d/13N9N90cFbXuCKMIRICWNKWG_RK3YyzskSpFyX7O00gg/edit" }],
        technologies: ["NodeJS", "Gemini API", "MongoDB"]
    },
    {
        title: "Firebush",
        description: "A text simulator game heavily inspired by the Hunger Games simulator.",
        images: ["https://i.ibb.co/QJPGBKH/image.png", "https://i.ibb.co/DWV7Tyz/image.png", "https://i.ibb.co/vjvvmRc/image.png",],
        pills: [{ "Documentation": "https://docs.google.com/document/d/1-8Rg-ao-9Is_LP5zyR1SsS1AW8tpuJoa6uS9OHLfkSk/edit" }, { "Link": "https://firebush.netlify.app/" }],
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind"]

    },
    {
        title: "Fern Scribbler Wiki",
        description: "A wiki built using React and Tailwind, hosted on Github Pages. It consists of every book and character in several book series under my pen name, Fern Scribbler.",
        images: ["https://i.ibb.co/t3gBcQB/image.png", "https://i.ibb.co/PxPSD2B/image.png", "https://i.ibb.co/cyRSRP1/image.png", "https://i.ibb.co/XFbgt0Z/image.png"],
        pills: [{ "Link": "https://home9634.github.io/Fern-Scribbler-Wiki/#/" }],
        technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    },
    {
        title: "Image Seer",
        description: "Hosted using Amazon Web Services, this website categorizes images fed into it to give an output that describes the image. It extracts the text, labels objects in the image, etc. This was done for Cloud Technologies and Artificial Intelligence module in school.",
        images: ["https://i.ibb.co/c20w2xz/Screenshot-2024-08-10-134915.png", "https://i.ibb.co/wgYY1kw/Screenshot-2024-08-10-134238.png", "https://i.ibb.co/KVwnfxn/Screenshot-2024-08-10-134437.png", "https://i.ibb.co/PYS5FZ2/Screenshot-2024-08-10-134452.png", "https://i.ibb.co/98pf4bb/Screenshot-2024-08-10-134537.png"],
        demo: "https://youtu.be/E4SarmCf_BA",
        technologies: ["AWS", "HTML", "CSS", "JavaScript", "Tailwind"]
    },
    {
        title: "EcoBus Routes",
        description: "Using LTA's Bus Arrival API and the Flutter framework, I designed a bus app for the module Mobile Application Development in school. It has the base for recording journeys to earn points to redeem vouchers, promoting sustainabilty. All information about the user is stored in Firebase. However, there are no actual vouchers in place.",
        images: ["https://i.ibb.co/BV5kdmg/Project-Logo-Cropped.png", "https://i.ibb.co/YyRRCGd/Screenshot-2024-07-29-044037.png", "https://i.ibb.co/vwh6kJM/Screenshot-2024-07-29-044700.png", "https://i.ibb.co/WH1J4gm/Screenshot-2024-07-29-050704.png", "https://i.ibb.co/2v2xQ6B/Screenshot-2024-07-29-042842.png", "https://i.ibb.co/426YXr0/Screenshot-2024-07-29-043257.png"],
        demo: "https://youtu.be/J4BsPZ34tGY",
        technologies: ["Flutter", "Dart", "LTA API", "Firebase"]
    },
    {
        title: "Sleep Disorder Detector",
        description: "For Machine Learning For Developers module in school, I cleaned a dataset and trained a model using scikit-learn, in order to predict different sleep disorders.",
        images: ["https://i.ibb.co/0XKsBVH/image.png"],
        github: "https://github.com/Home9634/sleep-detection-app-mldp",
        pills: [{ "Link": "https://blank-app-e829zcaidsg.streamlit.app/" }],
        technologies: ["Streamlit", "Python", "scikit-learn"],
    },
    {
        title: "Meeting Scheduler",
        description: "A robot built using UIPath that helps schedules meetings and send emails with the automatically created meeting links to all participants.",
        images: ["https://i.ibb.co/kgGqymM/Screenshot-2024-10-02-121534.png", "https://i.ibb.co/bNn6pk3/Screenshot-2024-10-02-121602.png"],
        demo: "https://youtu.be/Zb6N2daivaI",
        technologies: ["UIPath"]
    }
    // Add more projects here
];

let writingProjects = [
    {
        title: "The Reactor War",
        description: "The first book I've properly written, co-written by a friend of mine. The first release was in 2021, but has been rewritten and polished several times afterwards, leading to a finished product for the first book of this sci-fi series.",
        images: ["https://i.ibb.co/ZhpHTv4/The-Reactor-War-Front.png", "https://i.ibb.co/DCXhK8t/The-Reactor-War-Back.png"],
        wiki: "https://home9634.github.io/Fern-Scribbler-Wiki/#/books/e79_trw",
        link: "https://drive.google.com/file/d/1jcYADJZxD06mI5uvnAKyepdKQOglPPbJ/view?usp=sharing",
        genres: ["Sci-fi", "Mystery", "Action"]
    },
]

const certs = [
    "GovTech GeekOut 2024 - Best Technical Implementation",
    "L1 Knime Certification",
    "Edusave Certificate Of Academic Achievement",
    "Legacy JavaScript Algorithms and Data Structures: Developer Certification (300 hours)",
    "The Queen's Commonwealth Essay Competition 2021 - Bronze Award"
]

let showProgramProj = true

window.scrollTo(0, 0)

// Component for skill card
function createSkillCard(skill, index) {
    // let maxWidth = window.innerWidth * 4/5
    // let cardWidth = Math.min(Math.round(maxWidth / skills.length) * 2, 200) 
    // console.log(`Card Width: ${cardWidth}`)
    // let cols = Math.round(maxWidth / cardWidth)
    // console.log(`Columns: ${cols}`)
    let cardWidth = 200
    let cols = 1
    let x = Math.floor(index / (cols * 2)) * cardWidth
    let y = index % 2 == 0 ? 0 : cardWidth * 3 / 4
    return `
        <div class="skill-card absolute w-[${cardWidth}px] h-[${cardWidth}px] bg-gray-100 dark:bg-gray-600 dark:text-white rounded shadow-lg overflow-hidden" style="transform:translate(${x}px, ${y}px)" data-x="${x}" data-y="${y}">
            <div class="bg-gray-200 dark:bg-gray-700 h-6"></div>
            <div class="p-2">
                <h3 class="font-bold mb-1 text-lg text-gray-800 dark:text-gray-200">${skill.title}</h3>
                <p class="text-md text-gray-700 dark:text-gray-300">${skill.content}</p>
            </div>
        </div>
    `;
}

// Component for project card
function createProjectCard(project, index) {
    const techBadges = project.technologies.map(tech =>
        `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tech}</span>`
    ).join('');

    return `
        <div class="bg-gray-100 dark:bg-gray-600 dark:text-white p-6 rounded shadow-lg transform transition duration-300 hover:shadow-xl">
            <div class="relative mb-4">
                <div class="carousel-${index} flex transition-transform duration-300 ease-in-out cursor-pointer">
                    ${project.images.map((img, index) => `<img id="${img}" src="${img}" alt="${project.title}" class="w-full h-56 object-cover rounded ${index == 0 ? "" : "hidden"}">`).join('')}
                </div>
                <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 carousel-prev-${index}">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 carousel-next-${index}">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <h3 class="text-xl font-bold mb-2 text-blue-600 dark:text-blue-100">${project.title}</h3>
            <p class="mb-4">${project.description}</p>
            <div class="mb-4">
                ${techBadges}
            </div>
            <div class="flex space-x-2">
                ${project.github ? `<a href="${project.github}" class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition duration-300 transform hover:scale-105" target="_blank">GitHub</a>` : ""}
                ${project.demo ? `<a href="${project.demo}" class="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition duration-300 transform hover:scale-105" target="_blank">Demo</a>` : ""}
                ${project.pills ? `${project.pills.map(pill => {
        console.log(Object.keys(pill))
        return `<a href="${Object.values(pill)[0]}" class="bg-stone-500 text-white px-3 py-1 rounded-full text-sm hover:bg-stone-600 transition duration-300 transform hover:scale-105" target="_blank">${Object.keys(pill)[0]} </a>`
    })}`.replaceAll(",", "") : ""}
            </div>
                        <div class="page-fold"></div>
        </div>
    `;
}

function createWritingProjectCard(project, index) {
    const genreBadges = project.genres.map(genre =>
        `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${genre}</span>`
    ).join('');

    return `
    <div class="bg-gray-100 dark:bg-gray-600 dark:text-white p-6 rounded shadow-lg transform transition duration-300 hover:shadow-xl">
        <div class="relative mb-4">
            <div class="carousel-${index} flex transition-transform duration-300 ease-in-out cursor-pointer">
                ${project.images.map((img, index) => `<img id="${img}" src="${img}" alt="${project.title}" class="w-full h-56 object-cover rounded ${index == 0 ? "" : "hidden"}">`).join('')}
            </div>
            <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 carousel-prev-${index}">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 carousel-next-${index}">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <h3 class="text-xl font-bold mb-2 text-blue-600 dark:text-blue-100">${project.title}</h3>
        <p class="mb-4">${project.description}</p>
        <div class="mb-4">
            ${genreBadges}
        </div>
        <div class="flex space-x-2">
            ${project.wiki ? `<a href="${project.wiki}" class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition duration-300 transform hover:scale-105" target="_blank">Wiki</a>` : ""}
            ${project.link ? `<a href="${project.link}" class="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-600 transition duration-300 transform hover:scale-105" target="_blank">Link</a>` : ""}
            ${project.pills ? `${project.pills.map(pill => {
        console.log(Object.keys(pill))
        return `<a href="${Object.values(pill)[0]}" class="bg-stone-500 text-white px-3 py-1 rounded-full text-sm hover:bg-stone-600 transition duration-300 transform hover:scale-105" target="_blank">${Object.keys(pill)[0]} </a>`
    })}`.replaceAll(",", "") : ""}
        </div>
                    <div class="page-fold"></div>
    </div>
`;
}

// Render skills
const skillsGrid = document.getElementById('skills-grid');
skillsGrid.innerHTML = skills.map(createSkillCard).join('');

function renderProjects() {
    // Render projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = showProgramProj ? projects.map(createProjectCard).join('') : writingProjects.map(createWritingProjectCard).join('');

    let chosenProjects = showProgramProj ? [...projects] : [...writingProjects]

    chosenProjects.forEach((project, index) => {
        const carousel = document.querySelector(`.carousel-${index}`);
        const prevBtn = document.querySelector(`.carousel-prev-${index}`);
        const nextBtn = document.querySelector(`.carousel-next-${index}`);
        let currentSlide = 0;
        let oldSlide = 0;

        function showSlide(index) {
            //carousel.style.transform = `translateX(-${index * 100}%)`;
            document.getElementById(project.images[oldSlide]).classList.add("hidden")
            document.getElementById(project.images[currentSlide]).classList.remove("hidden")
        }

        prevBtn.addEventListener('click', () => {
            oldSlide = currentSlide
            currentSlide = (currentSlide - 1 + project.images.length) % project.images.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            oldSlide = currentSlide
            currentSlide = (currentSlide + 1) % project.images.length;
            showSlide(currentSlide);
        });

        // Add click event to open full-size image
        project.images.forEach(img => {
            console.log(carousel)
            console.log(img)
            const imgElement = carousel.querySelector(`img[src="${img}"]`);
            console.log(imgElement)
            imgElement.addEventListener('click', () => {
                openImageViewer(img, project.title);
            });
        });
    });
}

renderProjects()

// Full-screen image viewer
const imageViewer = document.getElementById('image-viewer');
const fullImage = document.getElementById('full-image');
const fullImageProject = document.getElementById('full-image-project')
const closeViewer = document.getElementById('close-viewer');

function openImageViewer(imageSrc, title) {
    fullImage.src = imageSrc;
    fullImageProject.innerHTML = title
    imageViewer.classList.remove('hidden');
}

closeViewer.addEventListener('click', () => {
    imageViewer.classList.add('hidden');
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
html.classList.toggle('dark')

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Set initial theme
if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
} else {
    html.classList.add('dark');
}

let highestZIndex = 100; // Global counter to keep track of the highest z-index

function initDraggable() {
    let skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach((card) => {
        interact(card).draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            listeners: {
                start(event) {
                    // Bring the dragged element to the front
                    highestZIndex++
                    event.target.style.zIndex = highestZIndex;
                    // skillCards.forEach((tempCard) => {
                    //     console.log("tree")
                    //     if (tempCard != card) {
                    //         tempCard.style.zIndex = ''
                    //     }
                    // })
                },
                move: dragMoveListener,
                end(event) {
                    // Optionally reset the z-index after dragging ends
                    // event.target.style.zIndex = '';
                }
            }
        });

        card.addEventListener('click', () => {
            highestZIndex++; // Increment the highest z-index
            card.style.zIndex = highestZIndex; // Bring the clicked element to the front
        });
    });
}

function dragMoveListener(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.transform = `translate(${x}px, ${y}px)`;

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}


// Use requestAnimationFrame to ensure the DOM has updated before initializing
requestAnimationFrame(() => {
    initDraggable();
});

// Recalculate positions on window resize
window.addEventListener('resize', initDraggable);

// Achievement data
const achievements = [
    { id: 'visit', name: 'Welcome!', description: 'Visit this site', icon: '👋' },
    { id: 'dark_mode', name: 'Rise And Shine', description: 'Toggle light mode', icon: '☀️' },
    { id: 'all_sections', name: 'Explorer', description: 'View all sections of the portfolio', icon: '🔍' },
    { id: 'drag_skill', name: 'Skill Mover', description: 'Drag a skill card', icon: '✋' },
    { id: 'view_project', name: 'Project Curious', description: 'View a project in full screen', icon: '🖼️' },
    { id: 'contact', name: 'Let\'s Connect', description: 'Click on a contact link', icon: '📞' },
];

// Initialize achievements in local storage
function initAchievements() {
    const storedAchievements = localStorage.getItem('portfolioAchievements');
    if (!storedAchievements) {
        const initialAchievements = achievements.reduce((acc, achievement) => {
            acc[achievement.id] = false;
            return acc;
        }, {});
        localStorage.setItem('portfolioAchievements', JSON.stringify(initialAchievements));
    }
}

function updateAchievementDisplay() {
    const achievementsList = document.getElementById('achievements-list');
    const storedAchievements = JSON.parse(localStorage.getItem('portfolioAchievements'));

    achievementsList.innerHTML = achievements.map(achievement => `
        <div class="achievement ${storedAchievements[achievement.id] ? 'unlocked' : ''}" data-id="${achievement.id}">
            <span class="text-2xl mr-2">${achievement.icon}</span>
            <strong>${achievement.name}</strong>
            <p>${achievement.description}</p>
        </div>
    `).join('');

    // Add click listener to toggle achievement state (for testing purposes)
    achievementsList.querySelectorAll('.achievement').forEach(achievementEl => {
        // achievementEl.addEventListener('click', () => {
        //     const id = achievementEl.dataset.id;
        //     if (storedAchievements[id]) {
        //         revokeAchievement(id);
        //     } else {
        //         unlockAchievement(id);
        //     }
        // });
    });
}

function unlockAchievement(id) {
    const storedAchievements = JSON.parse(localStorage.getItem('portfolioAchievements'));
    if (!storedAchievements[id]) {
        storedAchievements[id] = true;
        localStorage.setItem('portfolioAchievements', JSON.stringify(storedAchievements));

        const achievementEl = document.querySelector(`.achievement[data-id="${id}"]`);
        achievementEl.classList.add('unlocked');

        showAchievementNotification(id);
    }
}

function revokeAchievement(id) {
    const storedAchievements = JSON.parse(localStorage.getItem('portfolioAchievements'));
    console.log(storedAchievements[id])
    if (storedAchievements[id]) {
        storedAchievements[id] = false;
        localStorage.setItem('portfolioAchievements', JSON.stringify(storedAchievements));

        const achievementEl = document.querySelector(`.achievement[data-id="${id}"]`);
        achievementEl.classList.remove('unlocked');
    }
}

// Show a notification when an achievement is unlocked
function showAchievementNotification(id) {
    const achievement = achievements.find(a => a.id === id);
    const notification = document.createElement('div');
    notification.zIndex = 1001
    notification.className = 'fixed bottom-4 right-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
        <strong>Achievement Unlocked!</strong>
        <p>${achievement.name}: ${achievement.description}</p>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Toggle the achievements menu
function toggleAchievementsMenu() {
    const menu = document.getElementById('achievements-menu');
    menu.classList.toggle('translate-x-full');
}

function resetAchievements() {
    const currentAchievements = JSON.parse(localStorage.getItem("portfolioAchievements"))
    Object.keys(currentAchievements).forEach((key, index) => {
        if (currentAchievements[key]) {
            setTimeout(() => {
                console.log("Hello")
                revokeAchievement(key)
                if (index == currentAchievements.length - 1) {
                    const initialAchievements = achievements.reduce((acc, achievement) => {
                        acc[achievement.id] = false;
                        return acc;
                    }, {});
                    localStorage.setItem('portfolioAchievements', JSON.stringify(initialAchievements));
                }
            }, 200 * (index + 1))
        }
    })

    //updateAchievementDisplay();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initAchievements();
    updateAchievementDisplay();

    // Unlock 'visit' achievement on load
    unlockAchievement('visit');

    // Toggle achievements menu
    document.getElementById('achievements-button').addEventListener('click', toggleAchievementsMenu);
    document.getElementById('achievements-menu-close').addEventListener('click', toggleAchievementsMenu)
    document.getElementById('achievements-menu-reset').addEventListener('click', resetAchievements)

    // Dark mode achievement
    document.getElementById('theme-toggle').addEventListener('click', () => {
        if (localStorage.getItem("theme") == 'light')
            unlockAchievement('dark_mode')
    });

    // Explorer achievement (simplified version, you might want to use Intersection Observer for better performance)
    const sections = ['about', 'skills', 'projects', 'contact'];
    let viewedSections = new Set();
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const el = document.getElementById(section);
            if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom > 0) {
                viewedSections.add(section);
                if (viewedSections.size === sections.length) {
                    unlockAchievement('all_sections');
                }
            }
        });
    });

    // Skill Mover achievement
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mousedown', () => unlockAchievement('drag_skill'));
    });

    // Project Curious achievement
    document.querySelectorAll('.carousel-0, .carousel-1, .carousel-2, .carousel-3, .carousel-4').forEach(carousel => {
        carousel.addEventListener('click', () => unlockAchievement('view_project'));
    });

    // Let's Connect achievement
    document.querySelectorAll('#contact a').forEach(link => {
        link.addEventListener('click', () => unlockAchievement('contact'));
    });
});

function renderGSAPAnimations() {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Clear existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Animate skills on scroll
    gsap.utils.toArray('#skills-grid > div').forEach((skill, i) => {
        gsap.from(skill, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            scrollTrigger: {
                trigger: skill,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            },
            delay: i * 0.1
        });
    });

    // Animate projects on scroll
    gsap.utils.toArray('#projects-grid > div').forEach((project, i) => {
        gsap.from(project, {
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.5,
            scrollTrigger: {
                trigger: project,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach((section) => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                    onEnter: () => section.style.visibility = 'visible',
                    onLeave: () => section.style.visibility = 'visible'
                }
            }
        );
    });
}

renderGSAPAnimations()

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-100');
        header.classList.remove('bg-opacity-90');
    } else {
        header.classList.add('bg-opacity-90');
        header.classList.remove('bg-opacity-100');
    }
});

function toggleProjectShow(projectType) {
    showProgramProj = projectType
    renderProjects();

    // Force layout recalculation
    document.body.offsetHeight;

    // Re-run GSAP animations
    renderGSAPAnimations();

    // Scroll to top
    window.scrollTo(0, 0);
}