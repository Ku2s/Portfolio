document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio chargé avec succès.");

    // Exemple d'interaction : Smooth scroll pour les liens d'ancrage (déjà géré par CSS scroll-behavior en partie, mais JS peut aider pour la compatibilité)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 120, // Ajustement pour le header sticky
                    behavior: 'smooth'
                });
            }
        });
    });
});