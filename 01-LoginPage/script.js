// when clicking the sign up button it should the (Login Page) => SignUp Page
// the h2 should add in the word create (Create Name)
// Make a random password generator

function passwordGenerator() {
    //Create the variable of all the needed characters
    const passwordLength = 9;
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const numbers = "01234567890";
    const specialChars = "-/:;()$&@.,?![]{}#%^*+_~<>€£¥";

    let allChars = uppercaseChars + lowercaseChars + numbers + specialChars;
    let password = "";

    // the random password generator should have the lenth number of passwordLenth
    // try using a loop
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}




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

    //An eventListner that will allow me to give the user to be generated a random password

    let question = document.getElementById("pass-word");

    //had a little bug i couldnt make my password show in the input
    //reason is because the passkey variable was in the eventListnert
    // declare passKey outside the event listener to keep its value
    let passKey = ""; 

    question.addEventListener("click", (e) => {
        if (passKey === "") {
            let answer = window.prompt("Do you want to generate a random password? Yes or No");
            answer = answer ? answer.toUpperCase() : "";
    
            if (answer === "YES") {
                passKey = passwordGenerator();
                document.getElementById("pass-word").value = passKey;
            }
        }
    });
    
};