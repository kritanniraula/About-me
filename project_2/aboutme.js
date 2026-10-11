document.addEventListener('DOMContentLoaded', () => {
    console.log('Personal Biography page loaded');

    // Handle navigation click events
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove 'active' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add 'active' class to the clicked link
            link.classList.add('active');
            // Hide all sections
            document.querySelectorAll('main section').forEach(section => {
                section.classList.remove('active');
            });
            // Show the target section
            const target = link.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Form submission with personalized alert
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you for reaching out, ${name}! I will get back to you soon.`);
        form.reset();
    });

    // Dark Mode Toggle
    const toggleDarkMode = document.getElementById('toggleDarkMode');
    toggleDarkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
