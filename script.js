const instruction=document.querySelector(".instruction");
const instructionButton=document.querySelector(".instruction-button");
instructionButton.addEventListener("click",()=>{
    instruction.classList.toggle("hidden")
})