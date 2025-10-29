// ======================================
// 1. THEME TOGGLE WITH PERSISTENCE
// ======================================
const toggle = document.getElementById("theme-toggle");
const body = document.body;
const currentTheme = localStorage.getItem("theme");

// Initial Load: Check for saved theme
if (currentTheme === "light") {
    body.classList.add("light");
}
// Set initial icon based on the current class
toggle.textContent = body.classList.contains("light") ? "🌙" : "☀️";

// Event Listener: Toggle theme
toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    
    // Update icon and save preference
    toggle.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});


// ======================================
// 2. PROJECT DETAIL MODAL LOGIC
// ======================================
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-detail-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTechstack = document.getElementById('modal-techstack');
const modalGithubLink = document.getElementById('modal-github-link');

// Define project data based on resume content and new links
const projectData = {
    'waste-classification': {
        title: 'Household Waste Classification (Deep Learning)',
        description: "Developed deep learning models using <b>VGG16</b> for household waste classification into 12 classes including paper, plastic, metal, cardboard, clothes, and glass types. Achieved <b>94.17% test accuracy</b> by fine-tuning VGG16, unfreezing from 'block5 conv1', applying reduced learning rate, and using early stopping. The dataset was preprocessed by cleaning 15,000+ images and applying augmentation.",
        techstack: 'Python, Keras, VGG16, NumPy, Scikit-learn, Matplotlib, OpenCV',
        github: 'https://github.com/SmitPatel-14/Household-Waste-Classification'
    },
    'house-prediction': {
        title: 'House Price Prediction (Machine Learning)',
        description: "Designed and implemented a machine learning pipeline using <b>Random Forest Regressor</b> to estimate house prices based on the Bengaluru housing dataset. Performed extensive data cleaning by resolving inconsistencies in size, count, and ratios, and removing outliers using price per square foot analysis. Achieved <b>Train R2: 0.95 and Test R2: 0.78</b>.",
        techstack: 'Python, Scikit-learn, Random Forest, Pandas, NumPy, Matplotlib',
        github: 'https://github.com/SmitPatel-14' // Placeholder link updated to main GitHub
    },
    'todo-list': {
        title: 'Interactive To-Do List Web App',
        description: "Developed an interactive web app using vanilla <b>JavaScript</b> to add, mark, and delete tasks dynamically. Implemented <b>Local Storage</b> to preserve user data across sessions, demonstrating strong understanding of DOM manipulation and event handling.",
        techstack: 'HTML, CSS, JavaScript',
        github: 'https://github.com/SmitPatel-14/Small-Projects/tree/main/To-do%20list'
    },
    'calculator': {
        title: 'Calculator App',
        description: "Built a simple web-based calculator using <b>HTML, CSS, and JavaScript</b> capable of performing basic arithmetic operations. Focused on clean layout design, button styling, and effective event handling for real-time display updates.",
        techstack: 'HTML, CSS, JavaScript',
        github: 'https://github.com/SmitPatel-14/Small-Projects/tree/main/calculator'
    }
};

// Function to open the modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const data = projectData[projectId];

        if (data) {
            modalTitle.textContent = data.title;
            // Use innerHTML to process the bold tags
            modalDescription.innerHTML = data.description; 
            modalTechstack.textContent = `Tech Stack: ${data.techstack}`;
            modalGithubLink.href = data.github;

            // Hide GitHub button if link is placeholder (not needed anymore, but keeping logic)
            if (data.github === '#') {
                modalGithubLink.style.display = 'none';
            } else {
                modalGithubLink.style.display = 'flex';
            }

            modal.style.display = 'block';
        }
    });
});

// Function to close the modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});