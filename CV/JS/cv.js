//Cargar datos de perfil de Randomuser.me

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


//Validacion del formulario

function validateForm() {
    let nombre = document.forms["formulario"]['nombre'].value;
    let email = document.forms["formulario"]['email'].value;

    if(nombre == '' || email == ''){
        alert('"Nombre" y "Correo electronico" son campos obligatorios');
    }
    else{
        alert('Su mensaje a sido enviado con exito. Me contactare a la brevedad. Muchas gracias!!!')
    }
} 

document.getElementById("enviar").addEventListener("click", validateForm);
