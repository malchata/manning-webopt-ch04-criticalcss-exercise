(function(){
	"use strict";

	// Document objects
	var navIcon = document.getElementById("navIcon");
	var nav = document.getElementsByClassName("nav")[0];
	var sectionToggles = document.querySelector(".expandable .sectionHeader");

	// Document events
	navIcon.addEventListener("click", function(){
		nav.classList.toggle("show");
	});

	// Accordion Toggles
	sectionToggles.addEventListener("click", function(){
		this.parentElement.classList.toggle("expanded");
	});
})();