
let cBox=document.getElementById('clrs')
function clrChange(){
    let ran=Math.random();
    cBox.style.backgroundColor = "#" + ran.toFixed(6)*1000000;
    // alert(Math.floor(Math.random()*111111))
}
