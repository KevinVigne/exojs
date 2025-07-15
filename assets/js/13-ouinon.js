let reponse = prompt("Veuillez entrer une phrase" , "Exemple: oui / non");
function ouinon(reponse){
    if ((reponse.includes("oui")) && (reponse.includes("non"))){
        alert("Tu as perdu!")
    }else{
        while((!(reponse.includes("oui"))) &&(!(reponse.includes("non")))){
            reponse = prompt("Veuillez entrer une phrase" , "Exemple: oui / non");
        }
    }
}
ouinon(reponse);