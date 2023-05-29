//Set an module pattern for the gameboard
const gameboard = (() => {
    //Create an array that will hold the marks placed in the game board
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    //Create a square for each element of the array
    let container = document.querySelector('.game-board-container');
    board.forEach((element, index) => {
        let square = document.createElement('div');
        square.className = "square";
        square.setAttribute("data-number", index);
        square.style.border = 'solid 1px black';
        container.appendChild(square);
    });
    //Return the board
    return { board, container }
})();

//Create a factory function to create the player objects
const Player = (name, mark) => {
    return { name, mark };
};

const gamemode = () => {
    
    //Select the buttons from the DOM
    let PvP = document.querySelector('.PvP');
    let PvC = document.querySelector('.PvC');
    let playV1 = document.querySelector('.play-v1');
    let playV2 = document.querySelector('.play-v2')

    //Select the input fields
    let setPlayer1Name = document.getElementById('player-1-name');
    let setPlayer2Name = document.getElementById('player-2-name');
    let setOnlyPlayerName = document.getElementById('player-name');

    //Select screens
    let start = document.querySelector('.start-game');
    let twoPlayersScreen = document.querySelector('.player-vs-player');
    let onePlayerScreen = document.querySelector('.player-vs-computer');

    //Add an event listener for when sw want to play PvP
    PvP.addEventListener('click', () => {
        start.style.display = "none";
        twoPlayersScreen.style.display = "flex"
    })

    //Add an event listener for when sw want to play PvC
    PvC.addEventListener('click', () => {
        start.style.display = "none";
        onePlayerScreen.style.display = "flex"
    })

    //Start the game for PvP
    playV1.addEventListener('click', () => {
        twoPlayersScreen.style.display = "none";
    })

    //Start the game for PvC
    playV2.addEventListener('click', () => {
        onePlayerScreen.style.display = "none";
    })
}

const Player1 = Player('jeff', 'X');
const Player2 = Player('steve', 'O');

//Modular pattern to control the flow of the game
const gameflow = (() => {
    //Select all the squares 
    let squares = document.querySelectorAll('.square');

    gamemode();

    //Create a variable that will hold who's turn it tis to place a mark
    let turn = Player1.name;

    // Reset the board
    let resetBoard = () => {
        gameboard.board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        turn = Player1.name;
        squares.forEach((square) => {
            square.innerHTML = '';
        });
    };


    //Initiate variables that will hold the scores for players from the DOM
    const player1Score = document.querySelector('.player1-score');
    const player2Score = document.querySelector('.player2-score');

    //Create a function that will check if there is a winner or not
    const winner = () => {

        //Scores update
        const scoreUpdate = () => {
            if (gameboard.board[i] == Player1.mark) {
                player1Score.innerHTML = parseInt(player1Score.innerHTML) + 1;
                resetBoard();
            }
            else if (gameboard.board[i] == Player2.mark) {
                player2Score.innerHTML = parseInt(player2Score.innerHTML) + 1;
                resetBoard();
            }
        }

        //Check the 'board' array to see if we there is a winner
        for (i = 0; i <= 8; i++) {

            //Check for the mark in the array index 0
            if (i == 0 && gameboard.board[i] != ' ') {

                //For the horizontal line
                if (gameboard.board[i] == gameboard.board[i + 1] && gameboard.board[i] == gameboard.board[i + 2]) {
                    scoreUpdate()
                }

                //For vertical line
                else if (gameboard.board[i] == gameboard.board[i + 3] && gameboard.board[i] == gameboard.board[i + 6]) {
                    scoreUpdate()
                }

                //For diagonal line
                else if (gameboard.board[i] == gameboard.board[i + 4] && gameboard.board[i] == gameboard.board[i + 8]) {
                    scoreUpdate()
                }
            }

            //Check for board index 1
            else if (i == 1 && gameboard.board[i] != ' ') {

                //Check for vertical line
                if (gameboard.board[i] == gameboard.board[i + 3] && gameboard.board[i] == gameboard.board[i + 6]) {
                    scoreUpdate()
                }
            }

            //Check for board index 2
            else if (i == 2 && gameboard.board[i] != ' ') {

                //Check for diagonal line
                if (gameboard.board[i] == gameboard.board[i + 3] && gameboard.board[i] == gameboard.board[i + 6]) {
                    scoreUpdate()
                }

                //Check for vertical line
                else if (gameboard.board[i] == gameboard.board[i + 2] && gameboard.board[i] == gameboard.board[i + 4]) {
                    scoreUpdate()
                }
            }

            //Check for board index 3
            else if (i == 3 && gameboard.board[i] != ' ') {

                //Check for horizontal line
                if (gameboard.board[i] == gameboard.board[i + 1] && gameboard.board[i] == gameboard.board[i + 2]) {
                    scoreUpdate()
                }
            }

            //Check for board index 6
            else if (i == 6 && gameboard.board[i] != ' ') {

                //Check for horizontal line
                if (gameboard.board[i] == gameboard.board[i + 1] && gameboard.board[i] == gameboard.board[i + 2]) {
                    scoreUpdate()
                }
            }

            //If there is a tie
            else if (!gameboard.board.includes(' ')) {
                resetBoard();
            }
        }
    }


    //Create a function that will switch between the players turns
    const flow = (() => {

        //For each square and index of the square add an event listener
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {

                //If it's the Player1 turn place an X and update the array with the mark placed on the arrays index as same as the square data attribute
                if (turn == Player1.name && square.innerHTML == '') {
                    square.innerHTML = Player1.mark;
                    gameboard.board[index] = square.innerHTML
                    winner();
                    turn = Player2.name
                }

                //If it's the Player2 turn place an O and update the array with the mark placed on the arrays index as same as the square data attribute
                else if (turn == Player2.name && square.innerHTML == '') {
                    square.innerHTML = Player2.mark;
                    gameboard.board[index] = square.innerHTML
                    winner();
                    turn = Player1.name;
                };
            });
        });
    })()
})();

