let reponseUtilisateur1 = parseFloat(prompt("nombre 1"));
let reponseUtilisateur2 = parseFloat(prompt("nombre 2"));

function mafonction(a,b){
    let resultatSomme = a + b ;
    document.write(`<p> le Résultat de l'addition entre ${reponseUtilisateur1} et ${reponseUtilisateur2} est  de ${resultatSomme}  . </p>`)
}

mafonction(reponseUtilisateur1,reponseUtilisateur2);