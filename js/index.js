//DESAFIO NRO 3. JUAN LUIS SILVA 

//MI ASIGNATURA FAVORITA EN LA UNIVERSIDAD 

let asignature;
do {
         asignature = prompt("Hola, porfavor ingresa tu Asignatura Favorita (exit-para salir)");
         alert("Tu Asignatura favorita es: " + asignature);
if (asignature == "matematicas") {
         alert("Te recomiendo Algebra de Baldor y Julio Profe");
} else {
         console.log("Esa asignatura es Genial.");
 }
 } while (asignature != "exit"){
        alert("GRACIAS POR TU VISITA");
    }


//LISTA DE CLASES QUE VEMOS EN LA UNIVERSIDAD 

 let universityClass = "";
for (let i = 1; i <= 3; i++) {
    let asignature = prompt("Porfavor, escribe el nombre de tu Asignatura nro. " + i);
    universityClass = universityClass + asignature + "\n";    
}
alert(universityClass);



