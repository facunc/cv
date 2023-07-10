
//Cargar datos de perfil de Randomuser.me con fetch()

async function consulta(){
    let datosPersonales = await fetch("https://randomuser.me/api/?gender=male")
        .then(response => response.json())
        .then(data => data)

    dato = datosPersonales.results[0];
    var foto = document.getElementById('foto');

    foto.setAttribute('src', img/foto perfil.bmp);
    document.getElementById('nombre').innerHTML = dato.name.first;
    document.getElementById('nombre-completo').innerHTML = dato.name.first + " " + dato.name.last;
    document.getElementById('origen').innerHTML = dato.nat;
    document.getElementById('edad').innerHTML = dato.dob.age;
    document.getElementById('residencia').innerHTML = dato.location.street.name + ' ' + dato.location.street.number + ', ' + dato.location.city + ', ' + dato.location.country + ' ' + '(' + dato.location.postcode + ')'; 
}

consulta();


// Mensaje de formulario enviado con éxito

const formulario = document.getElementById('formulario');

formulario.addEventListener("submit", () => {
    alert('Gracias! Su mensaje fue enviado con éxito. Me contactaré a la brevedad');
});



// Animación de la flecha ir arriba

window.onscroll = function (){irArriba()}
function irArriba(){
    
    if(document.documentElement.scrollTop > 50){
        document.getElementById('flecha').className = 'container-flecha-arriba';
    }
    else{
        document.getElementById('flecha').className = '';
    }
}





let opciones = {
    root: null,
    rootMargin: "100px",
    threshold: 0.5,
}

let interseccion = (entradas) => {
    entradas.forEach((entrada) => {
         if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
         }
         else{
            entrada.target.classList.remove('visible');
         }
    });
}

let observador = new IntersectionObserver(interseccion, opciones);
let contacto = document.querySelector('.container-contacto');
let perfil = document.querySelector('.container-perfil'); 
observador.observe(contacto);
observador.observe(perfil);


