let colorArray=['red','green'];
let box = document.getElementsByClassName("round");
let outputBoxclr=[];


// random color will be applied for te box
function boxGetcolor(){
    for (let i=0; i<9; i++){
       box[i].style.backgroundColor = colorArray[Math.floor(Math.random()*2)];
        outputBoxclr.push(box[i].style.backgroundColor)
    }
}

//remove the color of box
function removeBcgcolor(){
    for (let i=0; i<9; i++){
    setTimeout(function(){ box[i].style.backgroundColor = '';}, 3000);
    }
}

function getBoxclr(){
let allBox = document.querySelectorAll('.round');
for (let i=0; i<9; i++){
    allBox[i].style.backgroundColor=outputBoxclr[i]
}


}

boxGetcolor()
removeBcgcolor()
getBoxclr()

console.log(outputBoxclr)