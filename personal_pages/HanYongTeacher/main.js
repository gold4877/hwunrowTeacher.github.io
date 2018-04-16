function init() {
	document.body.style.backgroundImage = "url(img/" + "background_0" + (Math.floor(Math.random() * 3) + 1) + ".jpg)";
	document.body.style.color = "#FFFFFF";
}

window.onload = init;
