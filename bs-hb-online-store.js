function myFunction() 
{
		var email=document.getElementById("email").value;
		var re = /\S+@\S+\.\S+/;
		if(email==""){	
			document.getElementById("status").innerHTML="Please Enter Email-id!";
			return;
			}
	
		if(!/\S+@\S+\.\S+/.test(email)){
			document.getElementById("status").innerHTML="Please Enter valid E-mail id!";
			return;
			}else{
			document.getElementById("status").innerHTML="";
			}
}
