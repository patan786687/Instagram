const username = document.getElementById("username")
const password = document.getElementById("password")
const Name = document.querySelectorAll("App-LoginInput")



function logic(){
    if(username==="Patan" && password===12345){
        alert("Login Success")
    }else{
        alert("Invalid username or password")
    }
   return logic() 
}