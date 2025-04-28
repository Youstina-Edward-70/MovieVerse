window.addEventListener("load", function () {
    const slider = document.getElementById("slider");
    const slides = slider.querySelectorAll("img");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    
function getSlideWidth() {
    return slides[0].getBoundingClientRect().width;
}


function updateSlider() {
    const slideWidth = getSlideWidth();
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add("active");
    }
}


window.nextSlide = function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
};


window.prevSlide = function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
};


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});


let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});


slider.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
    isDown = false;
});

slider.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});


updateSlider();
});

// movies show up
let movieItems = document.querySelectorAll(".movies .item");
movieItems.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transition = "all 0.5s ease-in-out";
    setTimeout(() => {
        el.style.opacity = 1;
    }, i * 300); // each element shows after the previous
});

// actress show up
let actress = document.querySelectorAll(".actress .pic");
actress.forEach((el, i) => {
    el.style
    el.style.opacity = 0;
    el.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
        el.style.opacity = 1;
    }, i * 300); // each element shows after the previous
});

// actress name
let pics = document.querySelectorAll(".actress .pic");

pics.forEach(pic => {
    pic.addEventListener("mouseenter", function () {
        let nameTag = document.createElement("span");
        nameTag.classList.add("actress-name");
        nameTag.textContent = this.dataset.name;
        this.parentElement.appendChild(nameTag);
        nameTag.style.position = "absolute";
        nameTag.style.color = "white";
        nameTag.style.background = "#000000a6";
        nameTag.style.padding = "5px 10px";
        nameTag.style.borderRadius = "10px";
        nameTag.style.opacity = "0";  
        nameTag.style.transform = "translateY(10px)"; 
        nameTag.style.top = this.offsetTop + this.offsetHeight + 15 + "px";
        nameTag.style.left = this.offsetLeft + (this.offsetWidth / 2) - (nameTag.offsetWidth / 2) + "px";

        this.nameTag = nameTag;

        setTimeout(() => {
            nameTag.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
            nameTag.style.opacity = "1";
            nameTag.style.transform = "translateY(0)"; 
        }, 10);
    });

    pic.addEventListener("mouseleave", function () {
        const nameTag = this.nameTag;
        if (nameTag) {
            nameTag.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
            nameTag.style.opacity = "0";
            nameTag.style.transform = "translateY(10px)";

            setTimeout(() => nameTag.remove(), 300);
        };
    });
});


// next button
document.querySelector(".next a").addEventListener("click", function (e) {
    e.preventDefault();
    this.innerHTML = "Loading <i class='fa-solid fa-spinner fa-spin'></i>";
    setTimeout(() => {
        window.location.href = this.getAttribute("href");
    }, 1000);
});


// scroll button
let scroll_btn = document.querySelector(".up");

window.onscroll = () => this.scrollY >= 800? scroll_btn.classList.add("show") : scroll_btn.classList.remove("show");

scroll_btn.onclick = () => window.scrollTo({top: 0, behavior: "smooth"});