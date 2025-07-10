/*let tour = 0;
 const TOURFINAL = 10; (pré amélioration)
while(tour < TOURFINAL){
    tour++;
    document.write("<p>" + "C'est le tour de manège n°" + tour + "</p>")
}*/
let tour = 0;
let nbtour = parseInt(prompt("Veuillez saisir un nombre de tour de manège"));
while(tour < nbtour){
    document.write("<p>"+"C'est le tour de manège n°" + tour + "</p>");
    tour++;
}

