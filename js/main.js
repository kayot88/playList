;(function () {
	"use strict";
	var playList = [{
		author: "led zeppelin",
		song: "stairway to heaven",
		duration: "2:03"
	},
	{
		author: "queen",
		song: "bohemian rhapsody",
		duration: "2:30"
	},
	{
		author: "lynyrd skynyrd",
		song: "free bird",
		duration: "1:56"
	},
	{
		author: "deep purple",
		song: "smoke on the water",
		duration: "3:03"
	},
	{
		author: "jimi hendrix",
		song: "all along the watchtower",
		duration: "2:53"
	},
	{
		author: "AC/DC",
		song: "back in black",
		duration: "2:43"
	},
	{
		author: "queen",
		song: "we will rock you",
		duration: "2:13"			
	},
	{
		author: "metallica",
		song: "enter sandman",
		duration: "3:03"			
	}
	];
	console.table(playList);

	function changeListName () {
		var playlistName = prompt('Enter the name of PL', 'Rock&Roll');
		var title = document.body.getElementsByClassName('ba-playlist__title')[0].innerText = playlistName;
	}
	changeListName();





	playList.forEach(function addItem (track) {
		var list =  document.querySelector('.ba-playlist__list');
		var listItem = document.createElement('li');
		listItem.classList.add('ba-tune');

//svg
var img = document.createElementNS('http://www.w3.org/2000/svg','svg');
img.classList.add('ba-tune__like');
var boxWidth = 32;
var boxHeight = 32;
img.setAttributeNS (null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
img.insertAdjacentHTML('afterBegin', '<path d="M29.193 5.265c-3.629-3.596-9.432-3.671-13.191-0.288-3.76-3.383-9.561-3.308-13.192 0.288-3.741 3.704-3.741 9.709 0 13.415 1.069 1.059 11.053 10.941 11.053 10.941 1.183 1.172 3.096 1.172 4.278 0 0 0 10.932-10.822 11.053-10.941 3.742-3.706 3.742-9.711-0.001-13.415zM27.768 17.268l-11.053 10.941c-0.393 0.391-1.034 0.391-1.425 0l-11.053-10.941c-2.95-2.92-2.95-7.671 0-10.591 2.844-2.815 7.416-2.914 10.409-0.222l1.356 1.22 1.355-1.22c2.994-2.692 7.566-2.594 10.41 0.222 2.95 2.919 2.95 7.67 0.001 10.591zM9.253 7.501c0.277 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.001c-1.794 0-3.249 1.455-3.249 3.249v0.001c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v0c0-2.346 1.901-4.247 4.246-4.249 0.002 0 0.002-0.001 0.004-0.001z"></path>');	

//
var songDur = document.createElement('span');
songDur.classList.add('ba-tune__duration');
songDur.innerHTML = track.duration;

var songEr = document.createElement('span');
songEr.classList.add('ba-tune__author');
songEr.innerHTML = track.author;

var headEr = document.createElement('div');
headEr.classList.add('ba-tune__top');

var song = document.createElement('div');
song.classList.add('ba-tune__song');

list.appendChild(listItem);
listItem.appendChild(img);
listItem.appendChild(headEr);
listItem.appendChild(song);
headEr.appendChild(songDur);
headEr.appendChild(songEr);
song.innerHTML = track.song;
});	
})();

