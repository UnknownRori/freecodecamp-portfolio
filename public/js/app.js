$(document).ready(function(){
    PrintLetterbyLetter("Hi! I am UnknownRori", 300, "welcome-name");
    PrintLetterbyLetter("a Web Developer", 300, "welcome-job");
});

function PrintLetterbyLetter(string, time, id) {
    let i = 0;
    var interval = setInterval(function() {
        document.getElementById(id).innerHTML += string.charAt(i);
        i++;
        if (i > string.length) {
            clearInterval(interval);
        }
    }, time);
}