const navLinks = document.querySelectorAll('.nav-links li');
const burger = document.querySelector('.burger-icon');
const burgerBars = document.querySelectorAll('.burger-icon div');
const nav = document.querySelector('.nav-links');
const centerLogo = document.querySelector('.user-box img');
const helloUnderLogo = document.querySelector('.hello-text');
const randomtext = document.querySelector('.random-text');

function removeRandomText(){
	randomtext.style.opacity = "0";
}

function animateRandomText(){
	randomtext.style.transform = "translateX(110px)";
	randomtext.style.opacity = "0.7";
	setTimeout(removeRandomText,3500);
}


function animateHello(){
	helloUnderLogo.style.transform = "translateX(157px)";
	helloUnderLogo.style.opacity = "1";
	setTimeout(animateRandomText,2500);
}

function animateLogo(){
	centerLogo.style.transform = "translateY(-120px)";

	setTimeout(animateHello,1000);

	
}

window.onload = function(){
	setTimeout(animateLogo,2000);
}




const navSlide = () => {
	burger.addEventListener('click', ()=>{
		nav.classList.toggle('nav-active'); //when the burger icon is clicked it will turn it into the nav-active class
	
			//animateLinks
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.4}s`;
			}
			//by diving by 7, we give a nice even animation for each ul item
		});

		burger.classList.toggle('toggle');


	});//end burger eventlistener animation
}//end navSlide function

navSlide();
const topNav = document.querySelector('.top-nav');
const logo = document.querySelector('.logo');
const navLinksText = document.querySelectorAll('.nav-links li a');



var lessThan768 = window.matchMedia("(max-width: 768px)");
var greaterThan768 = window.matchMedia("(min-width: 768px)");
function detector(x){
	if((greaterThan768.matches) && (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)){ //if big viewport and user scrolled down
		topNav.classList.add("top-nav-modified");
		logo.style.color = "black";
		for(var i = 0; i < burgerBars.length; i++){
			burgerBars[i].style.backgroundColor = "black";//turns burger icons black
		}

		for(var i = 0; i< navLinksText.length; i++){//this will make all the items in the LI turn black
			navLinksText[i].style.color = "black";
		}
	}else if((greaterThan768.matches) && (document.body.scrollTop <= 10 || document.documentElement.scrollTop <= 10)){//if big viewport and user scrolled all the way up
		topNav.classList.remove("top-nav-modified");
    	logo.style.color = "#F4F4F4"
    	for(var i = 0; i< navLinksText.length; i++){
			navLinksText[i].style.color = "#F4F4F4";
		}
		for(var i = 0; i < burgerBars.length; i++){
			burgerBars[i].style.backgroundColor = "black";
		}
	}else if(lessThan768.matches){
		logo.style.color = "black";
		for(var i = 0; i < burgerBars.length; i++){
			burgerBars[i].style.backgroundColor = "black";
		}
		for(var i = 0; i< navLinksText.length; i++){//this will make all the items in the LI turn black
			navLinksText[i].style.color = "black";
		}
	}
}
window.addEventListener('scroll', detector);
window.addEventListener('resize', detector);








