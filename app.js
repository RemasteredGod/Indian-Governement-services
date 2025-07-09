// Application Data
const servicesData = [
    {"name": "IAS", "category": "Civil Services", "entry_age": "21-32", "qualification": "Graduation", "exam": "UPSC CSE", "starting_salary": "₹56,100", "top_position": "Cabinet Secretary", "years_to_top": 37, "job_security": "Very High", "work_life_balance": "Medium"},
    {"name": "IPS", "category": "Civil Services", "entry_age": "21-32", "qualification": "Graduation", "exam": "UPSC CSE", "starting_salary": "₹56,100", "top_position": "DGP", "years_to_top": 37, "job_security": "Very High", "work_life_balance": "Low"},
    {"name": "Indian Army", "category": "Defense", "entry_age": "16.5-19.5", "qualification": "12th PCM", "exam": "NDA/CDS", "starting_salary": "₹56,100", "top_position": "General", "years_to_top": 40, "job_security": "Very High", "work_life_balance": "Low"},
    {"name": "Indian Navy", "category": "Defense", "entry_age": "16.5-19.5", "qualification": "12th PCM", "exam": "NDA/CDS", "starting_salary": "₹56,100", "top_position": "Admiral", "years_to_top": 40, "job_security": "Very High", "work_life_balance": "Low"},
    {"name": "Indian Air Force", "category": "Defense", "entry_age": "16.5-19.5", "qualification": "12th PCM", "exam": "NDA/AFCAT", "starting_salary": "₹56,100", "top_position": "Air Chief Marshal", "years_to_top": 40, "job_security": "Very High", "work_life_balance": "Medium"},
    {"name": "Railways", "category": "Technical", "entry_age": "21-30", "qualification": "B.Tech", "exam": "UPSC ESE", "starting_salary": "₹56,100", "top_position": "Chairman", "years_to_top": 35, "job_security": "High", "work_life_balance": "High"},
    {"name": "Medical Services", "category": "Medical", "entry_age": "21-32", "qualification": "MBBS", "exam": "UPSC CMS", "starting_salary": "₹56,100", "top_position": "Secretary Health", "years_to_top": 35, "job_security": "High", "work_life_balance": "Medium"},
    {"name": "Engineering (ISRO)", "category": "Technical", "entry_age": "21-30", "qualification": "B.Tech", "exam": "ISRO Exam", "starting_salary": "₹56,100", "top_position": "Director", "years_to_top": 35, "job_security": "High", "work_life_balance": "High"},
    {"name": "Aviation", "category": "Aviation", "entry_age": "18-35", "qualification": "12th PCM", "exam": "CPL Training", "starting_salary": "₹80,000", "top_position": "Chief Pilot", "years_to_top": 20, "job_security": "Medium", "work_life_balance": "Medium"}
];

