document.addEventListener("DOMContentLoaded", function(){

// console.log("IM in")

var liforhover = document.querySelector(".dropdown");
var submenu = document.querySelector("#submenu");

liforhover.addEventListener("mouseover", function(event){
	submenu.style.display = "block";
})

liforhover.addEventListener("mouseout", function(event) {
	submenu.style.display = "none";
})


var note = document.querySelectorAll(".note")

for (i=0; i<note.length; i++){
	note[i].addEventListener("mouseover", function(event) {
		this.style.opacity = "0";
	});
	note[i].addEventListener("mouseout", function(event) {
		this.style.opacity = "1";
	})
}


var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var pics = document.querySelectorAll(".pic li");
var num = 0;

console.log(pics.length);
pics[num].classList.add("visible");


next.addEventListener("click", function(event) {
	if(num<pics.length-1){
	pics[num].classList.remove("visible");
	num++;
	pics[num].classList.add("visible");
	}
})



prev.addEventListener("click", function(event) {
	if(num>0){
	pics[num].classList.remove("visible");
	num--;
	pics[num].classList.add("visible");
}
})


})