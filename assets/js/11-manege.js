/*Sans demander à l'utilisateur
for(let i = 1; i <= 10;i++){
    document.write("<p>"+"C'est le tour de manège n°" + i + "</p>");
}*/
//en demandant à l'utilisateur un nombre de tour
let tour = 0;
let nbtour = parseInt(prompt("Veuillez saisir un nombre de tour de manège"));

while(tour <= nbtour){
    document.write("<p>"+"C'est le tour de manège n°" + tour + "</p>");
    tour++;
}
