/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};



// const elts = {
// 	text1: document.getElementById("text1"),
// 	text2: document.getElementById("text2")
// };

// The strings to morph between. You can change these to anything you want!
// const texts = [
// 	"Бид",
// 	"ямар",
// 	"үйлчилгээ",
// 	"үзүүлдэг",
// 	"вэ?",
// ];

// // Controls the speed of morphing.
// const morphTime = 1.4;
// const cooldownTime = 0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
// 	morph -= cooldown;
// 	cooldown = 0;
	
// 	let fraction = morph / morphTime;
	
// 	if (fraction > 1) {
// 		cooldown = cooldownTime;
// 		fraction = 1;
// 	}
	
// 	setMorph(fraction);
// }

// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
// 	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
// 	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	fraction = 1 - fraction;
// 	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
// 	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
// 	elts.text1.textContent = texts[textIndex % texts.length];
// 	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
// 	morph = 0;
	
// 	elts.text2.style.filter = "";
// 	elts.text2.style.opacity = "100%";
	
// 	elts.text1.style.filter = "";
// 	elts.text1.style.opacity = "0%";
// }


// function animate() {
// 	requestAnimationFrame(animate);
	
// 	let newTime = new Date();
// 	let shouldIncrementIndex = cooldown > 0;
// 	let dt = (newTime - time) / 1000;
// 	time = newTime;
	
// 	cooldown -= dt;
	
// 	if (cooldown <= 0) {
// 		if (shouldIncrementIndex) {
// 			textIndex++;
// 		}
		
// 		doMorph();
// 	} else {
// 		doCooldown();
// 	}
// }

// // Start the animation.
// animate();


function test(){
    for(let i = 0;i<5;i++){
        const medeelel = document.getElementsByClassName("query")[i];

        medeelel.addEventListener("click", () =>{
                document.getElementsByClassName("hiddenInfo")[i].classList.toggle("toggler123")
                console.log(i)
            })
    }
}

  

test()