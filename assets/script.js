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
const dot = document.querySelectorAll(".dot");

let bannerImg = document.querySelector(".banner-img");
bannerImgIndex = 0;

let tagLineSlide = document.querySelector("p");
let tagLineSlideIndex = 0

const dotSelected = document.querySelector(".dot_selected");
let dotSelectedIndex = 0

function updateCaroussel() {

	dots.innerHTML = ''

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dots.appendChild(dot);
		dot.className = ("dot");

		if (i == dotSelectedIndex) {
			dots.children[i].classList.add("dot_selected")
		}
	}
	bannerImg.src = slides[bannerImgIndex].image;
	tagLineSlide.innerHTML = `<p> ${slides[tagLineSlideIndex].tagLine} </p>`
}
updateCaroussel()



ArrowRight.addEventListener("click", () => {
	bannerImgIndex = bannerImgIndex < slides.length - 1 ? bannerImgIndex + 1 : 0;
	tagLineSlideIndex = tagLineSlideIndex < slides.length - 1 ? tagLineSlideIndex + 1 : 0;
	dotSelectedIndex = dotSelectedIndex < slides.length - 1 ? dotSelectedIndex + 1 : 0;
	updateCaroussel();
});

ArrowLeft.addEventListener("click", () => {
	bannerImgIndex = bannerImgIndex == 0 ? slides.length - 1 : bannerImgIndex - 1;
	tagLineSlideIndex = tagLineSlideIndex == 0 ? slides.length - 1 : tagLineSlideIndex - 1;
	dotSelectedIndex = dotSelectedIndex == 0 ? slides.length - 1 : dotSelectedIndex - 1;
	updateCaroussel();
});


