const begPrompts = [
    "Are you sure?"
    ,"Why would you say that?"
    ,"C'mon"
    ,"Ni hao-dy, be my partner"
    ,"You won't regret it"
    ,":("
    ,"plsplsplsplspls"
    ,"ToT"
    ,"Wynaut"
    ,"I'll give you a kiss"
    ,"I'll give you a hug"
    ,"I'll give you a treat"
    ,"yyyyyyyyyyyyyyyyy"
]

const happyPrompts = [
    "I love you"
    ,"Yippeeee!"
    ,"pinch squish pull"
    ,"Wow, really?"
    ,"omgomgomgomg"
    ,"zowie wowie"
    ,"I can't wait!"
    ,"ur cute"
    ,"I luv u more"
    ,"gr8!"
    ,"ya ha ha"
]

const begGifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
    ,"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGphemhpaHpibHJ3M241dnZscjRzanQ1NDZzcDNjeTB6czJ0ZTI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fCU0Y5PDORhQzESAz9/giphy.gif"
    ,"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRncHZvY251cG9seTVtMHU5a2QybW1mMHJoYTBqaG15aHcxeWp3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25688FI5AUUVf04upZ/giphy.gif"
    ,"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3ZnZzZqaHJiMHpudTd0dWltMjNrdnZ0NzA2OXN2enExZW0xajdjZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/40a8kdO2zfYTEzBuMN/giphy.gif"
    ,"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjNqeTA2eDZzcmpseDFrdGM3Nzdkbzh3OGh2YmxrbjVlejlpZXNpNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1eVWPbGnJ0OkdGgoje/giphy.gif"
    ,"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGs0eXBsZHJsdDg3Y3BrNGR4cDVqczExYWM4dHpsdHVieW11ZTZoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/joJ7eo6Eg8xZseE2fS/giphy.gif"
    ,"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmMycTd6NDZqbHJucDZ1eHZhODFqMWtjaXFtYWhidzJqcHlocXl2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K6WIhJ07gwGkIAQfwN/giphy.gif"
    ,"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWdwaGV0bzk3YXN5Znpxd3VqdjRxOWx2bXNmYng1dHc5MjFmZ2ZlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKQyFvofV3umLtY2dk/giphy.gif"
]

const happyGifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXl2enpzMG1mcm40NHJvcGR1ZmdxcG0zYmc5YzljYng2bTR0amw0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5bdhq6YF0szPaCEk9Y/giphy.gif"
    ,"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjdoN3Rsbmp4eHZ4MnhqNnBqbGV4ZG9hN2VhcDF2MWQ2dGZ1YTl4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vYwHanb6y3HWBQIox/giphy.gif"
    ,"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGdvc3dtZXZlZWlmbmw2b2hkaXVqeHM3enhvMTJuZTRqbWxod2FzOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pTdcifPZLpDjL1e/giphy.gif"
    ,"https://media1.tenor.com/m/_hUq1BSUsiMAAAAC/cat-cute.gif"
]

let resizeCnt = 0;
const resizeLimit = 30;
let curPromptBeg = 0;
let curPromptHappy = 0;
let curGifBeg = 0;
let curGifHappy = 0;
let noCnt = 0;

function randomNumberGenerator(max, current) {
    let randInt = Math.floor(Math.random() * max);
    while (randInt === current) {
        randInt = Math.floor(Math.random() * max);
        console.log("reroll");
    }
    return randInt;
}

function noClicked() {
    updatePromptBeg();
    moveButton();
    if (resizeCnt <= resizeLimit) {
        resizeButtons();
        resizeCnt++;
    };
    noCnt++;
}

function yesClicked() {
    document.getElementById("screenMain").style.display = "none";
    document.getElementById("screenYes").style.display = "block";
    if (noCnt === 0) {
        document.getElementById("noText").style.display = "none";
    } else {
        document.getElementById("noCnt").innerHTML = noCnt;
    }
    createConfetti();
    setInterval(updatePromptHappy, 3 * 1000);
    // setInterval(updateGifHappy, 3 * 1000);
    // clearInterval(intervalBeg);
    document.body.addEventListener("click", createConfetti);
}

function updatePromptBeg(){
    document.getElementById("begPrompt").style.visibility = "visible";
    if (Math.floor(Math.random() * 1024) === 0) {
        document.getElementById("begPrompt").textContent = "u h8 me";
    } else {
        curPromptBeg = randomNumberGenerator(begPrompts.length, curPromptBeg);
        document.getElementById("begPrompt").textContent = begPrompts[curPromptBeg];
    }
}

function updatePromptHappy() {
    curPromptHappy = randomNumberGenerator(happyPrompts.length, curPromptHappy);
    document.getElementById("happyPrompt").textContent = happyPrompts[curPromptHappy];
}

function updateGifBeg() {
    curGifBeg = randomNumberGenerator(begGifs.length, curGifBeg)
    document.getElementById("begGif").src = begGifs[curGifBeg];
}

function updateGifHappy(){
    curGifHappy = randomNumberGenerator(happyGifs.length, curGifHappy)
    document.getElementById("happyGif").src = happyGifs[curGifHappy];
}

function moveButton() {
    let btnWidth = document.getElementById("noBtn").offsetWidth;
    let btnHeight = document.getElementById("noBtn").offsetHeight;
    var x = (Math.random() * (window.innerWidth - (btnWidth * 2)) + btnWidth);
    var y = (Math.random() * (window.innerHeight - (btnHeight * 2)) + btnHeight);
    document.getElementById("noBtn").style.left = `${x}px`;
    document.getElementById("noBtn").style.top = `${y}px`;
    document.getElementById("noBtn").style.position = "absolute";
}

function resizeButtons() {
    let noBtnStyle = window.getComputedStyle(document.getElementById("noBtn"));
    let yesBtnStyle = window.getComputedStyle(document.getElementById("yesBtn"));
    document.getElementById("noBtn").style.fontSize = `${noBtnStyle.getPropertyValue("font-size").slice(0, -2) - 2}px`;
    document.getElementById("yesBtn").style.fontSize = `${yesBtnStyle.getPropertyValue("font-size").slice(0, -2) - -2}px`;
    document.getElementById("noBtn").style.minWidth = "0px";
}

function createConfetti() {
    // Create a canvas element and get its context
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Define the emoji shape
    const emojiShape = confetti.shapeFromText({
      text: "\u{1F9E1}", // You can use any emoji here
      scalar: 3,
    });

    // Call the confetti function with the emoji shape and other options
    confetti({
      particleCount: 225, // You can change the number of confetti particles
      scalar: 3, // Make it a bit larger
      angle: 90, // You can change the angle of the confetti launch
      spread: 360, // You can change the spread of the confetti launch
      startVelocity: 25, // You can change the initial velocity of the confetti particles
      decay: 0.95, // You can change the decay rate of the confetti particles
      shapes: [emojiShape], // You can pass an array of shapes to use as confetti particles
      origin: { x: 0.5, y: 0.4 }, // You can change the origin of the confetti launch
      zIndex: -1, // You can change the z-index of the confetti canvas
    });
  }

document.getElementById("yesBtn").addEventListener("click", yesClicked);
document.getElementById("noBtn").addEventListener("click", noClicked);
document.getElementById("noBtn").addEventListener("mouseover", noClicked);

document.getElementById("begGif").addEventListener("click", updateGifBeg);
document.getElementById("happyGif").addEventListener("click", updateGifHappy);
// intervalBeg = setInterval(updateGifBeg, 5 * 1000);