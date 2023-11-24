// modelo
class Persona {
    constructor(id, nombre, email, clave, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
        this.rol = rol;
    }

    llenarTabla(array, table, index) {
        var newRow = table.insertRow(index);
        for (var j = 0; j < 5; j++) {
            var cell = newRow.insertCell(j);
            switch (j) {
                case 0:
                    cell.innerText = array[index].id;
                    break;
                case 1:
                    cell.innerText = array[index].nombre;
                    break;
                case 2:
                    cell.innerText = array[index].email;
                    break;
                case 3:
                    cell.innerText = array[index].clave;
                    break;
                case 4:
                    cell.innerText = array[index].rol;
                    break;
            }
        }
    
        var editarBtn = document.createElement("button");
        editarBtn.innerText = "Editar";
        editarBtn.classList.add("btn", "btn-primary", "mx-2");
        editarBtn.addEventListener('click', (function (i) {
            return function () {
                editar(array[i], array, i);
            };
        })(index));
    
        var eliminarBtn = document.createElement("button");
        eliminarBtn.innerText = "Eliminar";
        eliminarBtn.classList.add("btn", "btn-danger");
        eliminarBtn.addEventListener('click', (function (i) {
            return function () {
                eliminar(array[i], array, i);
            };
        })(index));
        
        var cellOpciones = newRow.insertCell(5);
        cellOpciones.appendChild(editarBtn);
        cellOpciones.appendChild(eliminarBtn);
    }

    editarPersona(personad, array, table) {
        for (let index = 0; index < array.length; index++) {
            if (personad.email === array[index].email ){
                if (personad.id === array[index].id && personad.nombre === array[index].nombre && personad.clave === array[index].clave && personad.rol === array[index].rol) {
                    alert("No se puede actualizar");
                    return;
                }else{
                    array[index] = personad;
                    table.deleteRow(index);
                    this.llenarTabla(array, table, index);
                    alert("Edición realizada con éxito");
                    return;
                }
            }
        }
        return true;
    }
    
    eliminarPersona(personad, array, table) {
        for (let index = 0; index < array.length; index++) {
            if (personad.email === array[index].email) {
                array.splice(index, 1);
                table.deleteRow(index);
                contador--; // Actualizar el contador
                alert("Eliminación realizada con éxito");
                return;
            }
        }
    }

    buscar(array, index, rows) {
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            if (cells.length > 0) {
                if (cells[2].innerText === array[index].email) {
                    return false;
                }
            }
        }
        return true;
    }
}