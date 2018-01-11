const IMAGE = document.querySelectorAll(".testi-item-group .testi-item");
const CAPTION = document.querySelectorAll(".caption-item-group .caption-item");
const DOT = document.querySelectorAll(".testi-dot-controls .dot");

function changeSlide(n){
	var left = n-1 < 0 ? 2 : n-1;
	var right = n+1 > 2 ? 0 : n+1;
	for (var i = 0; i < 3; i++) {
		IMAGE[i].classList.remove("testi-left");
		IMAGE[i].classList.remove("testi-right");
		IMAGE[i].classList.remove("testi-center");
		DOT[i].classList.remove("active");
		DOT[i].classList.remove("active");
		DOT[i].classList.remove("active");
		CAPTION[i].classList.remove("active-caption");
		CAPTION[i].classList.remove("active-caption");
		CAPTION[i].classList.remove("active-caption");
	}
	IMAGE[left].classList.add("testi-left");
	IMAGE[right].classList.add("testi-right");
	IMAGE[n].classList.add("testi-center");
	DOT[n].classList.add("active");
	CAPTION[n].classList.add("active-caption");
}