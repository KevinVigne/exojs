let nombre1 = 5;
let nombre2 = 3;
let nombrestock = nombre1 ; //Création et stockage de l'une des valeur que l'on souhaite permuter dans une variable de stockage
nombre1 = nombre2; // nombre1 prend la valeur de nombre 2
nombre2 = nombrestock;// nombre2 prend la valeur de nombrestock initialement stockée dans nombre1
console.log("nombre1 : " + nombre1 ); // Doit afficher 3
console.log("nombre2 : " + nombre2); // Doit afficher 5