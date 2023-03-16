
//Cargar datos de perfil de Randomuser.me con fetch()

async function consulta(){
    let datosPersonales = await fetch("https://randomuser.me/api/?gender=male")
        .then(response => response.json())
        .then(data => data)

    dato = datosPersonales.results[0];
    var foto = document.getElementById('foto');

    foto.setAttribute('src', dato.picture.large);
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

window.onresize = ajuste;
function ajuste(){
    if(document.documentElement.clientWidth < 768){
        document.getElementById('header-izquierda').classList.remove('col-6');
        document.getElementById('header-derecha').classList.remove('col-6');
        console.log(document.documentElement.clientWidth)
    }
    else{
        document.getElementById('header-izquierda').classList.add('col-6');
        document.getElementById('header-derecha').classList.add('col-6');
    }
}