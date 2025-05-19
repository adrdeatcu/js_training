let btnClick = document.getElementById("createElement");
let mainDiv = document.getElementById("elemShowCase");


btnClick.addEventListener('click', addElement);

function getRandomColor()
{
    
    let finalColor = ["firstColor", "secondColor" , "thirdColor"];
    for(let i=0; i<3;i++)
    {
        let randomValue=Math.floor(Math.random() *255);
        finalColor[i] = randomValue;

    }
   return `rgb(${finalColor[0]}, ${finalColor[1]}, ${finalColor[2]})`;
    
    
    
}

function addElement()
{
    let div = document.createElement("div");
    div.classList.add("newElement");
    div.style.backgroundColor= getRandomColor();
    mainDiv.appendChild(div);

}

