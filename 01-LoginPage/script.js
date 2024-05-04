// when clicking the sign up button it should the (Login Page) => SignUp Page
// the h2 should add in the word create (Create Name)
// Make a random password generator

function passwordGenerator(){
    let passwordLenth = 24
    
    //
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const numbers = "01234567890";
    const specialChars = "-/:;()$&@.,?![]{}#%^*+_\|~<>€£¥";
    
    
};

document.getElementById("sign-btn").onclick = function(){
    //login page => SignUp page
    document.getElementById("page").textContent = "SignUp Page";

    //Sign Up information fill in change
    document.getElementById("username").textContent = "Create Username";
    document.getElementById("number").textContent = "Fill in Number";
    document.getElementById("password").textContent = "Create Password";

    //Login btn => SignUp btn
    document.getElementById("login-btn"). textContent = "SignUp";


    document.getElementById("question").textContent = "";
    document.getElementById("sign-btn").textContent = "";
};