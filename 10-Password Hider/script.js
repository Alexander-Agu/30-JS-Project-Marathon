// A password hider when you entering your password to prevent other people from viewing in

const enterPassword = document.getElementById("js-enterPass");
const reEnterPassword = document.getElementById("js-reEnterPass");
const passHideButton = document.getElementById("js-pass-hide");
const confirmHideButton = document.getElementById("js-confirm-hide");

passHideButton.addEventListener("click", () => {
  if (enterPassword.getAttribute("type") == "text") {
    enterPassword.setAttribute("type", "password");
    passHideButton.innerText = "unhide";
  } else {
    enterPassword.setAttribute("type", "text");
    passHideButton.innerText = "hide";
  }
});

confirmHideButton.addEventListener("click", () => {
  if (reEnterPassword.getAttribute("type") == "text") {
    reEnterPassword.setAttribute("type", "password");
    confirmHideButton.innerText = "unhide";
  } else {
    reEnterPassword.setAttribute("type", "text");
    confirmHideButton.innerText = "hide";
  }
});

// hideButton.addEventListener('click', (e)=>{
//     let initialValue = enterPassword.value
//     console.log(initialValue)
//     if(enterPassword.value){
//         enterPassword.value = hidePassword(enterPassword.value);
//     }

//     else if(enterPassword.value !== initialValue){
//         enterPassword.value = initialValue;
//     }
// })

// // Changes Password to hidden Password
// function hidePassword(password){
//     let passwordLenth = password.length;
//     let hiddenPassword = ['a','l','e','x'];

//     hiddenPassword.forEach(function(names, index){
//         console.log()
//     });

// };

// hidePassword("Alexander")
