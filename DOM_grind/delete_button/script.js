let deleteButton= document.getElementById("deleteButton");
let body = document.querySelector("body");

deleteButton.addEventListener("click", deleteBut)

function deleteBut()
{
    deleteButton.remove();
    let newP = document.createElement('p');
    newP.textContent="RIP BUTTON";
    body.appendChild(newP);
    

}