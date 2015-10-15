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

//creating a new variable to pull info to push into the chart.js, create an array called labels, then assign the labels to a dataset, which each label gets matched to a counterpart in the data (popstars[].votes)
var data = {
	labels: ["Andy", "Baekyoung", "Danny", "Dongwan", "Eric", "Heejun", "Hyesung", "Jaeduc", "Jaewon", "Jiwon", "Jiyong", "Junjin", "Minwoo", "Sunghoon", "Tony"],
	datasets: [
		{
			label: "Andy",
			fillColor: "#1D8CB7",
			strokeColor: "#156584",
			highlightFill: "#363535",
			highlightStroke: "#363535",
			data: [popstars[0].votes, popstars[1].votes, popstars[2].votes, popstars[3].votes, popstars[4].votes, popstars[5].votes, popstars[6].votes, popstars[7].votes, popstars[8].votes, popstars[9].votes, popstars[10].votes,popstars[11].votes, popstars[12].votes, popstars[13].votes, popstars[14].votes]
		}
	]
};

//making a function that the methods holding the barchart getelement and the creating a chart type(barChart)
function mkChart() {

	var barChart = document.getElementById('hairstyle').getContext('2d');
	var hairChart = new Chart(barChart).Bar(data);
};

mkChart();

//this is a callback function(the function then {} compareImg();), it allows multiple methods to be excuted inside this function
boxLeft.addEventListener('click', function() {
	popstars[randomPhoto1].votes += 1;
	data.datasets[0].data[randomPhoto1] += 1;
	// console.log(popstars[randomPhoto1].cuteyName + " has " + popstars[randomPhoto1].votes + " votes");
	compareImg();
	mkChart();
	createLocal();
	checkLocal();
});

boxRight.addEventListener('click',function() {
	popstars[randomPhoto2].votes += 1;
	data.datasets[0].data[randomPhoto2] += 1;
	// console.log(popstars[randomPhoto2].cuteyName + " has " + popstars[randomPhoto2].votes + " votes");
	compareImg();
	mkChart();
	createLocal();
	checkLocal();
});
//In var data, dataset is an array with a single object.  In each event listener we add a "data.datasets[0].data[randomPhotox]" underthe vote talley we say datasets[0] b/c there is only a single object.

//Moved the two methods below from inside the eventlistener to global, because it needs to be called when the page is being refreshed???? (ASK SCOTT WHY)
	checkLocal();
	mkChart();

//creating the local storage
function createLocal () {
	//this is pulling the vote data from our data variable we used for the chart
	var dataStore = JSON.stringify(data.datasets[0].data);
		//the for loop will then go through the datasets.data array to get the votes out
		//this will check to see if data.datasets.data[i].vote !=0 (does not equal 0), if !0(not 0) the array will save to local storage
	for (var i = 0; i < data.datasets[0].data.length; i++) {
		if (data.datasets[0].data[i].vote !== 0) {
			localStorage.setItem('voteData', dataStore);
		}
	};
}

function checkLocal() {
	if (localStorage.getItem('voteData')) {
		var getStore = localStorage.getItem('voteData');
		getStore = JSON.parse(getStore);
		data.datasets[0].data = getStore;
	};
}