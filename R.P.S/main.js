//Global Variables for image src
const scissorsSrc = 'file:///C:/Users/Assus/Desktop/rock-paper-scissors-master/images/icon-scissors.svg';
const paperSrc = 'file:///C:/Users/Assus/Desktop/rock-paper-scissors-master/images/icon-paper.svg';
const rockSrc = 'file:///C:/Users/Assus/Desktop/rock-paper-scissors-master/images/icon-rock.svg';
const lizardSrc = 'file:///C:/Users/Assus/Desktop/rock-paper-scissors-master/images/icon-lizard.svg';
const spockSrc = 'file:///C:/Users/Assus/Desktop/rock-paper-scissors-master/images/icon-spock.svg'; 


const rulesBtn = document.getElementById('rules');
const rulesSection = document.querySelector('.rules-section');
const crossBtn = document.getElementById('cross');
const darkBackground = document.getElementById('darker');

//Rules Btn

rulesBtn.addEventListener('click', () => {
    rulesSection.style.transform = 'translateX(-50%) scale(1)';
    darkBackground.style.display = 'block';
})

crossBtn.addEventListener('click', () => {
    rulesSection.style.transform = 'translateX(-50%) scale(0)';
    darkBackground.style.display = 'none';
})

//Add user option

const mainSection = document.querySelector('main');
const compareSection = document.querySelector('.comparing-section');
const addImgInSection = document.querySelector('.userPicked');
const userImg = document.querySelector('.userPicked-img');

const allTheOptions = document.getElementsByClassName('select');
for (let i = 0; i < allTheOptions.length; i++) {
    allTheOptions[i].addEventListener('click', addUserInput);
    allTheOptions[i].addEventListener('click', addCompInput);
    allTheOptions[i].addEventListener('click', addAnimations);
    allTheOptions[i].addEventListener('click', resultPreview);
    allTheOptions[i].addEventListener('click', emojiDisplay);
} 

function addUserInput(event) {
    userImg.src = event.currentTarget.children[0].src;
    switch(event.currentTarget.id) {
        case 'scissors': 
            userImg.id = 'scissors-img';
            addImgInSection.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(39, 89%, 46%)';
            addImgInSection.style.border = '0.8vw solid hsl(40, 84%, 58%)';
            break;
        case 'paper':
            userImg.id = 'paper-img';
            addImgInSection.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(230, 89%, 59%)';
            addImgInSection.style.border = '0.8vw solid hsl(230, 89%, 68%)';
            break;
        case 'rock':
            userImg.id = 'rock-img';
            addImgInSection.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(349, 71%, 49%)';
            addImgInSection.style.border = '0.8vw solid hsl(349, 70%, 60%)';
            break;
        case 'lizard':
            userImg.id = 'lizard-img';
            addImgInSection.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(261, 73%, 58%)';
            addImgInSection.style.border = '0.8vw solid hsl(261, 72%, 66%)';
            break;
        case 'spock':
            userImg.id = 'spock-img'
            addImgInSection.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(189, 58%, 50%)';
            addImgInSection.style.border = '0.8vw solid hsl(189, 58%, 70%)';
            break;
    }
}

// Adding Animations when user clicks

function addAnimations() {
    document.getElementById('scissors').style.animation = 'scissorsMove 1.3s ease-in-out  forwards';
    document.getElementById('rock').style.animation = 'rockLizardMove 1.3s ease-in-out 0.2s forwards';
    document.getElementById('paper').style.animation = 'paperSpockMove 1.3s ease-in-out 0.4s forwards';
    document.getElementById('lizard').style.animation = 'rockLizardMove 1.3s ease-in-out 0.6s forwards';
    document.getElementById('spock').style.animation = 'paperSpockMove 1.3s ease-in-out 0.8s forwards';
    document.getElementById('pentagon').style.animation = 'pentagonAnimation 1.3s ease-in-out 2s forwards';
    setTimeout(() => {
        compareSection.style.transform = 'rotateX(0deg) translateX(50%)';
        mainSection.style.display = 'none';
    }, 2800);
}

//Computer input

const compPicked = document.querySelector('.compPicked');
let compImg = document.querySelector('.compPicked-img');
const compStyle = document.querySelector('.compPicked');

