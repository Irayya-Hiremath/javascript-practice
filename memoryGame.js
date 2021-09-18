let colorArray = ["red", "green"];
let guessClr = ["red", "green"]; //question
let box = document.getElementsByClassName("round");
let ranClr = document.getElementById("ranClr");
let randomClrans = (ranClr.innerHTML = "Guess The color" + " " + guessClr[Math.floor(Math.random() * 2)]);

let getColor = [];
let clickedBoxClr = [];
let ansClr =[];

// console.log(getColor)
// console.log(clickedBoxClr)
// console.log(ansClr)





function random() {
  for (let i = 0; i < 9; i++) {
    box[i].style.backgroundColor = colorArray[Math.floor(Math.random() * 2)];
    getColor.push(box[i].style.backgroundColor)
    
  }
  
}
console.log(getColor.length)
function clrHide() {
  for (let i = 0; i < 9; i++) {
    setTimeout(function () {
      box[i].style.backgroundColor = "";
    }, 3000);
  }
}

let rounds = document.querySelectorAll(".round");
// console.log(rounds);
function clickBox(e) {
  let color = getColor[parseInt(e.target.innerHTML)];
  clickedBoxClr.push(color);
  console.log(color)
  e.target.style.backgroundColor = `${color}`

  // e.target.classList.add(`${color}`);

}

for (var i = 0; i < rounds.length; i++) {
  rounds[i].addEventListener("click", (e) => clickBox(e));
}



// function clrSeprate(getcolor){
//   return getColor==ansClr
//   newclr(getcolor.filter(clrSeprate));
//   console.log(newclr)
// }


// console.log(getColor)

// function guess() {
//   let col = "";
//   if (randomClrans === "red") {
//     col = "green";
//   } else {
//     col = "red";
//   }

//   let result = "";
//   result = clickedBoxClr.includes(col);

//   if (result) {
//     alert("wrong");
//   } else {
//     alert("correct");
//   }
// }
// clrSeprate();

//  let abc=document.querySelector('#abc')
//  let op=''
//   abc.addEventListener('click',function(){
//   op=getColor.filter((a)=>a==='red')
//   console.log(`filter op is ${op}`)
// })
//  console.log(abc)




// console.log(output)
console.log(getColor)

random();
clrHide();
clickBox(e);
