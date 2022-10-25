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

const opciones = {regalo: 'opcionesRegalo', eventos: 'opcionesEvento', productos: 'opcionesProducto', comentarios: 'opcionesComentario'};
function mostrarOpcionesForm() {
    let asuntoElegido = document.getElementById('asunto').value;

    ocultarOpcionesForm();
    let opcionElegida = document.getElementsByClassName(opciones[asuntoElegido]);
    for (elemento of opcionElegida) {elemento.style.display = 'block'};
}


const campos_check = {
    nombre: false,
    celular: false,
    mail: false,
    asunto: false,
    opcionesAdicionales: false
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario inputs');
const reg_exp = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{8,12}$/, //de 8 a 12 números (por el código sin ceros)
    texto: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{1,500}$/
    // cantidad: /^\d{1,3}$/
}

var today = new Date();
var tomorrow = new Date();
function corregirFechasPermitidas() {
    tomorrow.setDate(today.getDate() + 2);
    document.getElementById("fechaEvento").setAttribute("min", tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate());
    document.getElementById("fechaRegalo").setAttribute("min", tomorrow.getFullYear()+'-'+(tomorrow.getMonth()+1)+'-'+tomorrow.getDate());
}

var validarOpcionesAdicionales = function () {
    campos_check["opcionesAdicionales"] = true;
    let asunto = document.getElementById('asunto').value;
    if (asunto == "regalo") {
        validarField(formulario.motivoRegalo, "motivoRegalo", "reg_exp");
        validarField(formulario.fechaRegalo, "fechaRegalo", "fecha");
        // validarField(e, formulario.mensajeRegalo, "mensajeRegalo", "texto");  // Se dejó opcional
    } else if (asunto == "eventos") {
        validarField(formulario.fechaEvento, "fechaEvento", "fecha");
        validarField(formulario.personasEvento, "personasEvento", "cantidad");
        validarField(formulario.datosEvento, "datosEvento", "reg_exp");
    } else if (asunto == "productos") {
        validarField(formulario.producto_individual, "producto_individual", "desplegable");
        validarField(formulario.mensajeProducto, "mensajeProducto", "reg_exp");
    } else if (asunto == "comentarios") {
        validarField(formulario.mensajeComentario, "mensajeComentario", "reg_exp");
    }
} 

var validarNombre = function () {validarField(formulario.nombre, "nombre", "reg_exp")};
var validarCelular = function () {validarField(formulario.celular, "celular", "reg_exp")};
var validarMail = function () {validarField(formulario.mail, "mail", "reg_exp")};
var validarAsunto = function () {validarField(formulario.asunto, "asunto", "desplegable")};

function validarField (event, field, criterio) {
    document.getElementById(field).classList.remove("form_input_neutro");
    let validacion;
    if (criterio == "reg_exp") {
        let expresion = field in reg_exp ? reg_exp[field] : reg_exp["texto"];
        validacion = expresion.test(event.value);
    } else if (criterio == "fecha") {
        validacion = event.value >= event.min;
    } else if (criterio == "cantidad") {
        validacion = (event.value > 0 && event.value <= 150);  // Hasta 150 personas para un evento
    } else if (criterio == "desplegable") {
        validacion = (event.value != ''); 
    }

    if (validacion) {
        document.getElementById(field).classList.remove("form_input_incorrecto");
        document.getElementById(field).classList.add("form_input_correcto");
        if (field in reg_exp || field == "asunto") {
            campos_check[field] = true;
        } else {
            campos_check["opcionesAdicionales"] *= true;
        }
    } else {
        document.getElementById(field).classList.remove("form_input_correcto");
        document.getElementById(field).classList.add("form_input_incorrecto");
        if (field in reg_exp || field == "asunto") {
            campos_check[field] = false;
        } else {
            campos_check["opcionesAdicionales"] *= false;
        }
    }
}

const formAlert = Swal.mixin({
    // icon: 'warning',
    width: '40%',
    padding: '1rem',
    background: 'black', //color
    backdrop: true, // diffuse del fondo
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    buttonsStyling: false,
    confirmButtonText: 'OK',
    customClass: {
        popup: 'alert_popup',
        confirmButton: 'boton',
    },
    confirmButtonAriaLabel: "OK",
});

var inputs_a_vaciar = document.getElementsByClassName('form_input');

var validarTodo = function (e) {
    e.preventDefault();
    validarNombre();
    validarCelular();
    validarMail();
    validarAsunto();
    validarOpcionesAdicionales();
    if (Object.values(campos_check).every(x => x)) {
        formulario.reset();
        formAlert.fire({
            html: '<p style="text-align: center">Gracias por completar el formulario!<br>A la brevedad nos pondremos en contacto.</p>',
            icon: 'success',
        });
        ocultarOpcionesForm();
        for (elemento of inputs_a_vaciar) {
            elemento.classList.remove("form_input_incorrecto");
            elemento.classList.remove("form_input_correcto");
            elemento.classList.add("form_input_neutro");
        }
    } else {
        formAlert.fire({
            html: '<p style="text-align: center">Por favor completá correctamente todas las celdas marcadas en <span style="color:red">rojo</span> antes de enviar.</p>',
            icon: 'error',
        });
    }
}

formulario.addEventListener('submit', validarTodo);
mostrarOpcionesForm()

// Para evitar ejecutar el form al presionar Enter
$(document).on("keydown", ":input:not(textarea)", function(event) {
    return event.key != "Enter";
});
