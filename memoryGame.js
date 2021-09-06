let  clrArr=['red','blue','green'];
let box=document.getElementsByClassName('round')
let getColor=[]

function random(){
for (let i=0;i<6;i++){
     box[i].style.backgroundColor= clrArr[Math.floor(Math.random()*3)];
    // console.log('hello')
    //  console.log(box[i])
 }
}

function clrHide() {
    for (let i=0;i<6;i++){
     setTimeout(function(){(box[i].style.backgroundColor='')},3000);
  }
}

random()
clrHide()