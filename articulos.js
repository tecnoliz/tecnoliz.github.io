 var div = document.getElementById('caja1')
 var display = 0;
 function mostrar(){ 
    if(display == 1)
    {
        div.style.display = 'block';
        display = 0;
    }
    else
    {
        div.style.display = 'block';
        display = 1;
    }
}
function ocultar(){
document.getElementById('caja1').style.display = 'none';
 }