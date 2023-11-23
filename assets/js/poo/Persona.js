// modelo
 class Persona {
   
    static conteo=0;
    personas =[];
    constructor(id='sin id',nombre='sin nombre',email='sin email',clave='sin clave',rol='sin rol') {
        this.id = id;
        this.nombre =nombre;
        this.email = email;
        this.clave = clave;
        this.rol = rol;
        Persona.conteo++;
    }
   

    editar(id,nombre,email,clave,rol) {
       this.id = id;
       this.nombre = nombre;
       this.email = email;
       this.clave = clave;
       this.rol = rol;
       
    }
    guardar(persona){
        this.personas.push({persona});
    }
  
    llenarObjeto() {       
            document.getElementById("tableD").innerHTML +=
            "<tr>"+
                "<td>" +this.id+ "</td>"+
                "<td>"+this.nombre+"</td>"+
                "<td>"+this.email+"</td>"+
                "<td>"+this.clave+"</td>"+
                "<td>"+this.rol+"</td>"+
                "<td><button onclick='Editar();' class='btn btn-primary mx-2'> editar </button>"+
                "<button onclick='Eliminar();' class='btn btn-danger'> Eliminar </button></td>"+
            "</tr>";
    }

    // actualizarDatos(array){
    //     for (let index = 0; index <= array.length; index++) {
    //         if (array[index].id==document.getElementById('cc').value) {
    //             document.getElementById("tableD").innerHTML+= 
    //             "<tr>"+
    //             "<td>" +this.id+ "</td>"+
    //             "<td>"+this.nombre+"</td>"+
    //             "<td>"+this.email+"</td>"+
    //             "<td>"+this.clave+"</td>"+
    //             "<td>"+this.rol+"</td>"+
    //             "<td><button onclick='Editar();' class='btn btn-primary mx-2'> editar </button>"+
    //             "<button onclick='Eliminar();' class='btn btn-danger'> Eliminar </button></td>"+
    //             "</tr>";
    //         }
            
    //     }
            
            
    //     }
    }

    







        // contador++;
        // var index = contador;


    //         "<button type='button' class='btn btn-warning' data-bs-toggle='modal' data-bs-target='#noc' onclick='actualizarPersona(" +
    //         index +
    //         ")'>Actualizar</button>" +
    //         "</td><td>" +
    //         "<button type='button' class='btn btn-danger' onclick='eliminarPersona(" +
    //         index +
    //         ")'>Eliminar</button> " +
    //         "</td></tr>";