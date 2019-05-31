

function valider(){

    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let numero = document.getElementById('numero');
    let email = document.getElementById('email');
    let pass1 = document.getElementById('password1');
    let pass2 = document.getElementById('password2');

    var emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;     
    var emailAdr = document.getElementById('email').value; 
    var emailResult = emailRegex.test(emailAdr);

    var passwordRegex =/^((?=.*\d)(?=.*[A-Z]).{4,12})$/; 
    var passwordResult=passwordRegex.test(pass1.value); 

    if (name.value==""){alert("Entrer votre nom")}

    else if (address.value==""){alert("Entrer votre adresse")}
    
    else if (numero.value==""){alert("Entrer votre numéro telephone")}
    
    else if (email.value==""){alert("Entrer votre E-mail")}

    else if (emailResult==false){alert ("Email non valide, veillez ressayer")}

    else if (passwordResult==false){alert("Mot de passe doit etre entre 4 et 12 characteres")}

    else if (pass1.value!==pass2.value){alert("Veillez saisir le meme mot de passe")}

    else if (pass1.value==pass2.value){alert("Compte est creer avec succes")}
}


function connexion(){

    let logmail=document.getElementById('email-lab');
    let logpass=document.getElementById('pwd-lab');

    if (logmail.value==""){alert ("Enter votre email")}

    else if (logpass.value==""){alert ("Entrer votre mot de passe")}

    else {alert("Bienvenue")}

    }