const careerTimelines = {
    "IAS": [
        {"rank": "Sub-Divisional Magistrate", "years": 0, "salary": "₹56,100-₹1,77,500", "responsibilities": "District administration, revenue management"},
        {"rank": "District Magistrate", "years": 10, "salary": "₹78,800-₹2,09,200", "responsibilities": "District administration, law and order"},
        {"rank": "Joint Secretary", "years": 15, "salary": "₹1,44,200-₹2,18,200", "responsibilities": "Policy formulation, ministry administration"},
        {"rank": "Cabinet Secretary", "years": 37, "salary": "₹2,50,000", "responsibilities": "Highest civil servant, cabinet coordination"}
    ],
    "IPS": [
        {"rank": "Assistant Superintendent of Police", "years": 0, "salary": "₹56,100-₹1,77,500", "responsibilities": "District police operations, crime investigation"},
        {"rank": "Superintendent of Police", "years": 8, "salary": "₹78,800-₹2,09,200", "responsibilities": "District police chief, law and order"},
        {"rank": "Inspector General", "years": 18, "salary": "₹1,44,200-₹2,18,200", "responsibilities": "Range operations, specialized units"},
        {"rank": "Director General of Police", "years": 37, "salary": "₹2,50,000", "responsibilities": "State police chief, policy making"}
    ],
    "Indian Army": [
        {"rank": "Lieutenant", "years": 0, "salary": "₹56,100", "responsibilities": "Platoon command, basic operations"},
        {"rank": "Captain", "years": 2, "salary": "₹61,300", "responsibilities": "Company operations, training"},
        {"rank": "Major", "years": 6, "salary": "₹69,400", "responsibilities": "Battalion operations, specialized roles"},
        {"rank": "Lieutenant Colonel", "years": 13, "salary": "₹1,21,200", "responsibilities": "Battalion command, staff roles"},
        {"rank": "Colonel", "years": 26, "salary": "₹1,30,600", "responsibilities": "Brigade staff, specialized commands"},
        {"rank": "General", "years": 40, "salary": "₹2,25,000", "responsibilities": "Army Chief, strategic command"}
    ],
    "Indian Navy": [
        {"rank": "Sub Lieutenant", "years": 0, "salary": "₹56,100", "responsibilities": "Ship operations, basic naval duties"},
        {"rank": "Lieutenant", "years": 2, "salary": "₹61,300", "responsibilities": "Department head, navigation"},
        {"rank": "Lieutenant Commander", "years": 8, "salary": "₹69,400", "responsibilities": "Senior department head, specialized operations"},
        {"rank": "Commander", "years": 16, "salary": "₹1,21,200", "responsibilities": "Ship command, shore establishments"},
        {"rank": "Captain", "years": 26, "salary": "₹1,30,600", "responsibilities": "Major ship command, base command"},
        {"rank": "Admiral", "years": 40, "salary": "₹2,25,000", "responsibilities": "Naval Chief, strategic maritime command"}
    ],
    "Indian Air Force": [
        {"rank": "Flying Officer", "years": 0, "salary": "₹56,100", "responsibilities": "Aircraft operations, basic flying duties"},
        {"rank": "Flight Lieutenant", "years": 2, "salary": "₹61,300", "responsibilities": "Section leader, advanced operations"},
        {"rank": "Squadron Leader", "years": 8, "salary": "₹69,400", "responsibilities": "Squadron operations, training"},
        {"rank": "Wing Commander", "years": 16, "salary": "₹1,21,200", "responsibilities": "Wing operations, base functions"},
        {"rank": "Group Captain", "years": 26, "salary": "₹1,30,600", "responsibilities": "Base command, specialized roles"},
        {"rank": "Air Chief Marshal", "years": 40, "salary": "₹2,25,000", "responsibilities": "Air Force Chief, strategic air command"}
    ],
    "Railways": [
        {"rank": "Assistant Executive Engineer", "years": 0, "salary": "₹56,100", "responsibilities": "Project execution, technical work"},
        {"rank": "Executive Engineer", "years": 8, "salary": "₹78,800", "responsibilities": "Division operations, project management"},
        {"rank": "Chief Engineer", "years": 18, "salary": "₹1,44,200", "responsibilities": "Zonal operations, policy implementation"},
        {"rank": "Chairman Railway Board", "years": 35, "salary": "₹2,50,000", "responsibilities": "Railway policy, strategic planning"}
    ],
    "Medical Services": [
        {"rank": "Assistant Surgeon", "years": 0, "salary": "₹56,100", "responsibilities": "Patient care, basic medical services"},
        {"rank": "Civil Surgeon", "years": 10, "salary": "₹78,800", "responsibilities": "District health officer, program management"},
        {"rank": "Director Health Services", "years": 20, "salary": "₹1,44,200", "responsibilities": "State health policy, administration"},
        {"rank": "Secretary Health", "years": 35, "salary": "₹2,50,000", "responsibilities": "National health policy, strategic planning"}
    ],
    "Engineering (ISRO)": [
        {"rank": "Scientist/Engineer", "years": 0, "salary": "₹56,100", "responsibilities": "Research, development, technical work"},
        {"rank": "Senior Scientist", "years": 8, "salary": "₹78,800", "responsibilities": "Project leadership, advanced research"},
        {"rank": "Associate Director", "years": 18, "salary": "₹1,44,200", "responsibilities": "Program management, strategic projects"},
        {"rank": "Director", "years": 35, "salary": "₹2,50,000", "responsibilities": "Center operations, policy making"}
    ],
    "Aviation": [
        {"rank": "Co-Pilot", "years": 0, "salary": "₹80,000", "responsibilities": "Aircraft operations, flight support"},
        {"rank": "Captain", "years": 5, "salary": "₹2,50,000", "responsibilities": "Aircraft command, flight operations"},
        {"rank": "Senior Captain", "years": 12, "salary": "₹4,00,000", "responsibilities": "Training, specialized operations"},
        {"rank": "Chief Pilot", "years": 20, "salary": "₹8,00,000", "responsibilities": "Fleet management, training programs"}
    ]
};

