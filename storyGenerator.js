
function generateStory()

{

var Noun = document.getElementById('noun').value;

var PastOne = document.getElementById('pastone').value;

var AdjOne = document.getElementById('adjone').value;

var PastTwo = document.getElementById('pasttwo').value;

var AdjTwo = document.getElementById('adjtwo').value;


if(Noun.length < 1)

Noun = "[missing text]";

if(PastOne.length < 1)

PastOne = "[missing text]";

if(AdjOne.length < 1)

AdjOne = "[missing text]";

if(PastTwo.length < 1)

PastTwo = "[missing text]";

if(AdjTwo.length < 1)

AdjTwo = "[missing text]";

document.getElementById('outputDiv').innerHTML =

'<p> It was dark and stormy night. A short rang out! A ' + Noun + ' slammed.'

+ ' The mid ' + PastOne + '. Suddenly a, ' + AdjOne + ' ship appeared on the horizon!'

+ ' While millions of people ' + PastTwo + ' , the king lived in luxury. Meanwhile, on a '

+ AdjTwo + ' farm in Kansas, a bag was growing up. </p><br><br>'

+ 'The End.';

}


function clearStory()

{

document.getElementById('noun').value = "";

document.getElementById('pastone').value = "";

document.getElementById('adjone').value = "";

document.getElementById('pasttwo').value = "";

document.getElementById('adjtwo').value = "";

document.getElementById('outputDiv').innerHTML = " "

}






