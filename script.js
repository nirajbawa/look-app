console.log("hello");

var emoji = document.querySelector("#gif");


var arr = ["emoji/img1.gif","emoji/img3.gif","emoji/img4.gif","emoji/img5.gif","emoji/img6.gif"];

var speech = ["you look like a cartoon. your soo funny.","You look like a monkey.","I'm thinking. Please try again.","You look so smart.","You look beautiful."];

var speechaudio = ["audio/audio1.mp3","audio/audio3.mp3","audio/audio4.mp3","audio/audio5.mp3","audio/audio6.mp3"];

function redemo(){

    var ren = Math.floor(Math.random() * 4)+1;


 var retn =  emoji.setAttribute("src", arr[ren]);

 document.getElementById("main").style.filter="drop-shadow(2px 2px 20px #33ffff)";


 document.getElementById("col").style.display="block";
document.getElementById("col").style.animation="open 1s ease-in-out 1 forwards";
document.getElementById("col").innerHTML= speech[ren];

var t = document.getElementById("audio").setAttribute("src", speechaudio[ren]);

var audio = document.getElementById("audio");

audio.play();

console.log(t);

}

