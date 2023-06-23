window.onload = choosePic;
var myPix = new Array("../img/wa.png", "../img/wo.png", "../img/n.png", );
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
