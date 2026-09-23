/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background-color: #2c3e50;
    color: white;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.site-logo {
    height: 40px;
    width: auto;
    border-radius: 50%;
    background-color: white;
    padding: 2px;
}

.site-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

nav {
    display: flex;
    gap: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
}

/* Hero Section */
.hero {
    background-color: #3498db;
    color: white;
    text-align: center;
    padding: 3rem 1rem;
}

.hero h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.search-box {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.search-box input {
    padding: 0.8rem;
    width: 70%;
    border: none;
    border-radius: 4px;
}

.search-box button {
    padding: 0.8rem 1.5rem;
    background-color: #e67e22;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* General Container */
.container {
    padding: 2rem 1rem;
    max-width: 800px;
    margin: 0 auto;
}

.bg-light {
    background-color: #ecf0f1;
    border-radius: 8px;
}

h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
}

/* Tabs for Career Streams */
.tabs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.tab-btn {
    padding: 0.5rem 1rem;
    border: 1px solid #3498db;
    background: white;
    color: #3498db;
    border-radius: 20px;
    cursor: pointer;
}

.tab-btn.active {
    background: #3498db;
    color: white;
}

.stream-content {
    display: none;
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.stream-content.active {
    display: block;
}

.stream-content ul {
    list-style-type: none;
}

.stream-content li {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
}

/* Scholarships */
.scholarship-grid {
    display: grid;
    gap: 1rem;
}

.scholarship-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 5px solid #e67e22;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.scholarship-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.deadline {
    color: #c0392b;
    font-weight: bold;
    font-size: 0.9rem;
}

/* Registration Form Styles */
.registration-form {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.registration-form label {
    font-weight: bold;
    color: #2c3e50;
    font-size: 0.9rem;
}

.registration-form input, 
.registration-form select {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
}

.submit-btn {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
    font-weight: bold;
}

.submit-btn:hover {
    background-color: #219150;
}

/* Success Stories */
.story-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    font-style: italic;
    border-left: 5px solid #3498db;
}

.story-card span {
    display: block;
    margin-top: 1rem;
    font-weight: bold;
    font-style: normal;
    color: #2c3e50;
    text-align: right;
}

/* Footer */
footer {
    text-align: center;
    padding: 1.5rem;
    background: #2c3e50;
    color: white;
    font-size: 0.8rem;
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
    .menu-toggle {
        display: block;
    }
    nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #2c3e50;
        padding: 1rem;
        text-align: center;
    }
    nav.active {
        display: flex;
    }
    .search-box input {
        width: 60%;
    }
}
