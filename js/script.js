
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

// var opcionesAsuntos = ['opcionesRegalo', 'opcionesEvento', 'opcionesProducto', 'opcionesComentario'];
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

// Falta borrar contenido si se cambia la opcion!!
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
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{8,12}$/, //de 8 a 12 números (por el código sin ceros)
}

var validarOpcionesAdicionales = function (e) {
    let asunto = document.getElementById('asunto').value;
    if (asunto == "regalo") {
        validarMotivoRegalo(e)
        validarFecha(e, "fechaRegalo")
    } else if (asunto == "eventos") {
        validarFecha(e, "fechaEvento")
// if (formulario.cantidad.value <= 0) { // Si el campo id="cantidad" del form está vacio...
//     alert("La cantidad de personas debe ser positiva.")
//     e.preventDefault()
// }
        // validarDatosEvento(e)
    } else if (asunto == "productos") {
        validarMensajeProducto(e)
    }

    // document.getElementById("mail").classList.remove("formulario__input_neutro")
    // if (reg_exp.mail.test(formulario.mail.value)) { // Si el campo id="nombre" del form está vacio...
    //     console.log('se ejecuta True');
    //     document.getElementById("mail").classList.remove("formulario__input_incorrecto")
    //     document.getElementById("mail").classList.add("formulario__input_correcto")
    // } else {
    //     console.log('se ejecuta False');
    //     document.getElementById("mail").classList.remove("formulario__input_correcto")
    //     document.getElementById("mail").classList.add("formulario__input_incorrecto")
    //     e.preventDefault();
    // }
}

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 2)
document.getElementById("fechaEvento").attr("min", tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate());

// var validarMail = function (e) {
//     document.getElementById("mail").classList.remove("formulario__input_neutro")
//     if (reg_exp.mail.test(formulario.mail.value)) { // Si el campo id="nombre" del form está vacio...
//         console.log('se ejecuta True');
//         document.getElementById("mail").classList.remove("formulario__input_incorrecto")
//         document.getElementById("mail").classList.add("formulario__input_correcto")
//     } else {
//         console.log('se ejecuta False');
//         document.getElementById("mail").classList.remove("formulario__input_correcto")
//         document.getElementById("mail").classList.add("formulario__input_incorrecto")
//         e.preventDefault();
//     }
// }

var validarMail = function (e) {
    validarField(e, reg_exp.mail, formulario.mail, "mail")
}

function validarField (e, reg_exp, event, field) {
    document.getElementById(field).classList.remove("formulario__input_neutro")
    if (reg_exp.test(event.value)) { // Si el campo id="nombre" del form está vacio...
        console.log('se ejecuta True');
        document.getElementById(field).classList.remove("formulario__input_incorrecto")
        document.getElementById(field).classList.add("formulario__input_correcto")
        campos_check[field] = true;
    } else {
        console.log('se ejecuta False');
        document.getElementById(field).classList.remove("formulario__input_correcto")
        document.getElementById(field).classList.add("formulario__input_incorrecto")
        campos_check[field] = false;
        e.preventDefault();
    }
}

var validarCelular = function (e) {
    document.getElementById("celular").classList.remove("formulario__input_neutro")
    if (reg_exp.celular.test(formulario.celular.value)) { // Si el campo id="nombre" del form está vacio...
        console.log('se ejecuta True');
        document.getElementById("celular").classList.remove("formulario__input_incorrecto")
        document.getElementById("celular").classList.add("formulario__input_correcto")
    } else {
        console.log('se ejecuta False');
        document.getElementById("celular").classList.remove("formulario__input_correcto")
        document.getElementById("celular").classList.add("formulario__input_incorrecto")
        e.preventDefault();
    }
}

var validarNombre = function (e) {
    // if (formulario.nombre.value == 0) { // Si el campo id="nombre" del form está vacio...
    console.log('se ejecuta');
    document.getElementById("nombre").classList.remove("formulario__input_neutro")
    if (reg_exp.nombre.test(formulario.nombre.value)) { // Si el campo id="nombre" del form está vacio...
        console.log('se ejecuta True');
        // minuto 18
        // cambiar color del borde a rojo
        // alert("Completa el campo nombre")
        // e.preventDefault()
        document.getElementById("nombre").classList.remove("formulario__input_incorrecto")
        document.getElementById("nombre").classList.add("formulario__input_correcto")
    } else {
        console.log('se ejecuta False');
        document.getElementById("nombre").classList.remove("formulario__input_correcto")
        document.getElementById("nombre").classList.add("formulario__input_incorrecto")
        e.preventDefault();
    }
}

var validarTodo = function (e) {
    // e.preventDefault();
    validarNombre(e);
    validarCelular(e)
    validarMail(e)
    //     validarOpcionesAdicionales(e)
    // if (all fields are True) {alert('Gracias por completar el formulario!\    nA la brevedad nos contactaremos con vos.')} else {alert('Por favor completá el formulario antes de enviar')}
}

formulario.addEventListener('submit', validarTodo);
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
// });

// // // const validarFormulario = (e) => {
// // //     switch (e.target.name)
// // // }

const campos_check = {
    nombre: false,
    celular: false,
    mail: false
}
// function validarFormulario() {
//     e.preventDefault();
// // // // // // // en validar se ajusta!!!
//     if (campos_check) {  // si todos los campos son true, sale del formulario correctamente, y lo resetea y borra todos los iconos
//         formulario.reset();
//         alert('Todo ok con el formulario')
//     } else {
//         alert('Por favor completá el formulario antes de enviar')
//     }
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