let music = new Audio('music.mp3')
let audioTurn = new Audio('ting.mp3')
let gameOver = new Audio('gameover.mp3')
let isGameOver = false;

let turn = 'X'

// function to change the turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check win 

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 2, 5, 0],
        [3, 4, 5, 2, 15, 0],
        [6, 7, 8, 2, 25, 0],
        [0, 3, 6, 5, 2, 90],
        [1, 4, 7, 15, 2, 90],
        [2, 5, 8, 25, 2, 90],
        [0, 4, 8, 5, 5, 45],
        [2, 4, 6, 25, 5, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Won';
            isGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px'
            document.querySelector('.line').style.width = '26vw'
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
            }
        }
    })
})

// Enable reset button 
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxText')
    Array.from(boxText).forEach(element => {
        element.innerText = '';
        isGameOver = false;
        turn = 'X';
        document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
        document.querySelector('.line').style.width = '0px'
    });
})