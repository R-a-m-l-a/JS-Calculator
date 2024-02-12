let butns=document.querySelectorAll(".btn");
let screen=document.querySelector(".screen");
screen.innerText="";
butns.forEach((elem)=>{
    elem.addEventListener("click",()=>{
        if(elem){
          screen.innerText=screen.innerText+elem.innerText;         
        }
    })
})
function clearDisplay(){
   screen.innerText='';
  }