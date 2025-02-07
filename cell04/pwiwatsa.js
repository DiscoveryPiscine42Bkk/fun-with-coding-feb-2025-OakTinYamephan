document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navmenu ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    showTab(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navmenu ul li a");
    const navMenu = document.querySelector(".navmenu");
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = "&#9776;";

    document.querySelector("#header .container").appendChild(hamburger);

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            navMenu.classList.remove("active");
        });
    });
});


function showTab(index) {
    const tabs = document.querySelectorAll('.skills .tab');
    const contents = document.querySelectorAll('.skills .content');

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}