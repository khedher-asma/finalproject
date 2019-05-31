
function categ(){
    let categorie=document.getElementById('categorie');
    let pneu=document.getElementById('pneu-cat');
    


    if (categorie.value == "Pneu"){
        pneu.style.display= 'flex'
   }
   else{
    pneu.style.display= 'none'
   }
}

function valider(){
   
    let pic=document.getElementById('filer_input2');
    let title=document.getElementById('titre');
    let price=document.getElementById('prix');
    let place=document.getElementById('exampleFormControlSelect1');


    var priceRegex=/^[0-9]*$/;
    var priceResult=priceRegex.test(price.value);

    


if (pic.value==""){alert("ajouter une photo")}

else if (title.value==""){alert ("Entrer une description detaillée de votre article")}

else if (price.value==""){alert ("Definir un prix")}

else if (priceResult==false){alert("Prix incorrect ")}

else if (place.value=="Gouvernorat"){alert ("choisir votre emplacement")}

else if (categorie.value=="Catégories"){alert ("Choisir une catégorie")}

else{alert ("Votre annonce est creer avex succes")}


}