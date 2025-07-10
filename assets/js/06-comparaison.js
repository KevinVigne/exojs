let nb_1 = parseFloat(prompt("Veuillez choisir un nombre"));
let nb_2 = parseFloat(prompt("Veuillez choisir un deuxième nombre"));
if(nb_1 < nb_2){
    document.write("<h2>"+nb_1 + " < "+nb_2+"</h2>");
}else{
 if(nb_1 > nb_2){
    document.write("<h2>"+nb_1 + " > "+nb_2+"</h2>");
 }else{
    if(nb_1 == nb_2){
        document.write("<h2>"+nb_1 + " = "+nb_2+"</h2>");
    }else{
        alert("Erreur : Nombre inconnu");
    }
 }
}