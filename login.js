valider=()=>{

    var emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;     
    var emailAdr = document.getElementById('email').value; 
    var emailResult = emailRegex.test(emailAdr);
   
   
    if (document.getElementById('name').value==""){
        alert("Entrer votre nom");    
    }
    else if (document.getElementById('address').value=""){
        alert("Entrer votre adresse")
    }
    else if (document.getElementById('numero').value=""){
        alert("Entrer votre numéro telephone")
    }
    else if (document.getElementById('email').value=""){
        alert("Entrer votre E-mail")
    }
   
   


    

}