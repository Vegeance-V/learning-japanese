window.onload = choosePic;
var myPix = new Array("../img/sa.png", "../img/shi.png", "../img/su.png", "../img/se.png", "../img/so.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
