document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. SCRIPT DU BOUTON "RETOUR EN HAUT"
    // ==========================================
    const btnTop = document.getElementById("backToTop");
    
    if (btnTop) {
        // Fait apparaître le bouton après 300px de défilement
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                btnTop.classList.add("show");
            } else {
                btnTop.classList.remove("show");
            }
        });

        // Remonte doucement quand on clique
        btnTop.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Animation fluide
            });
        });
    }

    // ==========================================
    // 2. SCRIPT DU SOUS-MENU COLLANT (Club & Membres)
    // ==========================================
    const subnav = document.querySelector(".subnav");
    
    if (subnav) { 
        const sections = document.querySelectorAll("main section");
        const navLinks = document.querySelectorAll(".subnav-link");

        function updateMenu() {
            let current = "";
            const scrollPosition = window.scrollY + 150; 

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute("id");
                }
            });

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                current = sections[sections.length - 1].getAttribute("id");
            }

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (current && link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });

            if (!current && window.scrollY < 100) {
                navLinks[0].classList.add("active");
            }
        }

        window.addEventListener("scroll", updateMenu);
        updateMenu(); 
    }

});