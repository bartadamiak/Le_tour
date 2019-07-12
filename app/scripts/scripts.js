// agCookie.create('example-cookie', true, 1);

// var readValue = agCookie.read('example-cookie');

// console.log(readValue);

// agCookie.erase('example-cookie');

// function markoFunkcija(args) {
//     console.log(args);

//     return true;
// }
"use strict";
"use strict";
'use strict';

var firstPartner = document.querySelector('.first-partner');
var secondPartner = document.querySelector('.second-partner');
var thirdPartner = document.querySelector('.third-partner');
var fourthPartner = document.querySelector('.fourth-partner');
var fifthPartner = document.querySelector('.fifth-partner');
var sixthPartner = document.querySelector('.sixth-partner');
var seventhPartner = document.querySelector('.seventh-partner');
var eighthPartner = document.querySelector('.eighth-partner');

var partnerCounter = 0;

function partnerLine() {
    setInterval(function () {
        partnerCounter++;
        eighthPartner.appendChild(firstPartner.querySelector('img'));
        firstPartner.appendChild(secondPartner.querySelector('img'));
        secondPartner.appendChild(thirdPartner.querySelector('img'));
        thirdPartner.appendChild(fourthPartner.querySelector('img'));
        fourthPartner.appendChild(fifthPartner.querySelector('img'));
        fifthPartner.appendChild(sixthPartner.querySelector('img'));
        sixthPartner.appendChild(seventhPartner.querySelector('img'));
        seventhPartner.appendChild(eighthPartner.querySelector('img'));
    }, 5000);
}

partnerLine();
'use strict';

var leftArrow = document.querySelector('.left-arrow');

var bgPhotos = document.querySelector('.background-photos');

var rightArrow = document.querySelector('.right-arrow');

var titleText = document.querySelector('.title p');

var photos = ["url('../images/cross.jpg')", "url('../images/jumbo.jpg')", "url('../images/fieldjpg.jpg')"];

var title = ["Alpe d'heuz", "Jumbo wins in Brussel", "Stage for sprinters"];

var counter = 0;

function next() {
    counter++;
    if (counter > 2) {
        counter = 0;
    };
    if (counter == 0) {
        bgPhotos.style.background = photos[0];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[0];
    }
    if (counter == 1) {
        bgPhotos.style.background = photos[1];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[1];
    }
    if (counter == 2) {
        bgPhotos.style.background = photos[2];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[2];
    }
};

function previous() {
    counter--;
    if (counter < 0) {
        counter = 2;
    };
    if (counter == 0) {
        bgPhotos.style.background = photos[0];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[0];
    }
    if (counter == 1) {
        bgPhotos.style.background = photos[1];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[1];
    }
    if (counter == 2) {
        bgPhotos.style.background = photos[2];
        bgPhotos.style.backgroundSize = "cover";
        bgPhotos.style.backgroundPosition = "center";
        bgPhotos.style.backgroundRepeat = "no-repeat";
        titleText.innerText = title[2];
    }
}

function changeByTime() {
    setInterval(function () {
        next();
    }, 10000);
}

function clickArrow(clickRight, clickLeft) {
    clickRight.addEventListener('click', function (e) {
        e.preventDefault;
        next();
    });

    clickLeft.addEventListener('click', function (e) {
        e.preventDefault;
        previous();
    });
};

clickArrow(rightArrow, leftArrow);
changeByTime();