const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/*const slides = ["./assets/images/slideshow/slide1.jpg","./assets/images/slideshow/slide2.jpg","./assets/images/slideshow/slide3.jpg","./assets/images/slideshow/slide4.png"]*/
/*let numero = 0;

function changeslide(sens) {
	numero = numero + sens;
	if (numero > 3)
		numero = 0;
	if (numero < 0)
		numero = 3;
	alert("Suivant");
	document.getElementById("slide").src= "./assets/images/slideshow/" + slides[numero];
}*/

/* Fleche*/
var count = 0;
var imgTag = document.querySelector(".banner-img");



function avant(){
	alert("Avant");
	count--;
    if(count < 0){
        count = slides.length -1;
        imgTag.src = slides[count];
    }else{
        imgTag.src = slides[count];
    }
}



function apres(){
	alert("Après")
	count++;
    if(count >= slides.length){
        count = 0;
        imgTag.src = slides[count];
    }else{
        imgTag.src = slides[count];
    }
}

/* dots*/

const createdots = document.querySelector(".dots");



function init(){
createdots();
}

