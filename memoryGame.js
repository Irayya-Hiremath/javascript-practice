let  clrArr=['red','green'];
let guessClr=['red','green'];
let box=document.getElementsByClassName('round')
let ranClr=document.getElementById('ranClr')
ranClr.innerHTML="Guess The color"+ " "+ guessClr[Math.floor(Math.random()*2)]
let getColor=[]
let clickedBoxClr=[]

function random(){
for (let i=0;i<9;i++){
     box[i].style.backgroundColor=clrArr[Math.floor(Math.random()*2)];
    // console.log('hello')
    //  console.log(box[i])
    getColor.push(box[i].style.backgroundColor=clrArr[Math.floor(Math.random()*2)])
    //above push method is used to push the box colors to getColor variable
    console.log(getColor)
 }
}

function clrHide() {
    for (let i=0;i<9;i++){
     setTimeout(function(){(box[i].style.backgroundColor='')},3000);
  }
}


let rounds=document.querySelectorAll('.round')
console.log(rounds)
function clickBox(e){
//   console.log(e.target)
  let color=getColor[parseInt(e.target.innerHTML)]
//   console.log(color)
 clickedBoxClr.push(color)
 console.log(clickedBoxClr)
  e.target.classList.add(`${color}`)
}
for (var i = 0; i < rounds.length; i++){ 
   console.log(rounds[i])
rounds[i].addEventListener("click",(e)=>clickBox(e))
}
  // input.value=output.innerHTML

//   function clrMatch(){
//      if(ranClr.item===clickedBoxClr.item){
//         alert('u win')

//      }else{
//         alert('lost')
//      }
//   }

  
random()
clrHide()
function submit(){
   alert('hi')
 clrMatch()

}