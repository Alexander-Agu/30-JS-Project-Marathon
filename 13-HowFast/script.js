//Constant variables
const codeBlock = document.getElementById("code-block");
const modal = document.getElementById("modal");
const selectLangContainer = document.getElementById("select-lang");
const resultContainer = document.getElementById("result");
const timeEl = document.getElementById("time");
const accuracyEl = document.getElementById("accuracy");
const messageEl = document.getElementById("message");
const closeBtn = document.getElementById("close");
const cancelBtn = document.getElementById("cancel");

//edit here to add you favourite language
//if your language includes special character in its name eg: C++, we might a slight problem, open a discussion.
const languages = ["JavaScript","Python","Java","C","C++"];
const lines ={
  JavaScript: "console.log(\"Hello, World!\");",
  Python: "print(\"Hello, World!\")",
  Java: "System.out.println(\"Hello, World!\");",
  C: "printf(\"Hello, World!\");",
  Cpp: "cout<<\"Hello, World!\";"
}
//

//edit messages here "this array will be split in two, The first half is for slower folks < 5s and the other half is for faster folks >5s"
const messages =["Wow!!","Nice!!","Look at those numbers","Fingers go BRRRRRR!!","I am fast as hell boy","I am stronger, I am faster, I AM BETTER!!!"]

//mutable variables
let charIndex;
let accuracy;
let startTime;
let end;
let timerStarted;
let loaded = false;

function stopTimer(){
  let delta = Date.now() - startTime;
  return delta;
}

function showResult(time,accurary,len){
  resultContainer.classList.add("show-result"); 
  timeEl.innerText = `${time<1000?time+"ms":(time/1000)+"s"}`;
  accuracyEl.innerText =((accuracy/len)*100).toFixed() + "%";
  let max= messages.length;
  let rand;
  if(time<5000){
    rand = Math.floor(Math.random()*(max-(max/2))+(max/2));
    messageEl.innerText = messages[rand];
  }else{
    rand = Math.floor(Math.random()*(max/2));
    messageEl.innerText = messages[rand];
  }
}

const compareKey = (index,letter,key)=>{
  let elemID = index+letter;
  let elem  = document.getElementById(elemID);
  if(letter == key){
    elem.style.color = "blue";
    charIndex++;
  }else if(letter != key){
    elem.style.color ="red";    
    charIndex = index;
    accuracy--;
  }
}

function generateElement(name,id,text){
  let element = document.createElement(name);
  element.setAttribute("id",id);
  element.innerText = text;
  return element;
}

function howFast(code){
  for(let i=0;i<code.length;i++){
    let span = generateElement("SPAN",i+code.charAt(i),code.charAt(i));
    span.style.color ="grey";
    codeBlock.appendChild(span);
  }

  window.addEventListener("keydown",(e)=>{
    if(e.key == "Shift"){
      return;
    }

    if(charIndex == code.length-1){
      compareKey(charIndex,code.charAt(charIndex),e.key);
      let d = stopTimer();
      showResult(d,accuracy,code.length);
      end = true;
    } 

    if(end){
      return;
    }

    if(!timerStarted){
      startTime = Date.now();
      timerStarted = true;
    } 

    compareKey(charIndex,code.charAt(charIndex),e.key);
  });

}

function main(){
  charIndex =0;
  startTime= Date.now();
  end = false;
  timerStarted =false;
  let line = "console.log(\"Hello World\");";

  if(!loaded){
    for(let i=0;i<languages.length;i++){
      let buttonEl = generateElement("BUTTON",languages[i],languages[i]);
      selectLangContainer.appendChild(buttonEl);
    }
    loaded = true;
  }

  let selectLangButtons = selectLangContainer.getElementsByTagName("button");
  let arr = [...selectLangButtons];
  arr.forEach((btn) =>{
    btn.addEventListener("click",()=>{
      modal.classList.add("hide-modal");
      if(btn.id =="C++"){
        line = lines["Cpp"];
      }else{
        line = lines[btn.id];
      }
      accuracy = line.length;
      howFast(line);
    })
  })
 
}

closeBtn.addEventListener("click",()=>{
  window.location.reload();
}); 

cancelBtn.addEventListener("click",()=>{
  window.location.reload();
}); 

main();
