function sendForm()
{
    var emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})$/;     
    var emailAdr = document.getElementById('emailAdress').value; 
    var emailResult = emailRegex.test(emailAdr); 
    if (document.getElementById('sujet').value==""){
        alert("entrer votre sujet");    
    }else if (emailResult==false){
        alert("email non conforme")
    }else{
        alert('votre message à été envoyé')
    }
    

}
