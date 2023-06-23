window.onload = choosePic;
var myPix = new Array("../img/ya.png", "../img/yu.png", "../img/yo.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
