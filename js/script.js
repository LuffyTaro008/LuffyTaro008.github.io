// DARK MODE TOGGLE
const toggle = document.getElementById("toggleTheme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// SCROLL REVEAL
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

elements.forEach(el => observer.observe(el));
