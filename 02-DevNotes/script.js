// When the add button is clicked it should take the info from the input fields and put them in a box forming a note

// CONSTANT VARIABLES
const noteContainer = document.querySelector('.notes');
const noteTitle = document.getElementById('title');
const noteDate = document.getElementById('date');
const noteNum = document.getElementById('note-num');
const note = document.getElementById('note');


// Add button > must append info to noteContainer
// add only when all the field are filled in
document.getElementById('js-addBTN').onclick = ()=>{
    console.log(noteNum.value)
    if(noteTitle.value !== '' && noteDate.value !== '' && noteNum.value !== '' && note.value !== ''){

        appendValues(noteTitle.value, noteDate.value, noteNum.value, note.value);
    }
};

// Takes in the valuesand append them
function appendValues(title, date, num, notes){
    // Divs
    let addedDiv = document.createElement('div');
    let headingDiv = document.createElement('div');
    // Heading
    let titleH2 = document.createElement('h2');
    let dateH2 = document.createElement('h2');
    let noteNumH2 = document.createElement('h2');
    // Note abd delete button
    let note = document.createElement('p');
    let button = document.createElement('button');

    addedDiv.className = 'added-info';
    headingDiv.id = 'heading';

    titleH2.textContent = title;
    dateH2.textContent = date;
    noteNumH2.textContent = num;
    note.textContent = notes;

    button.id = 'js-delete';
    button.textContent = "delete";

    headingDiv.append(titleH2, dateH2, noteNumH2);
    addedDiv.append(headingDiv, note, button);
    noteContainer.append(addedDiv);
}