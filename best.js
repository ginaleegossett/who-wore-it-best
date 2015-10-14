var popstars = [];

//image constructor (object)
function Person(hottie, filepath) {
	this.cuteyName = hottie;
	this.path = filepath;
	this.votes = 0;
	popstars.push(this);
};
//(object instances that go into an array 'popstars')
var andy = new Person('Andy Lee', 'img/Andy.jpeg');
var baeK = new Person('Baekyoung Song', 'img/Baekyoung.jpg');
var danny = new Person('Danny Lim', 'img/Danny.jpg');
var dongW = new Person('Dongwan Kim', 'img/Dongwan.jpg');
var eric = new Person('Eric Kim', 'img/Eric.jpg');
var heeJ = new Person('Heejun Moon', 'img/Heejun.jpg');
var hyeS = new Person('Hyesung Kim', 'img/Hyesung.jpg');
var jaeD = new Person('Jaeduc Kim', 'img/Jaeduc.jpeg');
var jaeW = new Person('Jaewon Lee', 'img/Jaewon.jpg');
var jiW = new Person('Jiwon Eun', 'img/Jiwon.jpg');
var jiY = new Person('Jiyong Koh', 'img/Jiyong.jpg');
var junJ = new Person('Junjin Park', 'img/Junjin.jpg');
var minW = new Person('Minwoo Lee', 'img/Minwoo.jpg');
var sungH = new Person('Sunghoon Kang', 'img/Sunghoon.jpeg');
var tony = new Person('Tony An', 'img/Tony.jpg');

// randomizer (this number is being returned inside the compareImg function)
var randImg = function() {
	return(Math.floor(Math.random() * popstars.length));
	//the console.log isn't showing up because the return statement kicks us out of the function. If we really want to see the console.log it needs to be put outside the function.
	//always makes notes for the console.log so you know what you're looking for
	//console.log("the output of randImg() is " + randImg());
};

var boxLeft = document.getElementById('left');
var boxRight = document.getElementById('right');

//the random number is being called within this function, this variable (randomPhoto1) is a number now
//telling the random number to go to to the randomphotox variable, which then becomes part of the array
var randomPhoto1, randomPhoto2;

function compareImg () {
	// do/while is not that common
	// we are going to "do" randomPhoto1 and randomPhoto2 and we are going to attach random numbers to the left/right boxes, "while" the numbers are not the same
	do {
		randomPhoto1 = randImg();
		randomPhoto2 = randImg();
	// this.src is referring to the HTML attribute, since it is not called in the html (only img is), would be better to change the .src after popstars[randomPhoto1/2] to .path
		boxLeft.src = popstars[randomPhoto1].path;
		boxRight.src = popstars[randomPhoto2].path;
	}
	while (randomPhoto1 === randomPhoto2);
}

//calling the function to compare the photos
compareImg();

//this is a callback function(the function then {} compareImg();), it allows multiple methods to be excuted inside this function
boxLeft.addEventListener('click', function() {
	popstars[randomPhoto1].votes += 1;
	console.log(popstars[randomPhoto1].cuteyName + " has " + popstars[randomPhoto1].votes + " votes");
	compareImg();
});

boxRight.addEventListener('click',function() {
	popstars[randomPhoto2].votes += 1;
	console.log(popstars[randomPhoto2].cuteyName + " has " + popstars[randomPhoto2].votes + " votes");
	compareImg();
});



