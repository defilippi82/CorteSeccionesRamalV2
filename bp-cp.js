const canvas = document.getElementById("micanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
const trabajo = new Image();
const trabajo2 = new Image();
img.src = "imagenes/esquemaCom.png";
trabajo.src = "imagenes/trabajo.png";
trabajo2.src = "imagenes/trabajo2.png";

img.onload = function(){
  ctx.drawImage(img, 0, 0, 900, 400);
}

const tabla = document.getElementById("tabla")



function resaltarIguales() {
  let seccionesRepetidas = {};
  let filasResaltadas = new Set(); // Conjunto de índices de filas que deben ser resaltadas

  // Recorrer todas las filas de la tabla
  for (var i = 0; i < tabla.rows.length; i++) {
    var secciones = tabla.rows[i].cells[2].innerHTML.split(","); // Obtener las secciones como un arreglo de valores
    
    // Recorrer las secciones de la fila actual
    for (var j = 0; j < secciones.length; j++) {
      var seccion = secciones[j].trim(); // Eliminar espacios en blanco alrededor de cada sección
      
      // Verificar si la sección ya se encontró en otra fila
      if (seccionesRepetidas[seccion]) {
        seccionesRepetidas[seccion].push(i); // Agregar el índice de la fila actual al arreglo de filas repetidas
      } else {
        seccionesRepetidas[seccion] = [i]; // Crear un nuevo arreglo con el índice de la fila actual
      }
    }
  }

  // Recorrer todas las filas de la tabla nuevamente para aplicar el resaltado
  for (var i = 0; i < tabla.rows.length; i++) {
    var secciones = tabla.rows[i].cells[2].innerHTML.split(","); // Obtener las secciones como un arreglo de valores
    var tieneRepetidos = false; // Variable para indicar si la fila tiene secciones repetidas en otras filas

    // Recorrer las secciones de la fila actual
    for (var j = 0; j < secciones.length; j++) {
      var seccion = secciones[j].trim(); // Eliminar espacios en blanco alrededor de cada sección

      // Verificar si la sección se repite en otras filas
      if (seccionesRepetidas[seccion].length > 1) {
        tieneRepetidos = true;
        break;
      }
    }

    // Agregar o quitar el índice de la fila del conjunto de filas resaltadas
    if (tieneRepetidos) {
      filasResaltadas.add(i);
    } else {
      filasResaltadas.delete(i);
    }
    if (tieneRepetidos) {
      dibujarTrabajo2();
    } else {
      dibujarTrabajo();
    }
  }

  // Aplicar el resaltado a las filas correspondientes
  for (var i = 0; i < tabla.rows.length; i++) {
    if (filasResaltadas.has(i)) {
      tabla.rows[i].classList.add("resaltado");
    } else {
      tabla.rows[i].classList.remove("resaltado");
    }
  }
}


function dibujarTrabajo() {
 // ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de dibujar
  
  for (var i = 0; i < tabla.rows.length; i++) {
    var secciones = tabla.rows[i].cells[2].innerHTML.split(","); // Obtener las secciones como un arreglo de valores
    
    for (var j = 0; j < secciones.length; j++) {
      var seccion = secciones[j].trim(); // Eliminar espacios en blanco alrededor de cada sección
      
      switch (seccion) {
        case "8":
          ctx.drawImage(trabajo, 0, 30, 25, 25);
          break;
        case "7":
          ctx.drawImage(trabajo, 0, 40, 25, 25);
          break;
        case "6":
          ctx.drawImage(trabajo, 0, 50, 25, 25);
          break;
        case "5":
          ctx.drawImage(trabajo, 0, 60, 25, 25);
          break;
        case "4":
          ctx.drawImage(trabajo, 0, 70, 25, 25);
          break;
        case "3":
          ctx.drawImage(trabajo, 0, 80, 25, 25);
          break;
        case "2":
          ctx.drawImage(trabajo, 0, 90, 25, 25);
          break;
        case "1":
          ctx.drawImage(trabajo, 0, 100, 25, 25);
          break;
        case "10/14":
          ctx.drawImage(trabajo, 180, 90, 50, 50);
          break;
        case "11/15":
          ctx.drawImage(trabajo, 190, 90, 50, 50);
          break;
        case "13/17":
          ctx.drawImage(trabajo, 210, 90, 50, 50);
          break;
        case "12/16":
          ctx.drawImage(trabajo, 220, 90, 50, 50);
          break;
        case "18/19":
          ctx.drawImage(trabajo, 300, 90, 50, 50);
          break;
        case "40/41":
          ctx.drawImage(trabajo, 265, 60, 50, 50);
          ctx.drawImage(trabajo, 50, 250, 50, 50);
          break;
        case "20/21":
          ctx.drawImage(trabajo, 550, 90, 50, 50);
          break;
        case "42/43":
          ctx.drawImage(trabajo, 200, 250, 50, 50);
          break;
        case "22/23":
          ctx.drawImage(trabajo, 700, 90, 50, 50);
          ctx.drawImage(trabajo, 200, 170, 50, 50);

          break;
        case "44/45":
          ctx.drawImage(trabajo, 275, 250, 50, 50);
          break;
        case "24/25":
          ctx.drawImage(trabajo, 375, 170, 50, 50);
          break;
        case "46/47":
          ctx.drawImage(trabajo, 450, 250, 50, 50);
          break;
        case "26/27":
          ctx.drawImage(trabajo, 500, 170, 50, 50);
          break;
        case "48/49":
          ctx.drawImage(trabajo, 650, 250, 50, 50);
          break;
        case "28/29":
          ctx.drawImage(trabajo, 625, 170, 50, 50);
          break;
        case "60/61":
          ctx.drawImage(trabajo, 775, 250, 50, 50);
          break;
        case "50/51":
          ctx.drawImage(trabajo, 350, 325, 50, 50);
          break;
        case "52/53":
          ctx.drawImage(trabajo, 550, 325, 50, 50);
          break;
        case "Dep. Victoria":
          ctx.drawImage(trabajo, 450, 150, 50, 50);
          break;
        case "Dep. Suárez":
          ctx.drawImage(trabajo, 850, 300, 50, 50);
          break;
      }
    }
    
    if (secciones.length > 1) {
      tabla.rows[i].classList.add("resaltado"); // Agregar la clase "resaltado" a las filas con múltiples secciones
    } else {
      tabla.rows[i].classList.remove("resaltado"); // Quitar la clase "resaltado" de las filas con una sola sección
    }
  }
}
function dibujarTrabajo2() {
  
  for (var i = 0; i < tabla.rows.length; i++) {
    var secciones = tabla.rows[i].cells[2].innerHTML.split(","); // Obtener las secciones como un arreglo de valores
    
    for (var j = 0; j < secciones.length; j++) {
      var seccion = secciones[j].trim(); // Eliminar espacios en blanco alrededor de cada sección
      
      switch (seccion) {
        case "8":
          ctx.drawImage(trabajo2, 20, 30, 25, 25);
          break;
        case "7":
          ctx.drawImage(trabajo2, 20, 40, 25, 25);
          break;
        case "6":
          ctx.drawImage(trabajo2, 20, 50, 25, 25);
          break;
        case "5":
          ctx.drawImage(trabajo2, 20, 60, 25, 25);
          break;
        case "4":
          ctx.drawImage(trabajo2, 20, 70, 25, 25);
          break;
        case "3":
          ctx.drawImage(trabajo2, 20, 80, 25, 25);
          break;
        case "2":
          ctx.drawImage(trabajo2, 20, 90, 25, 25);
          break;
        case "1":
          ctx.drawImage(trabajo2, 20, 100, 25, 25);
          break;
        case "10/14":
          ctx.drawImage(trabajo2, 220, 90, 50, 50);
          break;
        case "11/15":
          ctx.drawImage(trabajo2, 240, 90, 50, 50);
          break;
        case "13/17":
          ctx.drawImage(trabajo2, 250, 90, 50, 50);
          break;
        case "12/16":
          ctx.drawImage(trabajo2, 260, 90, 50, 50);
          break;
        case "18/19":
          ctx.drawImage(trabajo2, 340, 90, 50, 50);
          break;
        case "40/41":
          ctx.drawImage(trabajo2, 225, 60, 50, 50);
          ctx.drawImage(trabajo2, 20, 250, 50, 50);
          break;
        case "20/21":
          ctx.drawImage(trabajo2, 590, 90, 50, 50);
          break;
        case "42/43":
          ctx.drawImage(trabajo2, 230, 250, 50, 50);
          break;
        case "22/23":
          ctx.drawImage(trabajo2, 740, 90, 50, 50);
          ctx.drawImage(trabajo2, 240, 170, 50, 50);
          break;
        case "44/45":
          ctx.drawImage(trabajo2, 290, 250, 50, 50);
          break;
        case "24/25":
          ctx.drawImage(trabajo2, 370, 170, 50, 50);
          break;
        case "46/47":
          ctx.drawImage(trabajo2, 465, 250, 50, 50);
          break;
        case "26/27":
          ctx.drawImage(trabajo2, 495, 170, 50, 50);
          break;
        case "48/49":
          ctx.drawImage(trabajo2, 695, 250, 50, 50);
          break;
        case "28/29":
          ctx.drawImage(trabajo2, 620, 170, 50, 50);
          break;
        case "60/61":
          ctx.drawImage(trabajo2, 800, 250, 50, 50);
          break;
        case "50/51":
          ctx.drawImage(trabajo2, 365, 325, 50, 50);
          break;
        case "52/53":
          ctx.drawImage(trabajo2, 515, 325, 50, 50);
          break;
        case "Dep. Victoria":
          ctx.drawImage(trabajo2, 415, 150, 50, 50);
          break;
        case "Dep. Suárez":
          ctx.drawImage(trabajo2, 825, 300, 50, 50);
          break;
      }
    }
      
  }
}

let tbody = document.querySelector('tbody');
let srNo = 0

function agregarFila() {
      let tbody = document.querySelector('tbody');
      let srNo = tbody.rows.length + 1;
      let responsable = document.querySelector('#responsables').value;
      let secciones = '';
      let checkboxes = document.getElementsByName("secciones");
      if (tbody.rows.length > 0) {
        let ultimaFila = tbody.rows[tbody.rows.length -1];
        srNo = parseInt(ultimaFila.cells[0].textContent) + 1;
      }
      
      for (var i =0; i< checkboxes.length; i++){
        if (checkboxes[i].checked){
          secciones += checkboxes[i].value + ', ';
        }
        checkboxes[i].checked = false;
        checkboxes[i].checked = false; // Desmarcar el checkbox
      }
        secciones = secciones.slice(0, -2);
  let fila = '<tr>';
  fila += '<td>' + srNo + '</td>';
  fila += '<td>' + responsable + '</td>';
  fila += '<td>' + secciones + '</td>';
  fila += '</tr>';
  tbody.innerHTML += fila;
  dibujarTrabajo();
  resaltarIguales();
  responsables.focus();
  document.querySelector('#responsables').value= "";
  }
  
  function borrarFila() {
  var srNo = document.getElementById("viaLibre").value;
  var tabla = document.getElementById("tabla");
  
  // Recorremos cada fila de la tabla
  for (var i = 0; i < tabla.rows.length; i++) {
    // Si el valor de srNo de la fila actual es igual al valor seleccionado en el cuadro de texto
    if (tabla.rows[i].cells[0].innerHTML === srNo) {
      // Borramos la fila
      tabla.deleteRow(i);
      borrarTrabajo();
      img.onload();
      dibujarTrabajo();
      resaltarIguales(); // Actualizar el resaltado de las filas
      document.getElementById("viaLibre").value= "";
      viaLibre.focus();
    }
    document.getElementById("viaLibre").value = '';
  }
}
function borrarTrabajo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas antes de dibujar

  
  for (var i = 0; i < tabla.rows.length; i++) {
    var secciones = tabla.rows[i].cells[2].innerHTML.split(","); // Obtener las secciones como un arreglo de valores
    
    for (var j = 0; j < secciones.length; j++) {
      var seccion = secciones[j].trim(); // Eliminar espacios en blanco alrededor de cada sección
      
      switch (seccion) {
        case "8":
          ctx.drawImage(trabajo, 0, 30, 25, 25);
          break;
        case "7":
          ctx.drawImage(trabajo, 0, 40, 25, 25);
          break;
        case "6":
          ctx.drawImage(trabajo, 0, 50, 25, 25);
          break;
        case "5":
          ctx.drawImage(trabajo, 0, 60, 25, 25);
          break;
        case "4":
          ctx.drawImage(trabajo, 0, 70, 25, 25);
          break;
        case "3":
          ctx.drawImage(trabajo, 0, 80, 25, 25);
          break;
        case "2":
          ctx.drawImage(trabajo, 0, 90, 25, 25);
          break;
        case "1":
          ctx.drawImage(trabajo, 0, 100, 25, 25);
          break;
        case "10/14":
          ctx.drawImage(trabajo, 180, 90, 50, 50);
          break;
        case "11/15":
          ctx.drawImage(trabajo, 190, 90, 50, 50);
          break;
        case "13/17":
          ctx.drawImage(trabajo, 210, 90, 50, 50);
          break;
        case "12/16":
          ctx.drawImage(trabajo, 220, 90, 50, 50);
          break;
        case "18/19":
          ctx.drawImage(trabajo, 300, 90, 50, 50);
          break;
        case "40/41":
          ctx.drawImage(trabajo, 265, 60, 50, 50);
          ctx.drawImage(trabajo, 50, 250, 50, 50);
          break;
        case "20/21":
          ctx.drawImage(trabajo, 550, 90, 50, 50);
          break;
        case "42/43":
          ctx.drawImage(trabajo, 200, 250, 50, 50);
          break;
        case "22/23":
          ctx.drawImage(trabajo, 700, 90, 50, 50);
          ctx.drawImage(trabajo, 200, 170, 50, 50);

          break;
        case "44/45":
          ctx.drawImage(trabajo, 275, 250, 50, 50);
          break;
        case "24/25":
          ctx.drawImage(trabajo, 375, 170, 50, 50);
          break;
        case "46/47":
          ctx.drawImage(trabajo, 450, 250, 50, 50);
          break;
        case "26/27":
          ctx.drawImage(trabajo, 500, 170, 50, 50);
          break;
        case "48/49":
          ctx.drawImage(trabajo, 650, 250, 50, 50);
          break;
        case "28/29":
          ctx.drawImage(trabajo, 625, 170, 50, 50);
          break;
        case "60/61":
          ctx.drawImage(trabajo, 775, 250, 50, 50);
          break;
        case "50/51":
          ctx.drawImage(trabajo, 350, 325, 50, 50);
          break;
        case "52/53":
          ctx.drawImage(trabajo, 550, 325, 50, 50);
          break;
        case "Dep. Victoria":
          ctx.drawImage(trabajo, 450, 150, 50, 50);
          break;
        case "Dep. Suárez":
          ctx.drawImage(trabajo, 850, 300, 50, 50);
          break;

      }
    }
    
    if (secciones.length > 1) {
      tabla.rows[i].classList.add("resaltado"); // Agregar la clase "resaltado" a las filas con múltiples secciones
    } else {
      tabla.rows[i].classList.remove("resaltado"); // Quitar la clase "resaltado" de las filas con una sola sección
    }
  }
}
function cargarReloj(){

    // Haciendo uso del objeto Date() obtenemos la hora, minuto y segundo 
    var fechahora = new Date();
    var hora = fechahora.getHours(); 
    var minuto = fechahora.getMinutes(); 
    var segundo = fechahora.getSeconds(); 

    /*// Variable meridiano con el valor 'AM' 
    var meridiano = "AM";
    
    
    // Si la hora es igual a 0, declaramos la hora con el valor 12 
    if(hora == 0){

        hora = 12;
        
    }
    
    // Si la hora es mayor a 12, restamos la hora - 12 y mostramos la variable meridiano con el valor 'PM' 
    if(hora > 12) {

        hora = hora - 12;

        // Variable meridiano con el valor 'PM' 
        meridiano = "PM";

    }*/
    
    // Formateamos los ceros '0' del reloj 
    hora = (hora < 10) ? "0" + hora : hora;
    minuto = (minuto < 10) ? "0" + minuto : minuto;
    segundo = (segundo < 10) ? "0" + segundo : segundo;
    
    // Enviamos la hora a la vista HTML 
    var tiempo = hora + ":" + minuto + ":" + segundo /*+ " " + meridiano*/;    
    document.getElementById("dia-hora").innerText = tiempo;
    document.getElementById("dia-hora").textContent = tiempo;

    // Cargamos el reloj a los 500 milisegundos 
    setTimeout(cargarReloj, 500);
    
}

// Ejecutamos la función 'CargarReloj' 
cargarReloj();
  

