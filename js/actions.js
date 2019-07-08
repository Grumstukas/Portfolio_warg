"use strict";
// general
window.addEventListener("scroll", headerScrollDetector);

// HEADER section
document.querySelector('#home > .row > nav').innerHTML = generateNavigation( navigationLinks );
document.getElementById('hamburger').addEventListener('click', hamburgerOpen);

// HERO section
document.getElementById('icons').innerHTML = generateIcons( Icons );

// ABOUT ME section

var playButton = document.querySelector('.row > .left > a > .fa-play');
console.log(playButton);
var closeButton = document.getElementById('close');
console.log(closeButton);

    playButton.addEventListener( 'click' , showWindow );
    closeButton.addEventListener( 'click' , hideWindow );
    window.addEventListener( 'click' , outsideClick );

// MY SERVICES section
document.getElementById('myServices').innerHTML = generateServices( servicesInfo );

// EDUCATION section
document.getElementById('myEducation').innerHTML = education_experience_Info( educationInfo );
window.addEventListener("scroll", educationAnimation);

// SKILLS section
document.getElementById('fill-bar').innerHTML = generateProgress( fillBarInfo );
window.addEventListener("scroll", fillBarAnimation);

// EXPERIENCE section
document.getElementById('myExperience').innerHTML = education_experience_Info( experienceInfo );

// STATISTICS section
document.getElementById('myStatistics').innerHTML = generateStatistics( statisticsInfo );
window.addEventListener("scroll", function(){
    for ( var i = 0; i < statisticsInfo.length; i++){
        numbers( statisticsInfo[i].icon, statisticsInfo[i].score );
    }
});

// MY PORTFOLIO section
document.getElementById('myWorks').innerHTML = generateMyWorks( myWorkInfo );

document.querySelectorAll('#portfolio > #myWorks > .filter > div').forEach( filter => {
    filter.addEventListener('click', filterPortfolio);
});

var portfolioLeftArrow = document.querySelector('#portfolio > #myWorks > .arrows > .fa-angle-double-left'),
    portfolioRightArrow = document.querySelector('#portfolio > #myWorks > .arrows > .fa-angle-double-right'),
    portfolioNumber = document.querySelectorAll('#portfolio > #myWorks > .arrows > div');

portfolioLeftArrow.addEventListener( 'click', function(){
    next_work(-1)
});
portfolioNumber.forEach( (number,index) => {
    number.addEventListener('click',function(){
        next_work(index+1)
    });
});
portfolioRightArrow.addEventListener( 'click', function(){
    next_work(1)
});

// document.getElementById('myScrollbar').innerHTML = generateMyScrollbarClasses( myWorkInfo );


// TESTIMONIALS section

document.getElementById('testimonials_list').innerHTML = generateTestimonials( testimonialsInfo );
var testimonialsLeftArrow = document.querySelector('#testimonials_list > .listing-buttons > .listing-btn-block > .fa-angle-left'),
    testimonialsRightArrow = document.querySelector('#testimonials_list > .listing-buttons > .listing-btn-block > .fa-angle-right');

testimonialsRightArrow.addEventListener( 'click', showNextTestimonial );
testimonialsLeftArrow.addEventListener( 'click', showPreviousTestimonial );

// MY BLOGS section
document.getElementById('blog-list').innerHTML = generateBlog( blog );

var social_icon_bubble =  document.querySelectorAll('#blog-list > .blog > .blog-meta > .socials');

// CONTACT ME section
document.getElementById('form').innerHTML = generateForm( contactForm );

// BOTTOM NAVIGATION section
document.getElementById('footer_icons').innerHTML = generateFooterIcons( footerIcons );
// FOOTER section

// SIDEBAR

var redColor = document.querySelectorAll('.light-red').forEach( redColor => { 
    redColor.addEventListener( 'click', changeColor );
});

var blueColor = document.querySelectorAll('.light-blue').forEach( blueColor => { 
    blueColor.addEventListener( 'click', changeColor1 );
});

var aquaColor = document.querySelectorAll('.light-green').forEach( aquaColor => { 
    aquaColor.addEventListener( 'click', changeColor2 );
});

var lightBackground = document.querySelector('.white-block');
var darkBackground = document.querySelector('.black-block');
console.log(lightBackground, darkBackground);

lightBackground.addEventListener( 'click', changeBackgroundLight );
darkBackground.addEventListener( 'click', changeBackgroundDark );

