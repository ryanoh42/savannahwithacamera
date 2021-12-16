// BACK TO TOP BUTTON
const toTop = document.querySelector(".to-top");
//selects .to-top class
window.addEventListener("scroll", () => {
//event listener on window for any scrolling 
    if (window.scrollY > 300) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", () => {
    if (navList.classList.contains("mobile-nav-show")) {
        navList.classList.remove("mobile-nav-show")
    } else {
        navList.classList.add("mobile-nav-show")
    }
});


// SMOOTH SCROLL TO TOP ON CLICK
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToServices() {
    document.getElementById('services-section').scrollIntoView({behavior: 'smooth'});
    navList.classList.remove("mobile-nav-show")
}

function scrollToFeatured() {
    document.getElementById('featured-section').scrollIntoView({behavior: 'smooth'});
    navList.classList.remove("mobile-nav-show")
}

function scrollToAbout() {
    document.getElementById('about-section').scrollIntoView({behavior: 'smooth'});
    navList.classList.remove("mobile-nav-show")
}


const contactForm = document.querySelector('.form-modal');
// var scrollPosition = window.scrollY;

function showContactForm() {
    var scrollPosition = window.scrollY;
    if (contactForm.classList.contains("show-contact-form")) {
        contactForm.classList.remove("show-contact-form")
    } else {
        contactForm.style.top = scrollPosition + "px";
        console.log(scrollPosition);
        contactForm.classList.add("show-contact-form")
    }
}