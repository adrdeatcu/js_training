let toggleButton = document.getElementById("toggleButton");
let body = document.querySelector("body");

toggleButton.addEventListener('click' , toggleBackground);

function toggleBackground()
{
    if(body.style.backgroundColor=="gray")
    {
        body.style.backgroundColor="white"
    }else{
        body.style.backgroundColor="gray";
    }
    

}