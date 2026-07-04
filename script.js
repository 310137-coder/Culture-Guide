document.addEventListener('DOMContentLoaded', function() {
    
    // Dynamic single page application tab switcher configuration
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Terminate all active state styling indicators on the menu
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 2. Clear visibility on alternate page views
            tabContents.forEach(content => content.classList.remove('active'));

            // 3. Mount the targeted content section card container node
            const targetTab = this.getAttribute('data-tab');
            const targetSection = document.getElementById(targetTab);

            if(targetSection) {
                targetSection.classList.add('active');
                // Instantly align window to the peak for a smooth page swap flow
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

});
