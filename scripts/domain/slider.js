const leftArrow = document.querySelector('.left-arrow');

const bgPhotos = document.querySelector('.background-photos');

const rightArrow = document.querySelector('.right-arrow');

const titleText = document.querySelector('.title p');

const photos = ["url('../images/cross.jpg')", "url('../images/jumbo.jpg')", "url('../images/fieldjpg.jpg')"];

const title = ["Alepe d'heuz", "Jumbo wins in Brussel", "Stage for sprinters"];

let counter = 0;

function next() {
    counter++;
        if (counter > 2) {
            counter = 0
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
            counter = 2
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
    setInterval(function() {
        next();
    }, 10000)
}

function clickArrow(clickRight, clickLeft) {
    clickRight.addEventListener('click', function(e) {
        e.preventDefault;
        next();
        
    });
    
    clickLeft.addEventListener('click', function(e) {
        e.preventDefault;
        previous();
    })
};



clickArrow(rightArrow, leftArrow);
changeByTime();

