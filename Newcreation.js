
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
