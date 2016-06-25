var book = document.getElementById('phonebook'),
  inputName=document.getElementById('input-name'),
  inputPhone=document.getElementById('input-phone'),
  inputEmail=document.getElementById('input-email'),
  addBtn=document.getElementById('addBtn'),
  regExpName=/[^0-9]/,
  regExpPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  regExpEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  bookBody=book.getElementsByTagName('tbody')[0];

function setPatterns() {
  inputName.setAttribute('pattern',regExpName);
  inputPhone.setAttribute('pattern',regExpPhone);
  inputEmail.setAttribute('pattern',regExpEmail);
  console.log('Patern Name added:',inputName);
  console.log('Patern Phone added:',inputPhone);
  console.log('Patern Email added:',inputEmail);
};
setPatterns();

addBtn.onclick=regExpChecker;
console.log(book);

function addToTable() {
  console.log('inputName :',inputName.value);
  console.log('inputPhone :',inputPhone.value);
  console.log('inputEmail :',inputEmail.value);

  var tdName=document.createTextNode(inputName.value),
    tdPhone=document.createTextNode(inputPhone.value),
    tdEmail=document.createTextNode(inputEmail.value),
    tdAction=document.createTextNode('delete');

  var newRow = bookBody.insertRow(bookBody.rows.length);

  var newName = newRow.insertCell(0),
    newPhone = newRow.insertCell(1),
    newEmail = newRow.insertCell(2);
    newAction = newRow.insertCell(3);

  newName.appendChild(tdName);
  newPhone.appendChild(tdPhone);
  newEmail.appendChild(tdEmail);
  newAction.appendChild(tdAction);
}
function regExpChecker(){
  console.log('Start checking');
  var correct=0;

  // check Name
  if (inputName.value) {
    if (regExpName.test(inputName.value)) {
      console.log('Good name');
      correct++;
      console.log(correct);
    } else {alert('Bad name')}
  } else {alert('Empty field name')};
  // check Phone
  if (inputPhone.value) {
    if (regExpPhone.test(inputPhone.value)) {
      console.log('Good phone');
      correct++;
      console.log(correct);
    } else {alert('Bad phone')}
  } else {alert('Empty field phone')};
  // check Email
  if (inputEmail.value) {
    if (regExpEmail.test(inputEmail.value)) {
      console.log('Good email');
      correct++;
      console.log(correct);
    } else {alert('Bad email')}
  } else {alert('Empty field email')};
  // if all fields correct - add to table
  if (correct==3) {
    console.log('All fields correct');
    addToTable();
  }
}