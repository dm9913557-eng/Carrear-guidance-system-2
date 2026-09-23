// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tab Switching for Career Streams
function openStream(streamName) {
    // Hide all contents
    document.querySelectorAll('.stream-content').forEach(content => {
        content.classList.remove('active');
    });
    // Remove active from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected content
    document.getElementById(streamName).classList.add('active');
    // Add active to clicked button (simple logic)
    event.target.classList.add('active');
}

// Mock Database for Scholarships (To be replaced by Firebase/MySQL later)
const scholarships = [
    {
        title: "Odisha Post-Matric Scholarship",
        description: "For SC/ST/OBC students studying at post-matriculation level.",
        deadline: "October 31, 2026",
        eligibility: "Residents of Odisha, Family income < 2.5 Lakhs"
    },
    {
        title: "National Means-cum-Merit Scholarship (NMMS)",
        description: "For meritorious students of economically weaker sections.",
        deadline: "November 15, 2026",
        eligibility: "Class 8 passed with 55%, Family income < 1.5 Lakhs"
    },
    {
        title: "Central Sector Scheme of Scholarship",
        description: "For college and university students.",
        deadline: "December 10, 2026",
        eligibility: "Top 20% in Class 12 board exams"
    }
];

// Render Scholarships
function renderScholarships(data) {
    const list = document.getElementById('scholarshipList');
    list.innerHTML = '';
    
    if (data.length === 0) {
        list.innerHTML = '<p>No scholarships found matching your search.</p>';
        return;
    }

    data.forEach(scholarship => {
        const card = document.createElement('div');
        card.className = 'scholarship-card';
        card.innerHTML = `
            <h3>${scholarship.title}</h3>
            <p>${scholarship.description}</p>
            <p><strong>Eligibility:</strong> ${scholarship.eligibility}</p>
            <p class="deadline">Deadline: ${scholarship.deadline}</p>
        `;
        list.appendChild(card);
    });
}

// Initialize
renderScholarships(scholarships);

// Simple Search Functionality
function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Filter scholarships
    const filteredScholarships = scholarships.filter(scholarship => 
        scholarship.title.toLowerCase().includes(query) || 
        scholarship.description.toLowerCase().includes(query) ||
        scholarship.eligibility.toLowerCase().includes(query)
    );
    
    renderScholarships(filteredScholarships);
}
