let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const resetAll = () => {
    const resetItems = document.getElementsByClassName("boxtext");
    Array.from(resetItems).map((element) => {
        element.innerText = "";
    });
    const resetInfo = document.querySelector(".info");
    resetInfo.innerText = "Start new game";
    document.querySelector(".game-result").style.display = "none";
    document.querySelector(".main-game-box").style.pointerEvents = "auto";
    document.querySelector(".main-game-box").style.opacity = "1";
};
const findResult = () => {
    const boxtext = document.getElementsByClassName("boxtext");
    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    winner.map((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== "") {
            let infoText = document.querySelector(".info").innerText;
            infoText = ` Player ${boxtext[e[0]].innerText}    Won `;
            isGameOver = true;
            let resultText = document.querySelector(".result");
            resultText.innerHTML = infoText;
            document.querySelector(".game-result").style.display = "block";
            document.querySelector(".main-game-box").style.pointerEvents = "none";
            document.querySelector(".main-game-box").style.opacity = "0.2";
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).map((element) => {
    let text = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (text.innerText === "") {
            text.innerText = turn;
            turn = changeTurn();
            findResult();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
            }
        }
    });
});
