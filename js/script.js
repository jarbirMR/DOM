//botonEnviar

//const btnEnviar = document.querySelector('.boton--primario');
//btnEnviar.addEventListener('click', function(e){
  // console.log(e);
   // e.preventDefault();
    
//});



// Creacion de objeto datos
const datos ={
 nombre: '',
 email: '',
 mensaje: ''
}
// Eventos para los inputs y textarea

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);



//El evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const { nombre, email, mensaje }  = datos;
if(nombre === '' || email === '' || mensaje === ''){

    //console.log('nombre y campo vacios');
    mostrarAlerta('Todos los campos son obligatorio', true);
    return;
}
    
    mostrarCorrecto('Todos los campos son correctos');
    
});


//funcion leer texto
function leerTexto(e){

    datos[e.target.id] = e.target.value; // TOMAR EL VALOR DEL FORMULARIO
    //console.log(datos);
}


//Mostrar akerta
function mostrarAlerta(mensaje, error =null){
const alerta= document.createElement('P');
alerta.textContent = mensaje;
if(error){
    alerta.classList.add('error');

} else {
    alerta.classList.add('correcto');
}

formulario.appendChild(alerta);

setTimeout(function(){
    alerta.remove();
},5000);

}

