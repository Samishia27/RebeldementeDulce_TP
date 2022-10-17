
let header  =`
    <nav>
        <a href="index.html" class="boton">Inicio</a>
        <a href="sobre_nosotros.html" class="boton">Nosotros</a>
        <a href="productos.html" class="boton">Productos</a>
        <a href="contactanos.html" class="boton">Contactanos</a>
    </nav>
`
document.getElementById("idheader").innerHTML=header

let footer =`
    <div class:redes-sociales>
        <div>
            <p class="pie-pagina">Seguinos en nuestras Redes Sociales</p>
        </div>
        <div>
            <a href="https://www.facebook.com/" target="_blank" class="enlace">
                <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/rebeldementedulce/" target="_blank" class="enlace">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
    </div>
    <div>
        <p>Derechos Reservados @2022</p>
    </div>
`
document.getElementById("idfooter").innerHTML=footer


// Funciones del form

var opcionesAsuntos = ['opcionesRegalo', 'opcionesEvento', 'opcionesProducto', 'opcionesComentario'];
function ocultarOpcionesForm() {
    // for (asunto in opcionesAsuntos) {
    //     let opciones = document.getElementById(asunto);
    //     opciones.style.display = 'none';
    // }
    let opcion1 = document.getElementById('opcionesRegalo');
    opcion1.style.display = 'none';
    let opcion2 = document.getElementById('opcionesEvento');
    opcion2.style.display = 'none';
    let opcion3 = document.getElementById('opcionesProducto');
    opcion3.style.display = 'none';
    let opcion4 = document.getElementById('opcionesComentario');
    opcion4.style.display = 'none';
}

// Borrar contenido si se cambia la opcion!!
const opciones = {regalo: 'opcionesRegalo', eventos: 'opcionesEvento', productos: 'opcionesProducto', comentarios: 'opcionesComentario'};
function mostrarOpcionesForm() {
    let asunto = document.getElementById('asunto').value;
    // console.log(asunto);
    // console.log(opciones[asunto]);

    ocultarOpcionesForm();
    let opcionElegida = document.getElementById(opciones[asunto]);
    opcionElegida.style.display = 'block';
}

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario inputs')

const reg_exp = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1-40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8-12}$/, //de 8 a 12 números (por el código sin ceros)

}

formulario.addEventListener('submit', validarNombre);
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
// });

var validarNombre = function (e) {
    // if (formulario.nombre.value == 0) { // Si el campo id="nombre" del form está vacio...
    if (reg_exp.nombre.test(e.target.value)) { // Si el campo id="nombre" del form está vacio...
        // minuto 18
        // cambiar color del borde a rojo
        // alert("Completa el campo nombre")
        // e.preventDefault()
        document.getElementById("grupo__nombre").classList.remove("formulario__input_incorrecto")
        document.getElementById("grupo__nombre").classList.add("formulario__input_correcto")
    } else {
        document.getElementById("grupo__nombre").classList.remove("formulario__input_correcto")
        document.getElementById("grupo__nombre").classList.add("formulario__input_incorrecto")
        e.preventDefault();
    }
}


// // // const validarFormulario = (e) => {
// // //     switch (e.target.name)
// // // }

// function validarFormulario() {
//     e.preventDefault();
//     if (campos_chequeados) {  // si todos los campos son true, sale del formulario correctamente, y lo resetea y borra todos los iconos
//         formulario.reset();
//         alert('Todo ok con el formulario')
//     } else {
//         alert('Por favor completá el formulario antes de enviar')
//     }
// }

// // el error q sea con los borders
// // border: 3px solid transparent;
// // border: 3px solid red;
// // border: 3px solid green;

// if (formulario.cantidad.value <= 0) { // Si el campo id="cantidad" del form está vacio...
//     alert("La cantidad de personas debe ser positiva.")
//     e.preventDefault()
// }

// // console.log(document.querySelectorAll("h3"));






// var formulario = document.getElementsByName('formulario')[0],  //[0] Primer elemento, el formulario en si mismo.
// elementos = formulario.elements, // Elementos del form, no lo usamos en este script.
// boton = document.getElementById('b1') // El botón

// // --------------------------------------------------------
// // Validamos Nombre
// // --------------------------------------------------------
// var validarNombre = function (e) {
//     if (formulario.nombre.value == 0) { // Si el campo id="nombre" del form está vacio...
//         alert("Completa el campo nombre")
//         e.preventDefault() // Evita el comportamiento por defecto
//         //https://www.w3schools.com/jsref/event_preventdefault.asp
//     }
// }

// // --------------------------------------------------------
// // Validamos Sistema Operativo
// // --------------------------------------------------------
// var validarRadio = function (e) {
//     if (formulario.so[0].checked == true ||
//         formulario.so[1].checked == true ||
//         formulario.so[2].checked == true) {
//     } else {  //Si al menos uno de los Radio no está marcado....
//         alert("Selecciona un Sistema Operativo")
//         e.preventDefault()
//     }
// }

// // --------------------------------------------------------
// // Validamos Términos y Condiciones
// // --------------------------------------------------------
// var validarCheckbox = function (e) {
//     if (formulario.terminos.checked == false) {
//         alert("Acepta los términos y condiciones")
//         e.preventDefault()
//     }
// };

// // --------------------------------------------------------
// // Se ejecuta al presionar submit e invoca a las tres validaciones
// // --------------------------------------------------------
// var validar = function (e) {  // "e" es el evento recibido del form (https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault)
//     validarNombre(e)
//     validarRadio(e)
//     validarCheckbox(e)
// }

// // --------------------------------------------------------
// // Espera que se presione "enviar" y llama a "validar"
// // submit es un evento DEL FORM, no del botón!
// formulario.addEventListener("submit", validar)