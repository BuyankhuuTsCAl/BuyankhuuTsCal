// s1 outfit
let s1 = document.getElementById("s1")

/* the process: */

s1.onclick = function(){
	console.log("this is not working");
	document.getElementById("body").style.display = "none";
	hide();
	document.getElementById("o1").style.display = "block";

}
function hide(){
	let fits = document.getElementsByClassName("outfit");
	for(let i = 0; i<fits.length;i++){
		fits[i].style.display = "none";
	}
}

let s2 = document.getElementById("s2")

/* the process: */

s2.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide();
	document.getElementById("o2").style.display = "block";

}
let s3 = document.getElementById("s3")

s3.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide();
	document.getElementById("o3").style.display = "block";

}

let s4 = document.getElementById("s4")

s4.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide();
	document.getElementById("o4").style.display = "block";

}
let s5 = document.getElementById("s5")

s5.onclick = function() {
	document.getElementById("body").style.display = "none";
	hide();
	document.getElementById("o5").style.display = "block";

}

// strip outfit
let strip = document.getElementById("strip-button")
strip.onclick = function() {
	hide()
	document.getElementById("body").style.display = "block";
};