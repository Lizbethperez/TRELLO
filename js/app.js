
/*SE CREA FUNCION AÑADIR LISTA*/

var añadirLista= function(event) {
var section = document.getElementById('espacio-trabajo');
newlink = document.createElement('a');
newlink.setAttribute('class', 'formato-crear-lista'); //Se le Agrega el Atributo clase para dar Formatos desde CSS
newlink.setAttribute('id', 'link-crear-lista');
newlink.textContent="Añadir una Lista...";
section.appendChild(newlink);
newlink.addEventListener('click',formPrincipal); //SE MANDA LLAMAR LA FUNCION FORMPRINCIPAL
}

/*SE CREA FUNCION PARA EL FORMULARIO PRINCIPAL CON EL BOTON DE GUARDAR*/
var formPrincipal= function(){
var section = document.getElementById('espacio-trabajo');
var container=document.createElement('div');
var newForm=document.createElement('form');
var inputForm=document.createElement('input');
var buttonGuardar=document.createElement('button');
buttonGuardar.textContent="GUARDAR";
container.setAttribute('class','formato-container');
inputForm.setAttribute('type','text');
inputForm.setAttribute('class','formato-input');
inputForm.setAttribute('placeholder','Añadir una Lista....');
buttonGuardar.setAttribute("class","formato-boton");
newForm.appendChild(inputForm);
newForm.appendChild(buttonGuardar);
container.appendChild(newForm);
section.appendChild(container);
var newLinkEliminar=document.getElementById('link-crear-lista');
section.removeChild(newLinkEliminar);
}
añadirLista();
