

//code of post button and store in the locol storage

const array=JSON.parse(localStorage.getItem("value"))||[];
function postMessage(){
    const users=[{UserName:"",Text:"",}]
    console.log(localStorage.users.UserName,Text,);
    const text=document.getElementById("text").value;
    array.push({text});
    document.getElementById("text").value="";
    display();
    stores();
}
function display(){
    const list=document.getElementById("p");
    list.innerHTML="";
    for(let r=0;r<array.length;r++){
        list.innerHTML+=`<div>
        <span>
         ${array[r].text} <br>
         </span> <button onclick="delet(${r})">delete</button>
         </div>`
    }
}
display();
function stores(){
         localStorage.setItem("value",JSON.stringify(array));
}
function delet(r){
  array.splice(r,1)
  stores();
  display();
}
//code of creating validation in the login page

function next(){ 
  function login(){
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if(emailPattern.test(email)){
    window.location.href="blog.html"
  }
  }
  login()
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      // Clear previous errors
      document.getElementById("emailError").textContent = "";
      document.getElementById("passwordError").textContent = "";

      let isValid = true;
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      // Email validation
      
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
       if(email===""){
        document.getElementById("emailError").textContent="email cannot be empty"
        isValid=false;
       }
      else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false; 
      }
    
      // Password validation
      
       if(password===""){
        document.getElementById("passwordError").textContent="password cannot be empty"
        isValid=false;
      }
     else if(password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
          
      }
  
      if (!isValid) {
        event.preventDefault(); // Prevent form from submitting
      }
      else{
        event.preventDefault(); // Optional: prevent actual submission and redirect manually
    window.location.href = "blog.html";
      }
    });
    } 

  




     function deleteItem() {
   
    const Item=document.getElementById("text");
    if(Item){
      Item.value=""
    }
}
//  function signup(){
//    document.getElementById("signupForm").addEventListener(signup(), function(event) {
//       event.signup();

//       const username = document.getElementById("username").value;
//       const password = document.getElementById("password").value;
//       const message = document.getElementById("message");
//        if(username===""){
//         message.innerHTML="username can not be empty"
//        }
//        else{
//         window.location.href="login.html"
//        }
//        if(password===""){
//         message.innerHTML="password can not be empty"
//        }
    
//       else if(password.length < 6) {
//         message.innerHTML = 'Password must be at least 6 characters.';
//         return;
//       }
//       else if(password==="123456"){
//         window.location.href="login.html"
//       }
//       else{
//         message.innerHTML="username and password are not correct,try again"
//       }

//     });}




  function signup() {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('email').value.trim();
      const message = document.getElementById('message');

      // Clear previous message
      message.textContent = '';

      // Validation checks
      if (username===""&&password===""){
        message.innerHTML= 'username,password,email,Telpon are not be empty';
      }
      

       else if (password.length < 6) {
        message.innerHTML="Password must be at least 6 characters.";
        
      }
       
       else{

        message.textContent="Sign up successful! Redirecting to login page..."
        window.location.href='login..html'

       }
      // // If validation passes
      // alert('Sign up successful! Redirecting to login page...');
      // window.location.href = 'login.html';
    }
 


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent actual form submission

    // You could add validation or saving logic here

    // Redirect to login page
    window.location.href = "login.html";
});