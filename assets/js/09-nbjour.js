let  mois = parseInt(prompt("Veuillez le numéro d'un mois (entre 1 et 12)"));
const JANVIER = 31;
const FEVRIER = 28;
const MARS = 31;
const AVRIL=30;
const MAI=31;
const JUIN=30;
const JUILLET=31;
const AOUT=31;
const SEPTEMBRE=30;
const OCTOBRE=31;
const NOVEMBRE=30;
const DECEMBRE=31;
if(mois == 1){
    document.write("<p> Il y a "+ JANVIER +" jours dans ce mois-ci</p>")
}else{
    if(mois == 2){
        document.write("<p> Il y a "+ FEVRIER +" jours dans ce mois-ci</p>")
    }else{
        if(mois == 3){
            document.write("<p> Il y a "+ MARS +" jours dans ce mois-ci</p>")
        }else{
            if(mois == 4){
                document.write("<p> Il y a "+ AVRIL +" jours dans ce mois-ci</p>")
            }else{
                if(mois == 5){
                    document.write("<p> Il y a "+ MAI +" jours dans ce mois-ci</p>")
                }else{
                    if(mois == 6){
                        document.write("<p> Il y a "+ JUIN +" jours dans ce mois-ci</p>")
                    }else{
                        if(mois == 7){
                            document.write("<p> Il y a "+ JUILLET +" jours dans ce mois-ci</p>")
                        }else{
                            if(mois == 8){
                                document.write("<p> Il y a "+ AOUT +" jours dans ce mois-ci</p>")
                            }else{
                               if(mois == 9){
                                document.write("<p> Il y a "+ SEPTEMBRE +" jours dans ce mois-ci</p>")
                                }else{
                                    if(mois == 10){
                                        document.write("<p> Il y a "+ OCTOBRE +" jours dans ce mois-ci</p>")
                                    }else{
                                        if(mois == 11){
                                            document.write("<p> Il y a "+ NOVEMBRE +" jours dans ce mois-ci</p>")
                                        }else{
                                            if(mois == 12){
                                                document.write("<p> Il y a "+ DECEMBRE +" jours dans ce mois-ci</p>")
                                            }else{
                                                alert("Erreur : il n'existe pas de "+ mois +" eme mois")
                                            } 
                                        } 
                                    } 
                                } 
                            }
                        }
                    }
                }
                
            }
        }
    }
}
switch(mois){
    case 1:
       document.write("<p> Il y a "+ JANVIER +" jours dans ce mois-ci</p>");
        break;
    case 2:
        document.write("<p> Il y a "+ FEVRIER +" jours dans ce mois-ci</p>");
        break;
    case 3:
        alert('demain sera Mardi');
        break;
    case 4:
        alert('demain sera Mercredi');
        break;
    case 5:
        alert('demain sera Jeudi');
        break;
    case 6:
        alert('demain sera Vendredi');
        break;
    case 7:
        alert('demain sera Samedi');
        break;
    default:
        alert('Entre un jours de la semaine valide');
}