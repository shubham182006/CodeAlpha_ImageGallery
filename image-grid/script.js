const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.querySelector(".close");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentIndex = 0;

images.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentIndex = index;

        lightboxImage.src = image.src;

        lightbox.style.display = "flex";
    });

});

nextButton.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;

});

prevButton.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

});

closeButton.addEventListener("click", function () {

    lightbox.style.display = "none";

});
function filterImages(category) {

    const allImages = document.querySelectorAll(".gallery img");

    allImages.forEach(image => {

        if (category === "all") {
            image.style.display = "block";
        }
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        else {
            image.style.display = "none";
        }

    });
}