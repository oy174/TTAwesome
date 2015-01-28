/*
   0 | 1 | 2
  - -+- -+- -
   3 | 4 | 5
  - -+- -+- -
   6 | 7 | 8
   the figure is represented in an array like this
			  0,   1,   2,   3,   4,   5,   6,   7,   8 */
var board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

// Creates X and O in variables
var X = 'X', O = 'O';
function pc()
{
	$(".ttt").click(function()
	{	
		var UI = $(this).id();
		if(board[UI] == ' ')
		{
			board[UI] = X;
			$(this).text("X");
		}
		else alert("That space is taken make another choice");
	}); 
}
	
// NPC is dumb and will cycle through positions until an open one is found
function npcAI()
{
	for(var i = 0; i < 9; i += 1)
	{
		while(board[i] == ' ');
		{
			board[i] = O;
			document.body.table.i.innerHTML = O;
			return;
		}
	}
}

function winCheck()
{		//vertical win check
	if( board[0] == board[3] == board[6] == 'X' || 
		board[1] == board[4] == board[7] == 'X' ||
		board[2] == board[5] == board[8] == 'X' ||
		//horizontal win check
		board[0] == board[1] == board[2] == 'X' || 
		board[3] == board[4] == board[5] == 'X' ||
		board[0] == board[1] == board[2] == 'X' ||
		// diagonal win check
		board[0] == board[4] == board[8] == 'X' ||
		board[2] == board[4] == board[6] == 'X' )
		{
			alert("You win");
		}
}		

function loseCheck()
{		//vertical lose check
	if( board[0] == board[3] == board[6] == 'O' || 
		board[1] == board[4] == board[7] == 'O' ||
		board[2] == board[5] == board[8] == 'O' ||
		//horizontal lose check
		board[0] == board[1] == board[2] == 'O' || 
		board[3] == board[4] == board[5] == 'O' ||
		board[0] == board[1] == board[2] == 'O' ||
		// diagonal lose check
		board[0] == board[4] == board[8] == 'O' ||
		board[2] == board[4] == board[6] == 'O')
		{
			alert("You Lose");
		}
}

function tieCheck()
{
	for(var n = 0; n < 9; n += 1)
	{
		if(board[n] == ' ');
		{
			break;
		}
		alert("Tie!");
	}	
}

function game()
{	
	for(var p = 0; p < 9; p += 1)
	{
		pc();
		npcAI();
		winCheck();
		loseCheck();
		tieCheck();
		if(winCheck() == true 
		{
			break;
		}
	}
	alert("Game Over!");
}
