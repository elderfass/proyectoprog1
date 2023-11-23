function enviardatos(){
    var cc = document.getElementById('CC').value;
    var name = document.getElementById('Nombre').value;
    var emal = document.getElementById('email').value;
    var pw = document.getElementById('pwd').value;
    var rol = document.getElementById('Rol').value;


    var table = document.getElementById("tableD");
    var rows = table.getElementsByTagName("tr");

for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    if (cells.length > 0) {
        if (cells[0].innerText === cc && cells[1].innerText === name && cells[2].innerText === emal && cells[3].innerText === pw && cells[4].innerText === rol) {
            return;
        }
    }
}

table.innerHTML += "<tr> <td>"+ cc +"</td> <td>"+ name +"</td> <td>"+ emal +"</td> <td>"+ pw +"</td> <td>"+ rol +"</td> </tr>";
}