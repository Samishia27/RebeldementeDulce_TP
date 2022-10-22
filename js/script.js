
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
    <div>
        <div>
            <p class="pie-pagina">Seguinos en nuestras Redes Sociales</p>
        </div>
        <div class="enlace">
            <a href="https://www.facebook.com/people/Rebeldemente-Dulce/100086828526739/" target="_blank" class="enlace">
                <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="https://www.instagram.com/rebeldementedulce/" target="_blank" class="enlace">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
    </div>

    <div>
        <div class="frase">
            <h4>Hacemos realidad tu dulce imaginación...</h4>
        </div>
        <p>Derechos Reservados @2022</p>
    </div>
`
document.getElementById("idfooter").innerHTML=footer

let boton_whatsapp =`
        <a class="boton_whatsapp" href="https://wa.me/5491159496795/?text=Rebeldemente%20Dulce%20Whatsapp" target="_blank">
            <img src="img/logo_whatsapp.png">
        </a>
`
document.getElementById("boton_whatsapp").innerHTML=boton_whatsapp

// Funciones del form

var opcionesAsuntos = ['opcionesRegalo', 'opcionesEvento', 'opcionesProducto', 'opcionesComentario'];
function ocultarOpcionesForm() {
    for (asunto of opcionesAsuntos) {
        let opciones = document.getElementsByClassName(asunto);
        for (elemento of opciones) {elemento.style.display = 'none'};
        // for (elemento of opciones) {elemento.style.value = ''};
    }
}

// Falta borrar contenido si se cambia la opcion!!
const opciones = {regalo: 'opcionesRegalo', eventos: 'opcionesEvento', productos: 'opcionesProducto', comentarios: 'opcionesComentario'};
function mostrarOpcionesForm() {
    let asuntoElegido = document.getElementById('asunto').value;
    // console.log(asunto);
    // console.log(opciones[asunto]);

    ocultarOpcionesForm();
    let opcionElegida = document.getElementsByClassName(opciones[asuntoElegido]);
    for (elemento of opcionElegida) {elemento.style.display = 'block'};
    // opcionElegida.style.display = 'block';
}


const campos_check = {
    nombre: false,
    celular: false,
    mail: false
}

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario inputs')
const reg_exp = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{8,12}$/, //de 8 a 12 números (por el código sin ceros)
    texto: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{1,500}$/,
}

var today = new Date();
var tomorrow = new Date();
function corregirFechasPermitidas() {
    tomorrow.setDate(today.getDate() + 2)
    document.getElementById("fechaEvento").setAttribute("min", tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate());
    document.getElementById("fechaRegalo").setAttribute("min", tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate());
}

var validarFecha = function (e, event, field) {
    // document.getElementById(field).classList.remove("formulario__input_neutro")
    if (event.value >= event.min) {
        console.log('se ejecuta True');
        document.getElementById(field).classList.remove("formulario__input_incorrecto")
        document.getElementById(field).classList.add("formulario__input_correcto")
        // campos_check[field] = true;
    } else {
        console.log('se ejecuta False');
        document.getElementById(field).classList.remove("formulario__input_correcto")
        document.getElementById(field).classList.add("formulario__input_incorrecto")
        // campos_check[field] = false;
        e.preventDefault();
    }
}

var validarOpcionesAdicionales = function (e) {
    let asunto = document.getElementById('asunto').value;
    if (asunto == "regalo") {
        validarField(e, reg_exp.texto, formulario.motivoRegalo, "motivoRegalo")
        validarFecha(e, formulario.fechaRegalo, "fechaRegalo")
        // validarField(e, reg_exp.texto, formulario.mensajeRegalo, "mensajeRegalo")
    } else if (asunto == "eventos") {
        validarFecha(e, formulario.fechaEvento, "fechaEvento")
        validarField(e, reg_exp.texto, formulario.datosEvento, "datosEvento")
// if (formulario.cantidad.value <= 0) { // Si el campo id="cantidad" del form está vacio...
//     alert("La cantidad de personas debe ser positiva.")
//     e.preventDefault()
// }
        // validarDatosEvento(e)
    } else if (asunto == "productos") {
        validarField(e, reg_exp.texto, formulario.mensajeProducto, "mensajeProducto")
    }
} 

var validarNombre = function (e) {validarField(e, reg_exp.nombre, formulario.nombre, "nombre")}
var validarCelular = function (e) {validarField(e, reg_exp.celular, formulario.celular, "celular")}
var validarMail = function (e) {validarField(e, reg_exp.mail, formulario.mail, "mail")}

function validarField (e, reg_exp, event, field) {
    document.getElementById(field).classList.remove("formulario__input_neutro")
    if (reg_exp.test(event.value)) { // Si el campo id="nombre" del form está vacio...
        // minuto 18
        // alert("Completa el campo nombre")
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

var validarTodo = function (e) {
    // e.preventDefault();
    validarNombre(e);
    validarCelular(e)
    validarMail(e)
    validarOpcionesAdicionales(e)
    // if (all fields are True) {alert('Gracias por completar el formulario!\nA la brevedad nos contactaremos con vos.')} else {alert('Por favor completá el formulario antes de enviar')}
}

formulario.addEventListener('submit', validarTodo);

$(document).on("keydown", ":input:not(textarea)", function(event) {
    return event.key != "Enter";
});

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();
// });

// // // const validarFormulario = (e) => {
// // //     switch (e.target.name)
// // // }

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