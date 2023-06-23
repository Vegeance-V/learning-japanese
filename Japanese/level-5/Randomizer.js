window.onload = choosePic;
var myPix = new Array("../img/ha.png", "../img/hi.png", "../img/fu.png", "../img/he.png", "../img/ho.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
