let changeTextBtn = document.getElementById("changeTextBtn");
let pText = document.getElementById("text");

changeTextBtn.addEventListener('click', changeText);

function changeText()
{
    pText.textContent="You clicked the button!!!";
}