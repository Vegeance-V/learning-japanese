window.onload = choosePic;
var myPix = new Array("../img/ka.png", "../img/ki.png", "../img/ku.png", "../img/ke.png", "../img/ko.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
