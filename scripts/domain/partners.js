let firstPartner = document.querySelector('.first-partner');
let secondPartner = document.querySelector('.second-partner');
let thirdPartner = document.querySelector('.third-partner');
let fourthPartner = document.querySelector('.fourth-partner');
let fifthPartner = document.querySelector('.fifth-partner');
let sixthPartner = document.querySelector('.sixth-partner');
let seventhPartner = document.querySelector('.seventh-partner');
let eighthPartner = document.querySelector('.eighth-partner');

let partnerCounter = 0;


function partnerLine() {
    setInterval(function() {
        partnerCounter++;
        eighthPartner.appendChild(firstPartner.querySelector('img'));
        firstPartner.appendChild(secondPartner.querySelector('img'));
        secondPartner.appendChild(thirdPartner.querySelector('img'));
        thirdPartner.appendChild(fourthPartner.querySelector('img'));
        fourthPartner.appendChild(fifthPartner.querySelector('img'));
        fifthPartner.appendChild(sixthPartner.querySelector('img'));
        sixthPartner.appendChild(seventhPartner.querySelector('img'));
        seventhPartner.appendChild(eighthPartner.querySelector('img'));
    }, 5000)
}


partnerLine()

