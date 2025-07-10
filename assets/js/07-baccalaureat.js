let moyenne = parseFloat(prompt("Moyenne du candidat :"));
let resultat;
if(!isNaN(moyenne)){
    if(moyenne < 10){
        resultat = "Recalé";
        document.write("<p>"+resultat+"</p>");
    }else{
        if((moyenne >= 10) &&( moyenne < 12 )){
            resultat = "Reçu";
            document.write("<p>"+resultat+"</p>");
        }else{
            if(moyenne >= 12){
                if(moyenne > 20){
                    alert("Ceci n'est pas une moyenne valide")
                }else{
                    resultat = "Reçu avec mention";
                document.write("<p>"+resultat+"</p>");
                }
            }else{
                    alert("Moyenne non reconnue");
            }
        }
    }
}else{
    alert("ceci n'est pas un nombre")
}