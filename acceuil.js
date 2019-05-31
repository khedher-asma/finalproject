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

var elem = document.getElementById('mySearchButton'); 
console.log(elem.getBoundingClientRect());
var yposition = elem.getBoundingClientRect().y; 
window.onscroll = function() {scrollFunction()};
document.getElementById("mySearchButton1").style.display = "none";


function scrollFunction() {
    var yposition = elem.getBoundingClientRect().y;
    var xposition= elem.getBoundingClientRect().x; 
    if (document.body.scrollTop > yposition+213 || document.documentElement.scrollTop > yposition+213) {
    document.getElementById("mySearchButton1").style.display = "block";
    


  } else {
      document.getElementById("mySearchButton1").style.display = "none";
   
    }
 }
 
function hide()
 {
     
    document.getElementById("mySearchButton1").style.display = "none";
  
 }