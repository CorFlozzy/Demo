

function agregarfila(){
    let tabla = document.getElementById("TablaProducto")
    let Tablaref= tabla.getElementsByTagName("tbody")[0]
    let NuevaFila = Tablaref.insertRow(Tablaref.rows.length)
    let Celda1 = NuevaFila.insertCell(0)
    Celda1.innerText="cjhsda"
    let Celda2= NuevaFila.insertCell(1)
    Celda2.innerText="diferencia"
    let Celda3 = NuevaFila.insertCell(2)
    Celda3.innerText="83.00"
}

function eliminarfila(){
    let tabla = document.getElementById("TablaProducto")
    let Numfila= tabla.rows.length -1
    tabla.deleteRow(Numfila)
    
}

















// let atributos = tabla.attributes

// for(let a= 0; a < atributos.length;a++){
//     console.log(atributos[a])
// }