function addCompInput() {
    const numberGenerate = Math.floor(Math.random() * 5);
    switch(numberGenerate) {
        case 0:
            compImg.src = './images/icon-scissors.svg';
            compImg.id = 'scissors-img'
            compStyle.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(39, 89%, 46%)';
            compStyle.style.border = '0.8vw solid hsl(40, 84%, 58%)';
            break;
        case 1:
            compImg.src = './images/icon-paper.svg';
            compImg.id = 'paper-img'
            compStyle.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(230, 89%, 59%)';
            compStyle.style.border = '0.8vw solid hsl(230, 89%, 68%)';
            break;
        case 2:
            compImg.src = './images/icon-rock.svg';
            compImg.id = 'rock-img';
            compStyle.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(349, 71%, 49%)';
            compStyle.style.border = '0.8vw solid hsl(349, 70%, 60%)';
            break;
        case 3:
            compImg.src = './images/icon-lizard.svg';
            compImg.id = 'lizard-img';
            compStyle.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(261, 73%, 58%)';
            compStyle.style.border = '0.8vw solid hsl(261, 72%, 66%)';
            break;
        case 4:
            compImg.src = './images/icon-spock.svg';
            compImg.id = 'spock-img'
            compStyle.style.boxShadow = 'inset 0 0.2vw rgb(204, 204, 204), 0 0.3vw hsl(189, 58%, 50%)';
            compStyle.style.border = '0.8vw solid hsl(189, 58%, 70%)';
            break;
    }
    if (userImg.id === compImg.id) {
        addCompInput();
    }
} 

// Result determination

function result(userSrc, compSrc) {
    if (userSrc === 'scissors-img') {
        if (compSrc === 'rock-img' || compSrc === 'spock-img') {
            return false;
        } else {
            return true;
        }
    } else if (userSrc === 'paper-img') {
        if (compSrc ===  'scissors-img' || compSrc === 'lizard-img') {
            return false;
        } else {
            return true;
        }
    } else if (userSrc === 'rock-img') {
        if (compSrc === 'paper-img' || compSrc === 'spock-img') {
            return false;
        } else {
            return true;
        }
    } else if (userSrc === 'lizard-img') {
        if (compSrc === 'rock-img' || compSrc === 'scissors-img') {
            return false;
        } else {
            return true;
        }
    } else {
        if (compSrc === 'lizard-img' || compSrc === 'paper-img') {
            return false;
        } else {
            return true;
        }
    }
}

// Result display won/lose and score

const resultDisplay = document.querySelector('.result-display');
const resetBtn = document.querySelector('.reset-btn');
const score = document.getElementById('score');
let scoreNumber = 0;
function resultPreview() {
    if (result(userImg.id, compImg.id) === true) {
        resultDisplay.innerHTML = 'You Won!';
        scoreNumber++;
    } else {
        resultDisplay.innerHTML = 'You Lose!';
        if (scoreNumber > 0) {
            scoreNumber--;
        }
    }
    setTimeout(() => {
        resultDisplay.style.transform = 'scale(1) translateX(50%)';
        resetBtn.style.transform = 'translateX(50%) scale(1)';
        score.innerHTML = scoreNumber;
    }, 3500);
}

// Display Emojis 
const emojiShow = document.querySelector('.emoji');
const thumbsDownSrc = './images/thumbs-down-removebg-preview.png';

function emojiDisplay() {
    setTimeout(() => {
        if (resultDisplay.innerHTML === 'You Won!') {
            emojiShow.style.animation = 'emojiShow 0.4s ease-in-out forwards';
        } else {
            emojiShow.src = thumbsDownSrc;
            emojiShow.style.animation = 'emojiShow 0.4s ease-in-out forwards';
        }
    }, 3600);
}


// Adding reset button 

resetBtn.addEventListener('click', resetDefault);

function resetDefault() {
    // main section animated comapare section closed
    compareSection.style.transform = 'rotateX(90deg) translateX(50%)';
    setTimeout(() => {
        mainSection.style.display = 'block';
        document.getElementById('scissors').style.animation = 'scissorsReverse 1s ease-in 0.5s reverse backwards';
        document.getElementById('rock').style.animation = 'rockLizardReverse 1s ease-in 1s 1 reverse backwards';
        document.getElementById('paper').style.animation = 'paperSpockReverse 1s ease-in 1.5s 1 reverse backwards';
        document.getElementById('lizard').style.animation = 'rockLizardReverse 1s ease-in 1s 1 reverse backwards';
        document.getElementById('spock').style.animation = 'paperSpockReverse 1s ease-in 1.5s 1 reverse backwards';
        document.getElementById('pentagon').style.animation = 'pentagonReverse 1s ease-in-out  reverse backwards';
        userImg.src = '';
        compImg.src = '';
        emojiShow.src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4c4.png';
    }, 500);

   // Emojis closed
   
   emojiShow.style.animation = 'emojiHide 0.4s ease-in-out reverse backwards';
   // Result Display And btn closed
   resultDisplay.innerHTML = '';
   resultDisplay.style.transform = 'scale(0) translateX(50%)';
   resetBtn.style.transform = 'translateX(50%) scale(0)';
}
