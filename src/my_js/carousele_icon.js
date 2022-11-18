'use strict';

function carouseleIcons(){

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const carouseleText = document.querySelectorAll('.carousele__text');
const parentContainer = document.getElementById('carousele__section--icons');

let icons = document.querySelectorAll('.carousele__icon');

function changeStyle(){

	//all actions for left button click 
	leftButton.addEventListener('click', changeStyleLeft);
	leftButton.addEventListener('click', disableButton);

	// all actions for right button click 
	rightButton.addEventListener('click',changeStyleRight);
	rightButton.addEventListener('click',disableButton);

	//remove element with specific class name
	function removeFarElement(removeElementClass){
		icons = document.querySelectorAll('.carousele__icon');
			for(let farElement of icons){
				// find element with specific class
				if(farElement.classList.contains(removeElementClass)){
					farElement.remove();
				}
			}
		}

// creating far-left & far-right elements
	function createFarRightFarLeft(parentElement){
		for(let x of icons){
			if(x.classList.contains('carousele__icon--left')){
				let createFarRightElement = x.cloneNode(false);
				createFarRightElement.classList.remove('carousele__icon--left');
				createFarRightElement.classList.add('carousele__icon--far-right');
				parentElement.appendChild(createFarRightElement);
			} else if(x.classList.contains('carousele__icon--right')){
				let createFarLeftElement = x.cloneNode(false);
				createFarLeftElement.classList.remove('carousele__icon--right');
				createFarLeftElement.classList.add('carousele__icon--far-left');
				parentElement.prepend(createFarLeftElement);
			}
		}
	}


	// main function left click
	function changeStyleLeft(){
		// removing farLeft Element if exsist to be replaced by new one
		removeFarElement('carousele__icon--far-left');
		// creating active icon on far-right position
		copyIconActiveForLeft(parentContainer);
			for(let x of icons){
				if(x.classList.contains('carousele__icon--active')){
					x.classList.remove('carousele__icon--active');
					x.classList.add('carousele__icon--left');
				}  else if (x.classList.contains('carousele__icon--left')) {
					x.classList.remove('carousele__icon--left');
					x.classList.add('carousele__icon--far-left');
				} else if (x.classList.contains('carousele__icon--right')) {
					x.classList.remove('carousele__icon--right');
					x.classList.add('carousele__icon--active');
				}else if(x.classList.contains('carousele__icon--far-right')){
					x.classList.remove('carousele__icon--far-right');
					x.classList.add('carousele__icon--right');
				}
			}
		/* change active text element depending on active class
		and index */
		displayName();
	}
	

	// creating new element on far right position
	function copyIconActiveForLeft(parentElement){
		for(let active of icons){
			if(active.classList.contains('carousele__icon--active')){
				let activeCopy = active.cloneNode(false);
				activeCopy.classList.remove('carousele__icon--active');
				activeCopy.classList.add('carousele__icon--far-right');
				parentElement.appendChild(activeCopy);
			}
		}
	}

	// main function right click
	function changeStyleRight(){
			// removing far right Element if exsist to be replaced by new one
			removeFarElement('carousele__icon--far-right');
			// creating active icon on far left position
			copyIconActiveForRight(parentContainer);
			for(let x of icons){
				if(x.classList.contains('carousele__icon--active')){
					x.classList.remove('carousele__icon--active');
					x.classList.add('carousele__icon--right');
				} else if (x.classList.contains('carousele__icon--right')) {
					x.classList.remove('carousele__icon--right');
					x.classList.add('carousele__icon--far-right');
				} else if (x.classList.contains('carousele__icon--left')) {
					x.classList.remove('carousele__icon--left');
					x.classList.add('carousele__icon--active');
				} else if (x.classList.contains('carousele__icon--far-left')) {
					x.classList.remove('carousele__icon--far-left');
					x.classList.add('carousele__icon--left');
				}
			}
			displayName();
		}
		// creating new element on far Left position
		function copyIconActiveForRight(parentElement){
			for(let active of icons){
				if(active.classList.contains('carousele__icon--active')){
					let activeCopy = active.cloneNode(false);
					activeCopy.classList.remove('carousele__icon--active');
					activeCopy.classList.add('carousele__icon--far-left');
					parentElement.prepend(activeCopy);
				}
			}
		}

	createFarRightFarLeft(parentContainer);
}


/*change the text class to be highlighted, by comparing 
	 data-index of text and img
	 data-text-index="1" will represent data-icon-index="1"
	 
*/

function displayName(){
	for(let iconElement of icons){
		if(iconElement.classList.contains('carousele__icon--active')){
			for(let textElement of carouseleText){
					textElement.classList.remove('carousele__text--active');
					textElement.classList.add('carousele__text--inactive');
				if(iconElement.dataset.iconIndex == textElement.dataset.textIndex){
					textElement.classList.add('carousele__text--active');
					}
				}
			}
		}
	} 

/*Disable button after click for animation to end*/
function disableButton(){
	this.style.pointerEvents = 'none';
	setTimeout(() => this.style.pointerEvents = 'all', 750);
	}



	displayName();
	changeStyle();
}

carouseleIcons();