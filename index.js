function addingEventListener() 
{
    let input=document.getElementById('button')
    alert ("Button clicked!")
    input.addEventListener('click', addingEventListener);
}