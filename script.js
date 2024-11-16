// Initialize EmailJS
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        message: message,
        to_email: 'christianboakye590@gmail.com'
    }).then(function(response) {
        alert('Your message has been sent!');
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
});

// Toggle registration form visibility
document.getElementById('register-button').addEventListener('click', function() {
    const form = document.getElementById('registration-form');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

// Handle program selection
document.querySelectorAll('.program-button').forEach(button => {
    button.addEventListener('click', function() {
        const program = this.getAttribute('data-program');
        sendRegistrationEmail(program);
        alert('Successfully registered for ' + program.replace(/-/g, ' '));
    });
});

function sendRegistrationEmail(program) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        program: program,
        to_email: 'christianboakye590@gmail.com'
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
}

// Add smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Back to Top button functionality
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
