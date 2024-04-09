function leerArchivo(e){
    let archivo = e.target.files[0];
    if(!archivo) {
        return;
    }
    let lector = new FileReader();
    lector.onload = function(e) {
        let contenido = e.target.result;
        console.log(contenido);
        let objArchivo = JSON.parse(contenido);
        mostrarContenido(objArchivo);
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    console.log(contenido);
    let tableBody = document.getElementById('principal');
    let body = "";
    for(let i=0; i<contenido.length; i++){
        body +=  `
        <tr>
            <td>${contenido[i].nombre_pez}</td>
            <td><img src="${contenido[i].ruta_img}"/></td>
        </tr>
    `
    console.log(contenido[i].ruta_img)
    }
    tableBody.innerHTML = body;
}
document.getElementById('file-input').addEventListener('change', leerArchivo, false);