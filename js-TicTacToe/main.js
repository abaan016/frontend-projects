
//  Variables

let boxes = document.querySelectorAll(".box");
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// New Game
const newGame = () => {
    resetGame();
}

// Reset Game
const resetGame = () => {
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
    })
    turn0 = true;
    enableBoxes();
}

// Game Loop
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            //player 0
            box.innerHTML = "O";
            turn0 = false;
        } else {
            //player X
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


// Check Winner
const checkWinner = () => {
    let draw = true;

    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();
                showWinner(pos1Val);
                draw = false;
            }
        } else {
            draw = false;
        }
    }

    if (draw) {
        Swal.fire(`Oops! Game Draw 😑`);
        for (let box of boxes) {
            box.disabled = false;
            box.innerHTML = "";
        }
    }
};


// Disable Boxes 
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
// Enable Boxes 
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

// Show Winner
const showWinner = (winner) => {
    Swal.fire(`Congratulations Player ${winner} is win the game 😎`);
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}


// Loader
let loader = document.querySelector(".container2");

window.addEventListener("load", function () {
    loader.style.display = "none";
});
