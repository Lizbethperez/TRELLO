
/*SE CREA FUNCION AÑADIR LISTA*/
var section = document.getElementById('espacio-trabajo');
var añadirLista= function(event) {
    newlink = document.createElement('a');
    newlink.setAttribute('class', 'formato-crear-lista'); //Se le Agrega el Atributo clase para dar Formatos desde CSS
    newlink.setAttribute('id', 'link-crear-lista');
    newlink.setAttribute('href','#')
    newlink.textContent="Añadir una Lista...";
    section.appendChild(newlink);
    newlink.addEventListener('click',formPrincipal); //SE MANDA LLAMAR LA FUNCION FORMPRINCIPAL
};

//SE CREA FUNCION QUE ALMACENA EL TITULO Y ARROJA UN NUEVO BOTON O LINK

var almacenarTitle = function(e){
    e.preventDefault();
    var valueInput=document.getElementById('input-first').value;
    var containerTitle=document.createElement('div');
    containerTitle.setAttribute('id','containerForTitle');
    containerTitle.setAttribute('class','formato-ContainerTitle');
    var title=document.createElement('p');
    var textTitle=document.createTextNode(valueInput);
    title.setAttribute('class','format-title');
    title.setAttribute('id','title')
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
    newLinkTarjeta.addEventListener('click',formTextArea);

};

/*SE CREA FUNCION PARA EL FORMULARIO PRINCIPAL CON EL BOTON DE GUARDAR*/
var formPrincipal= function(){
    var container=document.createElement('div');
    container.setAttribute('id','form')
    container.setAttribute('class','formato-container');
    var newForm=document.createElement('form');
    var inputForm=document.createElement('input');
    inputForm.setAttribute('type','text');
    inputForm.setAttribute('id','input-first');
    inputForm.setAttribute('class','formato-input');
    inputForm.setAttribute('placeholder','Añadir una Lista....');
    var buttonGuardar=document.createElement('button');
    buttonGuardar.textContent="GUARDAR";
    buttonGuardar.setAttribute('class','formato-boton');
    var buttonClose=document.createElement('button');
    buttonClose.setAttribute('id','button-close');
    buttonClose.setAttribute('class','format-button-close');
    buttonClose.innerHTML="&times";
    newForm.appendChild(inputForm);
    newForm.appendChild(buttonGuardar);
    newForm.appendChild(buttonClose);
    container.appendChild(newForm);
    section.appendChild(container);
    var newLinkEliminar=document.getElementById('link-crear-lista');
    section.removeChild(newLinkEliminar);
    var focusInput=document.getElementById('input-first');
    focusInput.focus();
    buttonGuardar.addEventListener('click',almacenarTitle);
    buttonClose.addEventListener('click', cancelForm);
    
};

// SE CREA LA FUNCION CON EL TEXT AREA Y EL BOTON AÑADIR

var formTextArea = function(){
    var sendTitle = document.getElementById('title');
    var containerNewTextArea=document.createElement('div');
    containerNewTextArea.setAttribute('id','containerNewTextArea')
    containerNewTextArea.setAttribute('class','formato-newContainer-textArea')
    var container= document.getElementById('containerForTitle');
    var newFormTextArea= document.createElement('form');
    newFormTextArea.setAttribute('id','formTextArea');
    newFormTextArea.setAttribute('class','format-form-textarea');
    var textArea= document.createElement('textarea');
    textArea.setAttribute('id','formTextArea2');
    textArea.setAttribute('class','format-textarea');
    textArea.setAttribute('rows','5');
    textArea.setAttribute('cols','34');
    var buttonAñadir=document.createElement('button');
    buttonAñadir.setAttribute('id','buttonañadir');
    buttonAñadir.setAttribute('class','formato-boton boton-añadir');
    buttonAñadir.textContent="Añadir";
    newFormTextArea.appendChild(textArea);
    newFormTextArea.appendChild(buttonAñadir);
    containerNewTextArea.appendChild(sendTitle);
    containerNewTextArea.appendChild(newFormTextArea);
    section.appendChild(containerNewTextArea);
    var eliminarAñadirTarjeta=document.getElementById('link-Añadir-Tarjeta');
    section.removeChild(container);
    var focusTextArea=document.getElementById('formTextArea2');
    focusTextArea.focus();
    buttonAñadir.addEventListener('click',newPlaceTextArea);
};

//SE CREA LA FUNCION PARA PODER COLOCAR EL CONTENIDO DEL TEXT AREA DEBAJO DEL TITULO DE LA LISTA
var newPlaceTextArea=function(){
    var positionTitle=document.getElementById('title');
    var valueTextArea=document.getElementById('formTextArea2').value;
    var containerForFinishForm=document.createElement('div');
    containerForFinishForm.setAttribute('id','containerFinishForm')
    containerForFinishForm.setAttribute('class','format-containerForFinishForm');
    var parrafoTextArea=document.createElement('textarea'); //este mostrara todo el texto que se coloque en el text area
    parrafoTextArea.setAttribute('id','parrafoNewAr');
    parrafoTextArea.setAttribute('class','formatParrafo');
    parrafoTextArea.setAttribute('rows','5');
    parrafoTextArea.setAttribute('cols','34');
    var infoTextArea=document.createTextNode(valueTextArea);
    //containerNewTextArea.appendChild(positionTitle);
    parrafoTextArea.appendChild(infoTextArea);
    containerForFinishForm.appendChild(title);
    containerForFinishForm.appendChild(parrafoTextArea);
    section.appendChild(containerForFinishForm);
    var removecontainerNewTextArea=document.getElementById('containerNewTextArea');
    section.removeChild(removecontainerNewTextArea);

}

añadirLista(); //SE MANDA LLAMAR A LA FUNCION

//SE CREA LA FUNCION PARA ELIMINAR EL FORMULARIO AL MOMENTO DE CLICKEAR LA X 

var cancelForm=function(){
    var removeContainer=document.getElementById('form');
    section.removeChild(removeContainer);
    añadirLista(); //Se manda a llamar la funcion añadir lista para que esta aparezca una vez que se alla dado en la X de cerrar y se haya eliminado el formulario
}