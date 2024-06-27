let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno = true;
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turno = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => 
{

box.addEventListener("click", () =>{
  console.log("box was clicked");
  if(turno)
  {
    box.innerText = "O";
    turno = false;
  }
  else
  {
    box.innerText = "X";
    turno= true;
  }
  box.disabled = true;
  count++;

  let isWinner = checkWinner();

  if(count === 9 && !isWinner)
  {
    gameDraw();
  }
});
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disable = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () =>
  {
    for(let pattern of winPatterns)
      {
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
          if(pos1 == pos2 && pos2== pos3)
          {
            alert("You won!");
            console.log("Winner");
            disable()
            showWinner(pos1);
            return true;
          }
        }

        
      }
  };

resetButton.addEventListener("click", resetGame);