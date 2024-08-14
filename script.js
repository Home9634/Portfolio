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
        description: "My first programming project since 2022, a Discord bot hosted locally on my computer. It is an economy and games bot developed using Discord.js. It is also a chatbot, utilising the Gemini API to get the Gen AI responses.",
        images: ["https://i.ibb.co/2tDTqHk/Screenshot-2024-08-14-154847.png"],
        pills: [{ "Documentation": "https://docs.google.com/document/d/13N9N90cFbXuCKMIRICWNKWG_RK3YyzskSpFyX7O00gg/edit" }],
        technologies: ["NodeJS", "Gemini API", "MongoDB"]
    },
    {
        title: "Firebush",
        description: "A text simulator game heavily inspired by the Hunger Games simulator",
        images: [""],
        pills: [{"Documentation": "https://docs.google.com/document/d/1-8Rg-ao-9Is_LP5zyR1SsS1AW8tpuJoa6uS9OHLfkSk/edit"}, {"Link": "https://firebush.netlify.app/"}],
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind"]

    },
    {
        title: "Image Seer",
        description: "Hosted using Amazon Web Services, this website categorizes images fed into it to give an output that describes the image. It extracts the text, labels objects in the image, etc. This was done for Cloud Technologies and Artificial Intelligence module in school.",
        images: ["https://i.ibb.co/c20w2xz/Screenshot-2024-08-10-134915.png", "https://i.ibb.co/wgYY1kw/Screenshot-2024-08-10-134238.png", "https://i.ibb.co/KVwnfxn/Screenshot-2024-08-10-134437.png", "https://i.ibb.co/PYS5FZ2/Screenshot-2024-08-10-134452.png", "https://i.ibb.co/98pf4bb/Screenshot-2024-08-10-134537.png"],
        github: "#",
        demo: "#",
        technologies: ["AWS", "HTML", "CSS", "JavaScript", "Tailwind"]
    },
    {
        title: "EcoBus Routes",
        description: "Using LTA's Bus Arrival API and the Flutter framework, I desigbed a bus app for the module Mobile Application Development. It has the base for recording journeys to earn points to redeem vouchers, promoting sustainabilty. All information about the user is stored in Firebase. However, there are no actual vouchers in place.",
        images: ["placeholder4.jpg", "placeholder5.jpg"],
        github: "#",
        demo: "#",
        technologies: ["Flutter", "Dart", "LTA API", "Firebase"]
    }
    // Add more projects here
];

// Component for skill card
function createSkillCard(skill) {
    return `
        <div class="bg-gray-100 dark:bg-gray-600 dark:text-white p-4 rounded shadow-lg transform hover:scale-105 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-700">
            <h3 class="font-bold mb-2 text-blue-600 dark:text-blue-100">${skill.title}</h3>
            <p>${skill.content}</p>
        </div>
    `;
}

// Component for project card
function createProjectCard(project, index) {
    const techBadges = project.technologies.map(tech =>
        `<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${tech}</span>`
    ).join('');

    return `
        <div class="bg-gray-100 dark:bg-gray-600 dark:text-white p-6 rounded shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-xl">
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
                ${project.pills ? project.pills.map(pill => {
                    console.log(Object.keys(pill))
                    return `<a href="${Object.values(pill)[0]}" class="bg-stone-500 text-white px-3 py-1 rounded-full text-sm hover:bg-stone-600 transition duration-300 transform hover:scale-105" target="_blank">${Object.keys(pill)[0]} </a>`}) : ""}
            </div>
        </div>
    `;
}

// Render skills
const skillsGrid = document.getElementById('skills-grid');
skillsGrid.innerHTML = skills.map(createSkillCard).join('');

// Render projects
const projectsGrid = document.getElementById('projects-grid');
projectsGrid.innerHTML = projects.map(createProjectCard).join('');

projects.forEach((project, index) => {
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
        const imgElement = carousel.querySelector(`img[src="${img}"]`);
        imgElement.addEventListener('click', () => {
            openImageViewer(img, project.title);
        });
    });
});

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


// GSAP animations
gsap.registerPlugin(ScrollTrigger);

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
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        }
    });
});

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