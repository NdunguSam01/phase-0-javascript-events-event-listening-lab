let input=document.getElementById('button')

function addingEventListener() 
{
    input.addEventListener('click', addingEventListener);
    alert ("Button clicked!")
}