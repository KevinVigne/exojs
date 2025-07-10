let jour = prompt("Veuillez saisir un jour de la semaine","Ex : Mardi");
let semaine =["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
if(jour == semaine[0]){
    alert("Demain nous seront "+semaine[1]);
}else{
    if(jour == semaine[1]){
        alert("Demain nous seront "+semaine[2]);
    }else{
        if(jour == semaine[2]){
            alert("Demain nous seront "+semaine[3]);
        }else{
            if(jour == semaine[3]){
                alert("Demain nous seront "+semaine[4]);
            }else{
                if(jour == semaine[4]){
                    alert("Demain nous seront "+semaine[5]);
                }else{
                    if(jour == semaine[5]){
                        alert("Demain nous seront "+semaine[6])
                    }else{
                        if(jour == semaine[6]){
                            alert("Demain nous seront "+semaine[0])
                        }else{
                            alert("Erreur : Jour de la semaine non reconnu")
                        }
                    }
                }
            }
        }   
    }
}