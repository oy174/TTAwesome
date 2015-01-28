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

function showCurrentBoard()
{
	var currectBoard = board[0] + ' | ' + board[1] + ' | ' + board[2] + '\n'
					 + '- -+- -+- - \n'
					 + board[3] + ' | ' + board[4] + ' | ' + board[5] + '\n'
					 + '- -+- -+- - \n'
					 + board[6] + ' | ' + board[7] + ' | ' + board[8] + '\n';
	process.stdout.write(currentBoard);
}

function pc()
{
	process.stdin.on('readable', function() 
	{
		process.stdout.write("Chose the number area you wish to make your move");
		var UI = process.stdin.read();
		if (UI == '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9') 
		{
			UI = UI - 1;
			if(board[UI] == ' ')
			{
				board[UI] = X;
				process.exit();
				else process.stdout.write("That space is taken make another choice");
			}
			else process.stdout.write("Please enter only numerical values from 1 to 9");
		}
	}); 
	showCurrentBoard();
}
// NPC is dumb and will cycle through positions until an open one is found
function npcAI()
{
	for(var i = 0; i < 9; i += 1)
	{
		while(board[i] == ' ');
		{
			board[i] = O;
			showCurrentBoard();
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
			process.stdout.write("Winning play");
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
			process.stdout.write("You Lose");
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
		process.stdout.write("Tie!");
	}	
}

function game()
{	
	showCurrentBoard();
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
	process.stdout.write("Game Over!");
}
