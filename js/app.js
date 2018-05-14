
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

//SE CREA FUNCION QUE ALMACENA EL TITULO Y ARROJA UN NUEVO BOTON O LINK

var almacenarTitle = function(e){
    //console.log(e);
    e.preventDefault();
    var section = document.getElementById('espacio-trabajo');
    var valueInput=document.getElementById('input-first').value;
    var containerTitle=document.createElement('div');
    containerTitle.setAttribute('id','containerForTitle');
    containerTitle.setAttribute('class','formato-ContainerTitle');
    var title=document.createElement('p');
    var textTitle=document.createTextNode(valueInput);
    title.setAttribute('class','format-title');
    newLinkTarjeta=document.createElement('a');
    newLinkTarjeta.setAttribute('href','#')
    newLinkTarjeta.setAttribute('id','link-Añadir-Tarjeta');
    newLinkTarjeta.setAttribute('class','formato-newLink-tarjeta');
    newLinkTarjeta.textContent="Añadir una tarjeta...";
    title.appendChild(textTitle);
    containerTitle.appendChild(title);
    containerTitle.appendChild(newLinkTarjeta);
    section.appendChild(containerTitle);
    var containerEliminar=document.getElementById('form');
    section.removeChild(containerEliminar);

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
    container.setAttribute('id','form')
    inputForm.setAttribute('type','text');
    inputForm.setAttribute('class','formato-input');
    inputForm.setAttribute('placeholder','Añadir una Lista....');
    inputForm.setAttribute("id","input-first")
    buttonGuardar.setAttribute('class','formato-boton');
//buttonGuardar.setAttribute('type','click');
    newForm.appendChild(inputForm);
    newForm.appendChild(buttonGuardar);
    container.appendChild(newForm);
    section.appendChild(container);
    var newLinkEliminar=document.getElementById('link-crear-lista');
    section.removeChild(newLinkEliminar);
    buttonGuardar.addEventListener('click',almacenarTitle);
}
añadirLista(); //SE MANDA LLAMAR A LA FUNCION

