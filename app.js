const gameboard = () => {
    let board = ['', '', '', '', '', '', '', '', '',];
    let container = document.querySelector('.game-board-container');
    board.forEach(element => {
        let square = document.createElement('div');
        square.style.border = 'solid 1px black'
        container.appendChild(square)
    })
}

gameboard()