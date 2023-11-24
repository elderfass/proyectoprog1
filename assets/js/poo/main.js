//cobtrolador
var persona;
var personas = [];
var contador = 0;
var table = document.getElementById("tableD");
var rows = table.getElementsByTagName("tr");

function enviarDatos() {
    var idH = document.getElementById('cc').value;
    var nombreH = document.getElementById('nombre').value;
    var emailH = document.getElementById('email').value;
    var claveH = document.getElementById('pwd').value;
    var rolH = document.getElementById('rol').value;

    persona = new Persona(idH, nombreH, emailH, claveH, rolH);
    personas.push(persona);

    if (nombreH !== "" && idH !== "" && emailH !== "" && claveH !== "" && rolH !== "") {
        if (persona.buscar(personas, contador, rows)) {
            contador += 1;
            persona.llenarTabla(personas, table, (contador - 1));

        } else {
            alert("El Email ya ha sido registrado");
            personas.splice(contador, 1);
            return;
        }
    } else {
        alert("Por favor, revise los campos. No pueden estar vacíos.");
    }
}

function editar() {
    var nuevoid = document.getElementById("cc").value;
    var nuevoNombre = document.getElementById("nombre").value;
    var nuevoEmail = document.getElementById("email").value;
    var nuevaClave = document.getElementById("pwd").value;
    var nuevoRol = document.getElementById("rol").value;

    var personad = new Persona(nuevoid, nuevoNombre, nuevoEmail, nuevaClave, nuevoRol);
    if (!persona.buscar(personas, (contador - 1), rows)) {
        var p=persona.editarPersona(personad, personas, table);
        if (p){
            alert("los Emails no coinciden")
        }
    } else {
        alert("No se puede editar un elemento inexistente. Se creará el elemento");
        enviarDatos();
    }
}

function eliminar(){
    var nuevoid = document.getElementById("cc").value;
    var nuevoNombre = document.getElementById("nombre").value;
    var nuevoEmail = document.getElementById("email").value;
    var nuevaClave = document.getElementById("pwd").value;
    var nuevoRol = document.getElementById("rol").value;

    var personad = new Persona(nuevoid, nuevoNombre, nuevoEmail, nuevaClave, nuevoRol);
    if (!persona.buscar(personas, (contador - 1), rows)) {
        var p=persona.eliminarPersona(personad, personas, table);
        if (p){
            alert("los Emails no coinciden")
        }
    } else {
        alert("No se puede editar un elemento inexistente. Se creará el elemento");
        enviarDatos();
    }
}

document.getElementById("btn").addEventListener('click', enviarDatos);