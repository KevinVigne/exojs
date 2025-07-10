let prixht = prompt("Veuillez insérer le prix Hors Taxe");
prixht = parseFloat(prixht);
let tva = 20/100;
let prixttc = prixht * tva;
let resultat = prixht + prixttc;
 document.write("<h2> "+" Le prix TTC de "+ prixht + " avec la TVA à 20% est de "+ resultat +" </h2>");