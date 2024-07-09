// A password hider when you entering your password to prevent other people from viewing in

const enterPassword = document.getElementById('js-enterPass');
const reEnterPassword = document.getElementById('js-reEnterPass');

let hideButton = document.getElementById('js-hide').onclick = ()=>{
    let initialValue = enterPassword.value
    console.log(initialValue)
    if(enterPassword.value){
        enterPassword.value = hidePassword(enterPassword.value);
    }

    else if(enterPassword.value !== initialValue){
        enterPassword.value = initialValue;
    }
};


// Changes Password to hidden Password
function hidePassword(password){
    let passwordLenth = password.length;
    let hiddenPassword = [];

    for(let i = 0; i <+ passwordLenth; i++){
        hiddenPassword.push('*');
    }
    let joinHiddenPassword = hiddenPassword.join('');
    
    return joinHiddenPassword;
};

