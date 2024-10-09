let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO
let count = 0;// draw match


const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];


 const resetgame = () => {
    turnO = true;
    count = 0;
    enableboxes();
    msgContainer.classList.add("hide");


 }

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        if(turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkwinner();

        if ( count === 9 && !checkwinner()) {
            gamedraw();
        }
           
               
    });
});

const gamedraw = ( ) => {
    msg.innerText = `game was a draw.`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const disableboxes = () => {
    for ( let box of boxes) {
        box.disabled = true;
       

    }
}

const enableboxes = () => {
    for ( let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}

const showwinner =  ( Winner) => {
    msg.innerText = ` Congratulation! Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}

const checkwinner = () => {
    for( let pattern of winpatterns) {
        let  pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
                return true;

            }
        }
    }
};

newGameBtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);