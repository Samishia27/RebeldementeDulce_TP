
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

const opciones = {regalo: 'opcionesRegalo', eventos: 'opcionesEvento', productos: 'opcionesProducto', comentarios: 'opcionesComentario'};
function mostrarOpcionesForm() {
    let asunto = document.getElementById('asunto').value;
    // console.log(asunto);
    // console.log(opciones[asunto]);

    ocultarOpcionesForm();
    let opcionElegida = document.getElementById(opciones[asunto]);
    opcionElegida.style.display = 'block';
}

console.log(document.querySelectorAll("h3"));
