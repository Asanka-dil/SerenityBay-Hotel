const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if ( hour < 12) {
    greeting.textContent = "Good Morning!";
}
else if ( hour < 18) {
    greeting.textContent = "Good Afternoon!";
}
else {
    greeting.textContent = "Good Evening!";
}

const navbar = document.getElementById("navbar");

window.addEventListener("Scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.padding = "30px 40px 50px 30px";
    }
    else {
        navbar.style.backgroundColor = "#f2dfbd";
    }
})