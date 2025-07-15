let tableauOrdinateur = ["pierre","feuille","ciseau"] ;
let choixOrdinateur =  tableauOrdinateur[Math.floor(Math.random() * 3)];
console.log(choixOrdinateur);
let choixUtilisateur = prompt("Chiffoumi!","pierre-feuille-ciseau").toLowerCase;
console.log('test 1')
if(choixUtilisateur == choixOrdinateur) {
    alert("Egalité!");
}else if(((choixUtilisateur == tableauOrdinateur[0] ) && ( choixOrdinateur == tableauOrdinateur[1] ) ) || ((choixUtilisateur == tableauOrdinateur[1] ) && ( choixOrdinateur == tableauOrdinateur[2] ) ) || ((choixUtilisateur == tableauOrdinateur[2] ) && ( choixOrdinateur == tableauOrdinateur[0] ) ) ){
    alert("L'ordinateur a gagné.");
}else if(((choixUtilisateur == tableauOrdinateur[0] ) && ( choixOrdinateur == tableauOrdinateur[2] ))  || ((choixUtilisateur == tableauOrdinateur[1] ) && ( choixOrdinateur == tableauOrdinateur[0] ) ) || ((choixUtilisateur == tableauOrdinateur[2] ) && ( choixOrdinateur == tableauOrdinateur[1] ) )){
    alert("Vous avez gagné");
}
console.log('test 2')