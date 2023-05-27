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
    let number = 0;
    squares.forEach((square, index) => { square.addEventListener('click', () => {        
        if(number == 0 && square.innerHTML == '') {
            square.innerHTML = "X";
            number = 1
        }
        else if (number == 1 && square.innerHTML == '') {
            square.innerHTML = 'O';
            number = 0;
        }       
        })        
    })
})();