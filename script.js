window.addEventListener('DOMContentLoaded', function () {
    const fragment = document.createDocumentFragment();
    const board = document.getElementById('board');
    const clear = document.getElementById('clear');
    const newPad = document.getElementById('newPad');
    const newMode = document.getElementById('newMode');
    let state = 'black';
    createPad(40);

    function createPad(cellsRowQuantity) {
        setSide = Number(cellsRowQuantity);
        if (setSide == 0 || isNaN(setSide) || setSide > 62) {
            return console.log('wrong');
        } else {
            console.log(setSide);
            Array.from(board.children).forEach(function (e) {
                e.remove();
            });
            const side = setSide;
            const allCells = Math.pow(side, 2);
            const cellSide = 80 / side;
            for (let i = 0; i < allCells; i++) {

                let div = document.createElement('div');
                div.style.width = `${cellSide}vw`;
                div.style.height = `${cellSide}vw`;
                div.className = 'cell';
                div.id = `${i}`;
                fragment.appendChild(div);
            }
            document.getElementById('board').appendChild(fragment);
        }
    }


    function paint(cell) {
        const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
        const color = {
            blackState: 'black',
            rainbowState: randomHsl()
        }
        state === 'black' ? cell.style.backgroundColor = color.blackState : cell.style.backgroundColor = color.rainbowState;

    }

    function changeMode() {
        if (state === 'black') {
            state = 'rainbow';
            newMode.innerHTML = 'black mode';
        } else {
            state = 'black';
            newMode.innerHTML = 'rainbow mode';

        }
    }

    board.addEventListener('mouseover', function (e) {
        if (/cell/.test(e.target.className)) {
            let cell = e.target;
            paint(cell);
        }
    }, false);
    clear.addEventListener('click', function () {
        Array.from(board.children).forEach(function (e) {
            e.classList.remove('color');
            e.style.backgroundColor = 'white';
        })
    })
    newPad.addEventListener('click', function () {
        const newPadSide = window.prompt('Insert quantity of cells in a row (from 1 to 62)', '40');
        createPad(newPadSide);
    })
    newMode.addEventListener('click', function () {
        changeMode();
    })


})