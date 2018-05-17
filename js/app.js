
/*SE CREA FUNCION AÑADIR LISTA*/

var section = document.getElementById('espacio-trabajo');

var añadirLista= function(event) {
    newlink = document.createElement('a');// se crea la etiqueta a desde js
    newlink.setAttribute('class', 'formato-crear-lista'); //Se le Agrega el Atributos  al link para dar Formatos desde CSS
    newlink.setAttribute('id', 'link-crear-lista');
    newlink.setAttribute('href','#')
    newlink.textContent="Añadir una Lista..."; // se agrega el texto que dira el link 
    section.appendChild(newlink);// se coloca el link creado en la seccion principal 
    newlink.addEventListener('click',formPrincipal); //SE MANDA LLAMAR LA FUNCION FORMPRINCIPAL
};

//SE CREA FUNCION PARA GENERAR EL CONTENEDOR DE AÑADIR NUEVA TARJETA

var almacenarTitle = function(e){
    e.preventDefault();
    var valueInput=document.getElementById('input-first').value;//se rescata el valor ingresado en el input 
    var containerTitle=document.createElement('div');// se crea elemento 
    containerTitle.setAttribute('id','containerForTitle');// se agregan atributos 
    containerTitle.setAttribute('class','formato-ContainerTitle');
    var title=document.createElement('p');
    var textTitle=document.createTextNode(valueInput);//se indica que el valor rescatado es un nodo de texto
    title.setAttribute('class','format-title');
    title.setAttribute('id','title')
    newLinkTarjeta=document.createElement('a');//se crean elemento a  con todos sus atributos.
    newLinkTarjeta.setAttribute('href','#')
    newLinkTarjeta.setAttribute('id','link-Añadir-Tarjeta');
    newLinkTarjeta.setAttribute('class','formato-newLink-tarjeta');
    newLinkTarjeta.textContent="Añadir una tarjeta...";
    title.appendChild(textTitle);//se van asignando los hijos a sus respectivos padres 
    containerTitle.appendChild(title);
    containerTitle.appendChild(newLinkTarjeta);
    section.appendChild(containerTitle);
    var containerEliminar=document.getElementById('form');
    section.removeChild(containerEliminar);
    newLinkTarjeta.addEventListener('click',formTextArea);//se utiliza un evento para al dar click mandar traer el nuevo formulario que tiene que llenarse
    containerTitle.style.float='left';
};//CIERRA LA FUNCION PARA AÑADIR NUEVA TARJETA 

/*SE CREA FUNCION PARA EL FORMULARIO PRINCIPAL CON EL BOTON DE GUARDAR*/
var formPrincipal= function(){
    var container=document.createElement('div');//se crean elemento div con sus atributos
    container.setAttribute('id','form')
    container.setAttribute('class','formato-container');
    var newForm=document.createElement('form');
    var inputForm=document.createElement('input');//se crea elemento input con sus atributos 
    inputForm.setAttribute('type','text');
    inputForm.setAttribute('id','input-first');
    inputForm.setAttribute('class','formato-input');
    inputForm.setAttribute('placeholder','Añadir una Lista....');
    var buttonGuardar=document.createElement('button');// se crea el boton guardar con sus atributos
    buttonGuardar.textContent="GUARDAR";
    buttonGuardar.setAttribute('class','formato-boton');
    var buttonClose=document.createElement('button');// se crea el boton cerrar 
    buttonClose.setAttribute('id','button-close');
    buttonClose.setAttribute('class','format-button-close');
    buttonClose.innerHTML="&times";// se asigna el innerHtml para que aparezca la X y el html sepa ejecutar el &times
    newForm.appendChild(inputForm);// se agregan los hijos a sus respectivos padres 
    newForm.appendChild(buttonGuardar);
    newForm.appendChild(buttonClose);
    container.appendChild(newForm);
    section.appendChild(container);
    var newLinkEliminar=document.getElementById('link-crear-lista');

    if(newLinkEliminar){
        section.removeChild(newLinkEliminar);
    }//Sirve para la Version 6 para poder Volver a Ejecutar El cliCk de la Lista

    var focusInput=document.getElementById('input-first');
    focusInput.focus();//se agrega el focus para que el cursor aparezca en automatico y se pueda escribir
    buttonGuardar.addEventListener('click',almacenarTitle);
    buttonClose.addEventListener('click', cancelForm);
    buttonGuardar.addEventListener('click',formPrincipal);
    container.style.float='left';
};//SE CIERRA LA FUNCION QUE CONTIENE EL INPUT PRINCIPAL Y EL BOTON DE GUARDAR


// SE CREA LA FUNCION CON EL TEXT AREA Y EL BOTON AÑADIR

