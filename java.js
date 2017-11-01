var text = "HTML5";
var text1 = "CSS3";
var text2 = "Javascript";

var stext = text.split('');
var stext1 = text1.split('');
var stext2 = text2.split('');

var scrol = document.getElementById('scrol');
var loop;


function start() {
	if (stext.lenght > 0) {
		scrol.innerHTML += stext.shift();
		loop = setTimeout(start,200);
	}
}
start();