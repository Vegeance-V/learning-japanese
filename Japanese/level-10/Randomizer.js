window.onload = choosePic;
var myPix = new Array("img/a.png", "img/i.png", "img/u.png", "img/e.png", "img/o.png", "img/ka.png", "img/ki.png", "img/ku.png", "img/ke.png", "img/ko.png", "img/sa.png", "img/shi.png", "img/su.png", "img/se.png", "img/so.png", "img/ta.png", "img/ti.png", "img/tsu.png", "img/te.png", "img/to.png", "img/na.png", "img/ni.png", "img/nu.png", "img/ne.png", "img/no.png", "img/ha.png", "img/hi.png", "img/fu.png", "img/he.png", "img/ho.png", "img/ma.png", "img/mi.png", "img/mu.png", "img/me.png", "img/mo.png", "img/ya.png", "img/yu.png", "img/yo.png", "img/ra.png", "img/ri.png", "img/ru.png", "img/re.png", "img/ro.png", "img/wa.png", "img/wo.png", "img/n.png", );
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
