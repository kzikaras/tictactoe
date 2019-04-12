let cells = Array.from(document.querySelectorAll('td'));
let player = '1';

console.log(cells)

document.getElementById('player').innerText = ' ' + player;

cells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        if (player === '1') {
            if (this.style.backgroundColor !== 'orange') {
                this.style.backgroundColor = 'orange';
            } else {
                this.style.backgroundColor = 'white';
            }
        } else {
            if (this.style.backgroundColor !== 'blue') {
                this.style.backgroundColor = 'blue';
            } else {
                this.style.backgroundColor = 'white';
            }
        }
        winCheck(cells)
    });
});

document.getElementById('change-player').addEventListener('click', function () {
    if (player === '2') {
        player = '1';
    } else {
        player = '2';
    }
    document.getElementById('player').innerText = ' ' + player;
});

document.getElementById('restart-game').addEventListener('click', resetBoard);

function resetBoard() {
    cells.forEach(function (cell) {
        cell.style.backgroundColor = 'white';
    });
    player = '1';
    document.getElementById('player').innerText = ' ' + player;
}

function winCheck(cells) {
    if ([cells[0].style.backgroundColor,
    cells[1].style.backgroundColor,
    cells[2].style.backgroundColor]
        .every((val, i, arr) => val === arr[0])) {
        console.log('winner');
    }
}


