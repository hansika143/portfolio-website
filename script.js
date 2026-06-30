// Modern Dark Mode Toggle
const darkBtn = document.getElementById("darkMode");
const body = document.body;

darkBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Change icon based on mode
    if(body.classList.contains("dark")){
        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth Fade Animation on Scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial state for animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-in-out";
});