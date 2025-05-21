
<<<<<<< HEAD
// const users=[
//    {usertext:""}
// ]
// localStorage.setItem('users',JSON.stringify(users));
// let storedusers=JSON.parse(localStorage.getItem('user'));
// // console.log(storedusers);
document.getElementById("loginForm").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent form submission

    // Input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Error containers
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear old errors
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Validation flags
    let isValid = true;

    // Email validation
    if (email === "") {
        emailError.innerHTML = "Email is required.";
        isValid = false;
    } 
      if (!/^\S+@\S+\.\S+$/.test(email)) {
         emailError.innerHTML = "Invalid email format.";
         isValid = false; }
    // Password validation
    if (password === "") {
        passwordError.innerHTML = "Password is required.";
        isValid = false;
  if (!/^\S+@\S+\.\S+$/.test(password)) {
       passwordError.innerHTML = "Invalid email format.";
       isValid = false;     }

    } else {
        if (password.length < 6) {
            passwordError.innerHTML += "Password must be at least 6 characters long.<br>";
            isValid = false;
        }
        if (!/[A-Z]/.test(password)) {
            passwordError.innerHTML += "Password must contain at least one uppercase letter.<br>";
            isValid = false;
        }
        if (!/[0-9]/.test(password)) {
            passwordError.innerHTML += "Password must contain at least one number.<br>";
            isValid = false;
        }
    }

    // if (isValid) {
    //     alert("Login successful!");
    //     // Proceed with login logic here (e.g. send request to server)
    // }
});



















=======

//code of post button and store in the locol storage

const array=JSON.parse(localStorage.getItem("value"))||[];
function postMessage(){
    const users=[{UserName:"",Text:""}]
    console.log(localStorage.users.UserName,Text);
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
         </span> <button onclick="delet(${r})">delet</button>
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

  
// IF Application.Status == "Submitted"
//    THEN Inspector.ActionRequired = TRUE



     function deleteItem() {
   
    const Item=document.getElementById("text");
    if(Item){
      Item.value=""
    }
}
>>>>>>> 778c6cc (ft/implement-homepage)
