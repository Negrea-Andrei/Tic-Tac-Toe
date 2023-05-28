const gameboard = (() => {
    let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    let container = document.querySelector('.game-board-container');
    board.forEach((element, index) => {
        let square = document.createElement('div');
        square.className = "square";
        square.setAttribute("data-number", index)
        square.style.border = 'solid 1px black'
        container.appendChild(square)
    })
    return {board}
})();

const Player = (name) => {
    return {name}
}

const gameflow =(() => {  
    let squares = document.querySelectorAll('.square');
    let turn = 0;
    squares.forEach((square, index) => { square.addEventListener('click', () => {        
        if(turn == 0 && square.innerHTML == '') {
            square.innerHTML = "X";
            gameboard.board[index] = square.innerHTML
            turn = 1
            console.log(gameboard.board)
        }
        else if (turn == 1 && square.innerHTML == '') {
            square.innerHTML = 'O';
            gameboard.board[index] = square.innerHTML
            turn = 0;
            console.log(gameboard.board)
        }       
        })        
    })
})();