// DOM Elements
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const servicesGrid = document.getElementById('servicesGrid');
const serviceSelect = document.getElementById('serviceSelect');
const compareSelect = document.getElementById('compareSelect');
const timelineDetails = document.getElementById('timelineDetails');
const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
const comparisonTable = document.getElementById('comparisonTable');
const calculateBtn = document.getElementById('calculateBtn');
const calculatorResults = document.getElementById('calculatorResults');

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
        
        // Initialize section-specific functionality
        if (targetId === 'services') {
            populateServicesGrid();
        }
    });
});

// Populate Services Grid
function populateServicesGrid() {
    if (!servicesGrid) return;
    
    const qualificationFilter = document.getElementById('qualificationFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchBox = document.getElementById('searchBox');
    
    function renderServices() {
        let filteredServices = servicesData;
        
        // Apply filters
        if (qualificationFilter.value) {
            filteredServices = filteredServices.filter(service => 
                service.qualification === qualificationFilter.value
            );
        }
        
        if (categoryFilter.value) {
            filteredServices = filteredServices.filter(service => 
                service.category === categoryFilter.value
            );
        }
        
        if (searchBox.value) {
            const searchTerm = searchBox.value.toLowerCase();
            filteredServices = filteredServices.filter(service => 
                service.name.toLowerCase().includes(searchTerm) ||
                service.category.toLowerCase().includes(searchTerm)
            );
        }
        
        // Render services
        servicesGrid.innerHTML = filteredServices.map(service => `
            <div class="service-detailed-card">
                <h3>${service.name}</h3>
                <div class="service-info">
                    <div><strong>Category:</strong> ${service.category}</div>
                    <div><strong>Entry Age:</strong> ${service.entry_age}</div>
                    <div><strong>Qualification:</strong> ${service.qualification}</div>
                    <div><strong>Exam:</strong> ${service.exam}</div>
                    <div><strong>Starting Salary:</strong> ${service.starting_salary}</div>
                    <div><strong>Top Position:</strong> ${service.top_position}</div>
                    <div><strong>Years to Top:</strong> ${service.years_to_top} years</div>
                    <div><strong>Job Security:</strong> ${service.job_security}</div>
                    <div><strong>Work-Life Balance:</strong> ${service.work_life_balance}</div>
                </div>
            </div>
        `).join('');
    }
    
    // Initial render
    renderServices();
    
    // Add event listeners for filters
    qualificationFilter.addEventListener('change', renderServices);
    categoryFilter.addEventListener('change', renderServices);
    searchBox.addEventListener('input', renderServices);
}

// Timeline Functionality
function updateTimeline() {
    const selectedService = serviceSelect.value;
    const compareService = compareSelect.value;
    
    if (!selectedService) {
        timelineDetails.innerHTML = `
            <div class="timeline-placeholder">
                <h3>Select a service above to view career progression timeline</h3>
                <p>Interactive timeline will show ranks, years, salaries, and responsibilities</p>
            </div>
        `;
        return;
    }
    
    const timeline = careerTimelines[selectedService];
    if (!timeline) {
        timelineDetails.innerHTML = `
            <div class="timeline-placeholder">
                <h3>Timeline data not available for ${selectedService}</h3>
                <p>Please select another service</p>
            </div>
        `;
        return;
    }
    
    let content = `
        <div class="timeline-progression">
            <h3>${selectedService} Career Progression</h3>
            ${timeline.map(rank => `
                <div class="timeline-rank">
                    <div class="timeline-rank-info">
                        <h4>${rank.rank}</h4>
                        <p><strong>Salary:</strong> ${rank.salary}</p>
                        <p><strong>Responsibilities:</strong> ${rank.responsibilities}</p>
                    </div>
                    <div class="timeline-rank-years">${rank.years} years</div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Add comparison if selected
    if (compareService && careerTimelines[compareService]) {
        const compareTimeline = careerTimelines[compareService];
        content += `
            <div class="timeline-progression" style="margin-top: 2rem; border-top: 2px solid var(--color-border); padding-top: 2rem;">
                <h3>${compareService} Career Progression</h3>
                ${compareTimeline.map(rank => `
                    <div class="timeline-rank">
                        <div class="timeline-rank-info">
                            <h4>${rank.rank}</h4>
                            <p><strong>Salary:</strong> ${rank.salary}</p>
                            <p><strong>Responsibilities:</strong> ${rank.responsibilities}</p>
                        </div>
                        <div class="timeline-rank-years">${rank.years} years</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    timelineDetails.innerHTML = content;
}

// Comparison Tool
function updateComparison() {
    const selectedServices = Array.from(serviceCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    if (selectedServices.length === 0) {
        comparisonTable.innerHTML = `
            <div class="comparison-placeholder">
                <h3>Select services above to compare</h3>
                <p>You can compare up to 4 services at once</p>
            </div>
        `;
        return;
    }
    
    if (selectedServices.length > 4) {
        // Uncheck the last selected if more than 4
        const lastChecked = Array.from(serviceCheckboxes).find(cb => cb.checked && selectedServices.includes(cb.value));
        if (lastChecked) lastChecked.checked = false;
        return;
    }
    
    const selectedData = servicesData.filter(service => selectedServices.includes(service.name));
    
    const table = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Service</th>
                    ${selectedData.map(service => `<th>${service.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Category</strong></td>
                    ${selectedData.map(service => `<td>${service.category}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Entry Age</strong></td>
                    ${selectedData.map(service => `<td>${service.entry_age}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Qualification</strong></td>
                    ${selectedData.map(service => `<td>${service.qualification}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Exam</strong></td>
                    ${selectedData.map(service => `<td>${service.exam}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Starting Salary</strong></td>
                    ${selectedData.map(service => `<td>${service.starting_salary}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Top Position</strong></td>
                    ${selectedData.map(service => `<td>${service.top_position}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Years to Top</strong></td>
                    ${selectedData.map(service => `<td>${service.years_to_top} years</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Job Security</strong></td>
                    ${selectedData.map(service => `<td>${service.job_security}</td>`).join('')}
                </tr>
                <tr>
                    <td><strong>Work-Life Balance</strong></td>
                    ${selectedData.map(service => `<td>${service.work_life_balance}</td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;
    
    comparisonTable.innerHTML = table;
}

// Calculator Functionality
function calculateRecommendations() {
    const age = parseInt(document.getElementById('currentAge').value);
    const qualification = document.getElementById('qualification').value;
    const preferredCategory = document.getElementById('preferredCategory').value;
    const workLifeBalance = document.getElementById('workLifeBalance').value;
    
    if (!age || !qualification) {
        alert('Please enter your age and qualification');
        return;
    }
    
    // Filter services based on eligibility
    let eligibleServices = servicesData.filter(service => {
        const [minAge, maxAge] = service.entry_age.split('-').map(a => parseFloat(a));
        const ageEligible = age >= minAge && age <= maxAge;
        const qualificationMatch = service.qualification === qualification || 
                                   (qualification === 'Masters' && ['Graduation', 'B.Tech', 'MBBS'].includes(service.qualification)) ||
                                   (qualification === 'B.Tech' && service.qualification === 'Graduation');
        
        return ageEligible && qualificationMatch;
    });
    
    // Apply preference filters
    if (preferredCategory) {
        eligibleServices = eligibleServices.filter(service => service.category === preferredCategory);
    }
    
    if (workLifeBalance) {
        eligibleServices = eligibleServices.filter(service => service.work_life_balance === workLifeBalance);
    }
    
    // Calculate match scores
    eligibleServices = eligibleServices.map(service => {
        let score = 70; // Base score
        
        // Age factor
        const [minAge, maxAge] = service.entry_age.split('-').map(a => parseFloat(a));
        const ageRange = maxAge - minAge;
        const agePosition = (age - minAge) / ageRange;
        if (agePosition < 0.5) score += 10; // Younger candidates have advantage
        
        // Qualification match
        if (service.qualification === qualification) score += 15;
        
        // Category preference
        if (preferredCategory && service.category === preferredCategory) score += 10;
        
        // Work-life balance preference
        if (workLifeBalance && service.work_life_balance === workLifeBalance) score += 10;
        
        // Job security bonus
        if (service.job_security === 'Very High') score += 5;
        
        return { ...service, matchScore: Math.min(score, 100) };
    });
    
    // Sort by match score
    eligibleServices.sort((a, b) => b.matchScore - a.matchScore);
    
    // Display results
    if (eligibleServices.length === 0) {
        calculatorResults.innerHTML = `
            <div class="recommendation-card">
                <h3>No Eligible Services Found</h3>
                <p>Based on your current age and qualification, there are no matching services. Consider:</p>
                <ul>
                    <li>Improving your qualification</li>
                    <li>Looking for alternative entry routes</li>
                    <li>Considering state-level services</li>
                </ul>
            </div>
        `;
        return;
    }
    
    const recommendationsHTML = eligibleServices.slice(0, 5).map(service => `
        <div class="recommendation-card">
            <h3>${service.name} <span class="match-score">${service.matchScore}% Match</span></h3>
            <div class="recommendation-details">
                <div><strong>Category:</strong> ${service.category}</div>
                <div><strong>Entry Age:</strong> ${service.entry_age}</div>
                <div><strong>Exam:</strong> ${service.exam}</div>
                <div><strong>Starting Salary:</strong> ${service.starting_salary}</div>
                <div><strong>Top Position:</strong> ${service.top_position}</div>
                <div><strong>Years to Top:</strong> ${service.years_to_top} years</div>
                <div><strong>Job Security:</strong> ${service.job_security}</div>
                <div><strong>Work-Life Balance:</strong> ${service.work_life_balance}</div>
            </div>
        </div>
    `).join('');
    
    calculatorResults.innerHTML = `
        <h3>Recommended Services for You</h3>
        ${recommendationsHTML}
    `;
}

// Event Listeners
if (serviceSelect) {
    serviceSelect.addEventListener('change', updateTimeline);
}

if (compareSelect) {
    compareSelect.addEventListener('change', updateTimeline);
}

serviceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateComparison);
});

if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateRecommendations);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize services grid if on services page
    if (document.getElementById('services').classList.contains('active')) {
        populateServicesGrid();
    }
    
    // Initialize timeline
    updateTimeline();
    
    // Initialize comparison
    updateComparison();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        html {
            scroll-behavior: smooth;
        }
    `;
    document.head.appendChild(style);
});

// Service card click handlers for home page
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Switch to services section
            document.querySelector('.nav__link[href="#services"]').click();
            
            // Set filter
            setTimeout(() => {
                const categoryFilter = document.getElementById('categoryFilter');
                if (categoryFilter) {
                    categoryFilter.value = category;
                    categoryFilter.dispatchEvent(new Event('change'));
                }
            }, 100);
        });
    });
});

// Add loading states for better UX
function showLoading(element) {
    element.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">Loading...</div>';
}

// Enhanced error handling
function handleError(error, element) {
    console.error('Error:', error);
    if (element) {
        element.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--color-error);">
                <h3>Something went wrong</h3>
                <p>Please try refreshing the page or contact support.</p>
            </div>
        `;
    }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav__menu');
    navMenu.classList.toggle('mobile-open');
}

// Add mobile menu styles
const mobileStyles = `
    @media (max-width: 768px) {
        .nav__menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-surface);
            flex-direction: column;
            padding: var(--space-16);
            border-top: 1px solid var(--color-border);
            transform: translateY(-100%);
            transition: transform var(--duration-normal) var(--ease-standard);
            z-index: 1000;
        }
        
        .nav__menu.mobile-open {
            transform: translateY(0);
        }
    }
`;

// Add mobile styles to document
const mobileStyleSheet = document.createElement('style');
mobileStyleSheet.textContent = mobileStyles;
document.head.appendChild(mobileStyleSheet);