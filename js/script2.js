document.addEventListener('DOMContentLoaded', () => {
    // Example function to handle form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
    });

    // Example function to toggle visibility of sections
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
