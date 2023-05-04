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
];

const ArrowRight = document.querySelector(".arrow_right");
const ArrowLeft = document.querySelector(".arrow_left");

const bannerImg = document.querySelector(".banner-img");

const tagLineSlide = document.querySelector("p");

const dots = document.querySelector(".dots");

let slideIndex = 0;

function updateCaroussel() {

	dots.innerHTML = '';

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dots.appendChild(dot);
		dot.className = ("dot");

		if (i == slideIndex) {
			dots.children[i].classList.add("dot_selected");
		}

		dot.addEventListener("click", () => {
			slideIndex = i;
			updateCaroussel();
		});

		bannerImg.src = slides[slideIndex].image;
		tagLineSlide.innerHTML = `<p>${slides[slideIndex].tagLine}</p>`;
	}
}
updateCaroussel();


ArrowRight.addEventListener("click", () => {
	slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
	updateCaroussel();
});

ArrowLeft.addEventListener("click", () => {
	slideIndex = slideIndex == 0 ? slides.length - 1 : slideIndex - 1;
	updateCaroussel();
});