var currentWord = document.getElementById("currentWord");
currentWord.style.userSelect = "auto";
currentWord.style.pointerEvents = "auto";
var image = document.createElement("img");
image.src="https://i.postimg.cc/PrthC3LD/icon.png";
currentWord.after(image);