window.onload = choosePic;
var myPix = new Array("../img/ra.png", "../img/ri.png", "../img/ru.png", "../img/re.png", "../img/ro.png");
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
