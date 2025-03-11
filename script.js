const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevButton = document.getElementById("prevImage");
const nextButton = document.getElementById("nextImage");
let currentImageIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImage.src = thumbnail.src;
        currentImageIndex = index;
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

prevButton.addEventListener('click', ()=>{
    currentImageIndex = (currentImageIndex -1 + thumbnails.length) % thumbnails.length;
    lightboxImage.src = thumbnails[currentImageIndex].src;
})

nextButton.addEventListener('click', ()=>{
    currentImageIndex = (currentImageIndex +1 ) % thumbnails.length;
    lightboxImage.src = thumbnails[currentImageIndex].src;
})

window.addEventListener('click',(e)=>{
    if (e.target === lightbox){
        lightbox.classList.remove('show');
    }
})