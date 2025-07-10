let heure = parseInt(prompt("Veuillez entrer une heure (Format 24H)","ex : 14 "));
let minute = parseInt(prompt("Veuillez entrer le nombre de minutes", "ex : 05"));
let seconde = parseInt(prompt("Veuillez entrer le nombre de secondes","ex : 59"));
const FORMAT = 60;
const FORMATHEURE = 24;
//Vérification de l'heure
if( (heure >= 0) && (heure < FORMATHEURE) ){
    //Vérification de la minute
    if((minute >= 0) && (minute < FORMAT)){
        //Vérification de la seconde
        if((seconde >= 0) && (seconde <FORMAT)){
            seconde++;
            //Vérification de si on passe a une nouvelle minute
            if(seconde == FORMAT){
                minute++;
                seconde = 0;
                //Vérification de si on passe a une nouvelle heure
                if(minute == FORMAT){
                    heure++;
                    minute = 0;
                    //Vérification de si on passe a une nouvelle journée
                    if(heure == FORMATHEURE){
                        heure = 0;
                        document.write("<p> Il sera "+ heure+":"+minute+":"+seconde+ " une seconde plus tard</p>")
                    }else {
                        document.write("<p> Il sera "+ heure+":"+minute+":"+seconde+ " une seconde plus tard</p>");
                    }
                }else{
                    document.write("<p> Il sera "+ heure+":"+minute+":"+seconde+ " une seconde plus tard</p>")
                }
            }else{
                document.write("<p> Il sera "+ heure+":"+minute+":"+seconde+ " une seconde plus tard</p>");
            }
        }else{
            alert("Erreur : Veuillez entrer une seconde entre 0 et 59")
        }
    }else{
        alert("Erreur : Veuillez entrer une minute entre 0 et 59")
    }
}else{
    alert("Erreur :Veuillez entrer une heure entre 0 et 24");
}