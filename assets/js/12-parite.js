/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }else{
        console.log(i + " est impair");
    }
}*/
let nombre = parseInt(prompt("Donne un nombre","Exemple : 10"));
let nbTour = 10;
while(nbTour > 0){
    if (nombre % 2 === 0) {
        console.log(nombre + " est pair");
    }else{
        console.log(nombre + " est impair");
    }
    nombre ++;
    nbTour --;
}