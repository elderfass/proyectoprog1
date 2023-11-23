//cobtrolador



var persona = new Persona();

function enviarDatos() {

    let nombreH = document.getElementById("nombre").value;
    let idH = document.getElementById("cc").value;
    let emailH = document.getElementById("email").value;
    let claveH = document.getElementById("pwd").value;
    let rolH = document.getElementById("rol").value;
    
    if (nombreH!="" && idH!="" && emailH!="" && claveH!="" && rolH!="") {        
        persona.id=idH;
        persona.nombre=nombreH;
        persona.email=emailH;
        persona.clave=claveH;
        persona.rol=rolH;
        console.log(persona);
        persona.guardar(persona);
        console.log(persona.personas);
        
        persona.llenarObjeto();
    }else{
        alert("por favor revise los campos , no pueden estar vacios");
    }    
}

function Editar() {
// persona1.Editar(2,"andres","andres@jj.com",null,false);
    var nombreH = document.getElementById("nombre").value;
    var idH = document.getElementById("cc").value;
    var emailH = document.getElementById("email").value;
    var claveH = document.getElementById("pwd").value;
    var rolH = document.getElementById("rol").value;
    if (nombreH!="" && idH!="" && emailH!="" && claveH!="" && rolH!="") {
        
        persona.editar(idH,nombreH,emailH,claveH,rolH);        
        console.log(persona);
        console.log(persona.actualizarDatos(persona.personas));
        
    }else{
        alert("por favor revise los campos , no pueden estar vacios");
    }
    
    // persona.ActualizarDatos(Persona.conteo)
    
    
}


function Eliminar() {
    
        
    delete persona.nombre;
    delete persona.id;
    delete persona.email;
    delete persona.clave;
    delete persona.rol;
    console.log(persona);
    
    



}

document.getElementById("btn").addEventListener('click',function() {
    enviarDatos();
})

// btn.addEventListener('click',function() {
//     alert("click");
// })