var formTextArea = function(){
    var sendTitle = document.getElementById('title');//se trae el elemento title que ya se creo previamente
    var containerNewTextArea=document.createElement('div');//se crea elemento div con sus atributos
    containerNewTextArea.setAttribute('id','containerNewTextArea')
    containerNewTextArea.setAttribute('class','formato-newContainer-textArea')
    var container= document.getElementById('containerForTitle');//se mandar llamar el elemento contenedor que ya habia sido creado previamente
    var newFormTextArea= document.createElement('form');//se crea un elemento form y sus atributos 
    newFormTextArea.setAttribute('id','formTextArea');
    newFormTextArea.setAttribute('class','format-form-textarea');
    var textArea= document.createElement('textarea');
    textArea.setAttribute('id','formTextArea2');
    textArea.setAttribute('class','format-textarea');
    textArea.setAttribute('rows','5');
    textArea.setAttribute('cols','34');
    var buttonAñadir=document.createElement('button');//se crea el boton añadir con sus atributos 
    buttonAñadir.setAttribute('id','buttonañadir');
    buttonAñadir.setAttribute('class','formato-boton boton-añadir');
    buttonAñadir.textContent="Añadir";
    var buttonClose2=document.createElement('button');//se crea el boton cerrar 
    buttonClose2.setAttribute('id','button-close2');
    buttonClose2.setAttribute('class','format-button-close close2');
    buttonClose2.innerHTML="&times";
    newFormTextArea.appendChild(textArea);//se asignan los hijos a sus respectivos padres 
    newFormTextArea.appendChild(buttonAñadir);
    newFormTextArea.appendChild(buttonClose2);
    containerNewTextArea.appendChild(sendTitle);
    containerNewTextArea.appendChild(newFormTextArea);
    section.appendChild(containerNewTextArea);
    var eliminarAñadirTarjeta=document.getElementById('link-Añadir-Tarjeta');//se manda traer el elemento que queremos que desaparezca una vez que se clikea 
    section.removeChild(container);//se remueve el elemento container que se habia creado anteriormente 
    var focusTextArea=document.getElementById('formTextArea2');
    focusTextArea.focus();//se le coloca focus al text area para el cursor aparezca automaticamente 
    buttonAñadir.addEventListener('click',newPlaceTextArea);
    containerNewTextArea.style.float='left';//se utiliza para que el elemento se flote 
};// SE CREA LA FUNCIOON DEL TEXT AREA Y EL BOTON AÑADIR.

//SE CREA LA FUNCION PARA PODER COLOCAR EL CONTENIDO DEL TEXT AREA DEBAJO DEL TITULO DE LA LISTA
var newPlaceTextArea=function(){
    var valueTextArea=document.getElementById('formTextArea2').value;//se rescata el valor que se ingresa del text area
    var containerForFinishForm=document.getElementById('containerNewTextArea');//se manda a llamar los elementos que se utilizaran nuevamente 
    var textAreaPreviuos=document.getElementById('formTextArea2');
    var buttonAñadirRepet=document.getElementById('buttonañadir');
    var buttonCloseRepet=document.getElementById('button-close2');
    var divTextArea=document.createElement('div'); //este mostrara todo el texto que se coloque en el text area
    divTextArea.setAttribute('id','divContentNewAr');
    divTextArea.setAttribute('class','formatdivTextArea');
    var infoTextArea=document.createTextNode(valueTextArea);//se especifica que el valor que se rescata del text area es un nodo de tipo texto 
    divTextArea.appendChild(infoTextArea);//se agregan los hijos a sus respectivos padres
    containerForFinishForm.appendChild(textAreaPreviuos);
    containerForFinishForm.appendChild(divTextArea);
    containerForFinishForm.insertBefore(divTextArea,textAreaPreviuos);
    containerForFinishForm.appendChild(buttonAñadirRepet);
    containerForFinishForm.appendChild(buttonCloseRepet);
    section.appendChild(containerForFinishForm);
    document.getElementById('formTextArea2').value='';// se limpia el text area para que no aparezca lo que previamente fue almacenado. 
    var focusTextArea=document.getElementById('formTextArea2');
    focusTextArea.focus();//se agrega el focus para que el cursor se coloque en cuanto se abra el text area
}

añadirLista(); //SE MANDA LLAMAR A LA PRIMERA FUNCION QUE VA A EJECUTARSE

//SE CREA LA FUNCION PARA ELIMINAR EL FORMULARIO AL MOMENTO DE CLICKEAR LA X 

var cancelForm=function(){
    var removeContainer=document.getElementById('form'); //se manda a llamar o a traer a js el formulario que va a eliminarse al cliquear la X
    section.removeChild(removeContainer);
    añadirLista(); //Se manda a llamar la funcion añadir lista para que esta aparezca una vez que se haya dado en la X de cerrar y se haya eliminado el formulario
}