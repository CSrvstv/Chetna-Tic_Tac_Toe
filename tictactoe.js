console.log("Welcome to Tic Tac Toe")

let turn = "X"
let end = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let gt = document.getElementsByClassName('gt');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((gt[e[0]].innerText === gt[e[1]].innerText) && (gt[e[2]].innerText === gt[e[1]].innerText) && (gt[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = gt[e[0]].innerText + " Won"
            end = true
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("g");
Array.from(boxes).forEach(element =>{
    let gt = element.querySelector('.gt');
    element.addEventListener('click', ()=>{
        if(gt.innerText === ''){
            gt.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!end){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.gt');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    end = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
})

