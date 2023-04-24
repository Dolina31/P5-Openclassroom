const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const ArrowRight = document.querySelector(".arrow_right");
const ArrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots");
const dot = document.querySelector(".dot");
const dotSelected = document.querySelector(".dot_selected");

let bannerImg = document.querySelector(".banner-img");
bannerImgIndex = 0
dot.classList.add("dot-selected");

ArrowRight.addEventListener("click", () => {
	if (bannerImgIndex < slides.length - 1) {
		bannerImgIndex++
		bannerImg.src = slides[bannerImgIndex].image
	}
})
ArrowLeft.addEventListener("click", () => {
	if (bannerImgIndex < slides.length - 1) {
		bannerImgIndex--
		bannerImg.src = slides[bannerImgIndex].image
	}
})

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dots.appendChild(dot);
	dot.className = ("dot");
}
