
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



















