let notes = [];
class note
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.text = "Hello, world";
	}
}

function setup()
{
	createCanvas(windowWidth, windowHeight);
}

function draw()
{
	for(i = 0; i < notes.length; i++)
	{
		drawNote(notes[i])
	}
}

function drawNote(currentNote)
{
	rect(currentNote.x, currentNote.y, 100, 100);
	textAlign(CENTER, CENTER);
	textSize(16);
	text(currentNote.text, currentNote.x + 50, currentNote.y + 50);
}

/*
Check to see if the user has double clicked (if so, create new note at mouse position)
*/
function doubleClicked(event)
{
	x = event.x;
	y = event.y;

	console.log(x + " : " + y);

	notes.push(new note(x- 20, y - 20));
}

function typeText()
{
	
}

function windowReized()
{
	resizeCanvas(windowWidth, windowHeight);
}