let textInput = document.getElementById("textInput");
let confirmButton = document.getElementById("confirmButton")
let outputParagraph = document.getElementById("output");

confirmButton.addEventListener("click", hiYourself)

function hiYourself()
{
    outputParagraph.textContent = `Hello , ${textInput.value}`;
}