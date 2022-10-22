
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
        <div>
            <a href="https://www.facebook.com/people/Rebeldemente-Dulce/100086828526739/" target="_blank" class="enlace">
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

    ocultarOpcionesForm();
    let opcionElegida = document.getElementsByClassName(opciones[asuntoElegido]);
    for (elemento of opcionElegida) {elemento.style.display = 'block'};
}


const campos_check = {
    nombre: false,
    celular: false,
    mail: false,
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
        // validarField(e, formulario.mensajeRegalo, "mensajeRegalo", "texto");
    } else if (asunto == "eventos") {
        validarField(formulario.fechaEvento, "fechaEvento", "fecha");
        validarField(formulario.personasEvento, "personasEvento", "cantidad");
        validarField(formulario.datosEvento, "datosEvento", "reg_exp");
    } else if (asunto == "productos") {
        validarField(formulario.mensajeProducto, "mensajeProducto", "reg_exp");
    } else if (asunto == "comentarios") {
        validarField(formulario.mensajeComentario, "mensajeComentario", "reg_exp");
    }
} 

var validarNombre = function () {validarField(formulario.nombre, "nombre", "reg_exp")};
var validarCelular = function () {validarField(formulario.celular, "celular", "reg_exp")};
var validarMail = function () {validarField(formulario.mail, "mail", "reg_exp")};

function validarField (event, field, criterio) {
    document.getElementById(field).classList.remove("form_input_neutro");
    let validacion;
    if (criterio == "reg_exp") {
        let expresion = field in reg_exp ? reg_exp[field] : reg_exp["texto"];
        validacion = expresion.test(event.value);
    } else if (criterio == "fecha") {
        validacion = event.value >= event.min;
    } else if (criterio == "cantidad") {
        validacion = (event.value > 0 && event.value <= 150);  // Hasta 150 personas para un evento (?)
    }

    if (validacion) {
        // minuto 18
        // alert("Completa el campo nombre")
        console.log('se ejecuta True');
        document.getElementById(field).classList.remove("form_input_incorrecto");
        document.getElementById(field).classList.add("form_input_correcto");
        if (field in reg_exp) {
            campos_check[field] = true;
        } else {
            campos_check["opcionesAdicionales"] *= true;
        }
    } else {
        console.log('se ejecuta False');
        document.getElementById(field).classList.remove("form_input_correcto");
        document.getElementById(field).classList.add("form_input_incorrecto");
        if (field in reg_exp) {
            campos_check[field] = false;
        } else {
            campos_check["opcionesAdicionales"] *= false;
        }
        // e.preventDefault();
    }
}

var validarTodo = function (e) {
    e.preventDefault();
    validarNombre();
    validarCelular();
    validarMail();
    validarOpcionesAdicionales();
    if (Object.values(campos_check).every(x => x)) {
        formulario.reset();
        alert('Gracias por completar el formulario!\nA la brevedad nos pondremos en contacto.')
    } else {
        alert('Por favor completá correctamente todas las celdas marcadas en rojo antes de enviar.')
    }
}

formulario.addEventListener('submit', validarTodo);
mostrarOpcionesForm()
// corregirFechasPermitidas()

$(document).on("keydown", ":input:not(textarea)", function(event) {
    return event.key != "Enter";
});
