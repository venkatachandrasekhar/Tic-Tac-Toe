let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");


let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes =  ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
};

const enableBoxes =  ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{

        if(turnO == true)
        {
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    })
});
const gameDraw = ()=>{
    message.innerText = "Awwwww this is a draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (p1)=>{
    message.innerText = `Hurray ${p1} is the winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let p of winPatterns)
    {

        let p1 = boxes[p[0]].innerText;
        let p2 = boxes[p[1]].innerText;
        let p3 = boxes[p[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != "")
        {
            if(p1 === p2 && p2 === p3)
            {
                console.log("Winner is " + p1);
                showWinner(p1);
            }
        }
    }
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);