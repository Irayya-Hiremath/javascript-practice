let colorArray=['red','green'];
let box = document.getElementsByClassName("round");
let outputBoxclr=[];
let guessColor=['red','green'][Math.floor(Math.random()*2)]
let question=document.getElementById('ranClr').innerHTML ="Guess The color" +' '+ guessColor;

console.log(guessColor)
// random color will be applied for te box
function boxGetcolor(){
    for (let i=0; i<9; i++){
       box[i].style.backgroundColor = colorArray[Math.floor(Math.random()*2)];
        outputBoxclr.push(box[i].style.backgroundColor)
        console.log(outputBoxclr)
    }
}

//remove the color of box
function removeBcgcolor(){
    for (let i=0; i<9; i++){
    setTimeout(function(){ box[i].style.backgroundColor = '';}, 3000);
    }
    matchColor()

}

let rounds = document.querySelectorAll(".round");
let clickedBoxClr =[];

function clickedBoxes(e) {
    let color = outputBoxclr[parseInt(e.target.innerHTML)];
    e.target.style.backgroundColor = `${color}`

    clickedBoxClr.push(color);
    console.log(clickedBoxClr)
    

}

for(let i=0; i<rounds.length; i++) {
    rounds[i].addEventListener('click',clickedBoxes)
}


let y=[]
function matchColor(){
    outputBoxclr.map(x=> {
        if(x===guessColor){
           y.push(x) 
        }
    })
    console.log(y)
}

function hi(){
    let k=clickedBoxClr.every(g=> g===guessColor);
    console.log(clickedBoxClr.length)
    console.log(outputBoxclr.length)

    if(clickedBoxClr.length == y.length){
        if(k) {
            alert('win');
        }else {
            alert('you lost')
        }
    }else {
        alert('click more box')
    }
    

}
// function verify(){
//     for(let i=0; i<y.length; i++) {
//         y.includes(`${guessColor}`,i)

//     }
// }







boxGetcolor()
removeBcgcolor()
// getBoxclr()
// matchColor()

