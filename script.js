window.addEventListener('DOMContentLoaded', function () {

    for (let i = 0; i < 256; i++) {

        let div = document.createElement('div');
        div.className = 'cell'
        div.id = `${i}`
        document.getElementById('board').appendChild(div);     // Append <li> to <ul> with id="myList"
    }
    const board = document.getElementById('board');
    function paint(cell) {
        cell.classList.add('color');
    }


    board.addEventListener('mouseover', function(e) {
        if(/cell/.test(e.target.className)) {
            let cell = e.target;
            paint(cell);
        }
    }, false);
    const clear = document.getElementById('clear');
    clear.addEventListener('click', function () {
        Array.from(board.children).forEach(function (e) {
            e.classList.remove('color');
        })
        window.prompt('Insert quantity of cells in a row: 16 or 64')
    })


})