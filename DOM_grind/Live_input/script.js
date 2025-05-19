let inputText= document.getElementById("inputText");
let liveP = document.getElementById("liveP");

inputText.addEventListener("input", inputTextLive);

if(inputText.value==0)
{
    liveP.textContent="Start writing.....";
}

function inputTextLive()
{   

    if(inputText.value=="")
    {
        liveP.textContent="Start writing.....";
    }
    else
    {
        liveP.textContent=inputText.value;
        
    }
    
    

}