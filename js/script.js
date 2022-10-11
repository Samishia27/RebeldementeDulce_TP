
let header  =`
    <nav>
        <a href="index.html" class="boton">Inicio</a>
        <a href="sobre_nosotros.html" class="boton">Nosotros</a>
        <a href="productos.html" class="boton">Productos</a>
        <a href="contactanos.html" class="boton">Contactanos</a>
    </nav>
`
document.getElementById("idheader").innerHTML=header

let footer = `
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