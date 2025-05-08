// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                hamburger.classList.remove('active');
            }
        }
    });
});

// Form Validation and Submission
const donorForm = document.getElementById('donorForm');
const requestForm = document.getElementById('requestForm');

// Donor Form Submission
donorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        bloodGroup: document.getElementById('bloodGroup').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value
    };

    // Validate age
    if (formData.age < 18 || formData.age > 65) {
        alert('Age must be between 18 and 65 years');
        return;
    }

    // Validate phone number
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically send the data to a server
    console.log('Donor Registration Data:', formData);
    alert('Thank you for registering as a donor! We will contact you soon.');
    donorForm.reset();
});

// Request Form Submission
requestForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        patientName: document.getElementById('patientName').value,
        patientAge: document.getElementById('patientAge').value,
        bloodGroup: document.getElementById('requestBloodGroup').value,
        units: document.getElementById('units').value,
        hospital: document.getElementById('hospital').value,
        doctor: document.getElementById('doctor').value,
        contactPerson: document.getElementById('contactPerson').value,
        contactPhone: document.getElementById('contactPhone').value,
        urgency: document.getElementById('urgency').value,
        reason: document.getElementById('reason').value
    };

    // Validate phone number
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.contactPhone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // Validate units
    if (formData.units < 1) {
        alert('Please enter a valid number of units');
        return;
    }

    // Here you would typically send the data to a server
    console.log('Blood Request Data:', formData);
    alert('Your blood request has been submitted. We will process it immediately.');
    requestForm.reset();
});

// Active Navigation Link Highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form Input Validation
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.required && !this.value) {
            this.classList.add('error');
            this.nextElementSibling?.classList.add('error-message');
        } else {
            this.classList.remove('error');
            this.nextElementSibling?.classList.remove('error-message');
        }
    });
});

// Add CSS for error states
const style = document.createElement('style');
style.textContent = `
    .error {
        border-color: #f44336 !important;
    }
    .error-message {
        color: #f44336;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    }
`;
document.head.appendChild(style);