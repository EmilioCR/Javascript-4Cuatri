var imgArray = ['img/gorillaz1.jpg', 'img/gorillaz2.jpg', 'img/gorillaz3.jpg', 'img/gorillaz4.jpg', 'img/gorillaz5.jpg', 'img/gorillaz6.jpg', 'img/gorillaz7.jpg', 'img/gorillaz8.jpg' ,'img/gorillaz9.jpg' ,'img/gorillaz10.jpg'];
var imgShow = document.getElementById('imgShow');
var counter = document.getElementById('counter');
var back = document.getElementById('back');
var next = document.getElementById('next');
var img = document.createElement('img');
var n = 0;
var nextCounter = 1;

function Gallery (currentIndex) {
	this.currentIndex = imgArray[n];
};

Gallery.prototype = {
	constructor : Gallery,
	height: '900px',
	width: '900px',
	printImg : function () {
		Gallery();
		img.setAttribute('src', this.currentIndex);
		img.style.height = '500px';
		imgShow.appendChild(img);
		counter.innerHTML = nextCounter + '/10';
	},
}

var init = new Gallery(this.currentIndex);

next.addEventListener('click', function () {
	n++;
	nextCounter++;
	if (n === 10) {
		n = 0;
		nextCounter = 1;
	};
	img.removeAttribute('src');
	this.callFunc = new Gallery(this.currentIndex);
	this.callFunc.printImg();
	
});

back.addEventListener('click', function () {
	n--;
	nextCounter--;
	if(n === -1){
		n = 9;
		nextCounter = 10;
	};
	img.removeAttribute('src');
	this.callFunc = new Gallery(this.currentIndex);
	this.callFunc.printImg();
});

var body = document;

body.addEventListener('keydown', function (event) {
	var key = event.keyCode;
	if (key === 37) {
		n--;
		nextCounter--;
		if(n === -1){
			n = 9;
			nextCounter = 10;
		};
	}else if (key === 39) {
		n++;
		nextCounter++;
		if(n === 10){
			n = 0;
			nextCounter = 1;
		};
	};
	img.removeAttribute('src');
		this.callFunc = new Gallery(this.currentIndex);
		this.callFunc.printImg();
})

init.printImg()