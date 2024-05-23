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

//Get the values of the Username, Number, and Password and save in local storage
let username = "";
let userNumber = "";
//declare passKey outside the event listener to keep its value
let passKey = "";

let infoList = document.getElementsByClassName("info");
function saveData(){
    localStorage.setItem("data", infoList.innerHTML);
}

document.getElementById("sign-btn").onclick = function(){
    //login page => SignUp page
    document.getElementById("page").textContent = "SignUp Page";
    //Sign Up information fill in change
    document.getElementById("username").textContent = "Create Username";
    document.getElementById("number").textContent = "Fill in Number";
    document.getElementById("password").textContent = "Create Password";
    //Login btn => SignUp btn
    document.getElementById("login-btn").textContent = "SignUp";
    document.getElementById("question").textContent = "";


    //An event listener that will allow me to give the user to be generated a random password
    let question = document.getElementById("pass-word");
    let questionAsked = 1;

    question.addEventListener("click", (e) => {
        if (passKey === "" && questionAsked === 1) {
            //increment questionAsked by 1 to keep user from getting the pop-up massage multiple times
            questionAsked++;

            let answer = window.prompt("Do you want to generate a random password? Yes or No");
            answer = answer ? answer.toUpperCase() : "";
    
            if(answer === "YES") {
                passKey = passwordGenerator();
                document.getElementById("pass-word").value = passKey;
                saveData();
            }
            else if( answer === "NO"){
                //increment questionAsked by 1 to keep user from getting the pop-up massage multiple times
                passKey = document.getElementById("pass-word").value;
                saveData();
            }
        }


        
        const signInBTN = document.getElementById("login-btn");
        // when i click on the signInBTN ill be able to save my input values and use them later to log in
        signInBTN.addEventListener('click', (e)=>{
            passKey = document.getElementById("pass-word").value;
            username = document.getElementById("username").value;
            userNumber = document.getElementById("user-number").value;
            document.location = "abour.html";
            console.log(passKey)
            console.log(userNumber)
            console.log(username)

        });
    });

};
// Login
// I want to log in with my sign-in input data 
// if I get one thing wrong, I won't allow access