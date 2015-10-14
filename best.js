var popstars = [];

//image constructor (object)
function Person(name, src) {
	this.name = name;
	this.src = src;
	popstars.push(this);
	this.votes = 0;
};
//(instance that goes into the object)
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

//tracker should be an object....
// var tracker() = {}

//randomizer (this number is being returned inside the compareImg function)
var randImg = function() {
	return(Math.floor(Math.random() * popstars.length));
	console.log(randImg());
};

var boxLeft = document.getElementById('left');
var boxRight = document.getElementById('right');


//the rando number is being called within this function, this variable (randomPhoto1) is a number now
//telling the random number to go to to the randomphotox variable, which then becomes part of the arary
var randomPhoto1, randomPhoto2;

function compareImg () {
	do {
	randomPhoto1 = randImg();
	randomPhoto2 = randImg();

	boxLeft.src = popstars[randomPhoto1].src;
	boxRight.src = popstars[randomPhoto2].src;
}
while (randomPhoto1 === randomPhoto2);
}

//calling the function to compare the photos
compareImg();


//this is a callback function(the function then {} compareImg();)
boxLeft.addEventListener('click', function() {
	popstars[randomPhoto1].votes +=1;
	console.log(popstars[randomPhoto1].name + " has " + popstars[randomPhoto1].votes + " votes");
	compareImg();
});

boxRight.addEventListener('click',function() {
	popstars[randomPhoto2].votes +=1;
	console.log(popstars[randomPhoto2].name + " has " + popstars[randomPhoto2].votes + " votes");
	compareImg();
});

