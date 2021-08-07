// Create a reference for the canvas

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var keyPressHistory = [];

img_width = 400;
img_height = 100;

var img_image;

img_x = 110;
img_y = 200;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {
	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	keyPressedKeyCap = String.fromCharCode(keyPressed);
	console.log(keyPressedKeyCap);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		if(event.getModifierState('CapsLock')){
			alphabetKey(keyPressedKeyCap);
		} else {
			alphabetKey(keyPressedKeyCap.toString().toLowerCase());
		}
	}
	else {
		otherkey(keyPressedKeyCap);
	}
}

function alphabetKey(key) {
	console.log(key);
	document.getElementById("d1").innerHTML = "You have pressed the " + key + " key";
	img_image = "Alpkey.png";
	logKey(key);
	add();

}
function numberkey() {

}
function arrowkey() {

}
function specialkey() {

}
function otherkey(key) {
	img_image = "otherkey.png";
	if (key == " ") {
		console.log('Space bar');
		logKey(key);
		document.getElementById("d1").innerHTML = "You have pressed the [SPACE] key";
	} else{
		document.getElementById("d1").innerHTML = "You have pressed a misc key";
	}
	add();
}

function logKey(key) {
	keyPressHistory.push(key);
	var e = "";
	e += keyPressHistory.slice(Math.max(keyPressHistory.length - keyPressHistory.length, 0)).join("");
	document.getElementById('keebHistory').innerHTML = e;
}
