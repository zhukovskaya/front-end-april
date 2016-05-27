function firstQuest () {
  var firstArgument = document.getElementById("quest1input1").value;
  var secondArgument = document.getElementById("quest1input2").value;
  var answer;
  if (firstArgument > secondArgument) {
    answer="First is bigger";
  } else if (secondArgument > firstArgument) {
        answer="Second is bigger";
      } else {
          answer="Both are equal";
        }
  document.getElementById("firstAnswer").innerText = (answer);
}

function secondQuest () {
  var argument = document.getElementById("quest2input2").value;
  var answer;
    if (argument == "Espaniol") {
      answer="Buenos dias!";
    } else if (argument == "Deutsch") {
        answer="Gutten tag!";
      } else {answer="Hello World!";}
  document.getElementById("secondAnswer").innerText = (answer);
}

function thirdQuest () {
  var argument = document.getElementById("quest3input").value;
  var answer;
    if (argument >= 95) {
      answer="A";
    } else if (argument >= 85) {
        answer="B";
      } else if (argument >= 75) {
          answer="C";
        } else if (argument >= 65) {
            answer="D";
          } else {answer="F";}
  document.getElementById("thirdAnswer").innerText = (answer);
}

function fourthQuest () {
  var animalName=document.getElementById("quest4input1").value;
  var animalsAmount=document.getElementById("quest4input2").value;
  if ((animalsAmount.slice(-2) == 11) || ((animalsAmount.slice(-1) != 1))) {
    switch (animalName) {
      case "goose": animalName="geese"; break;
      case "mouse": animalName="mice"; break;
      case "louse": animalName="lice"; break;
      default : animalName+="s"; break;
    }
  }
  document.getElementById("fourthAnswer").innerText += (" " + animalsAmount + " " + animalName);
}

function smallTasksStarter () {
  var choosenTask = document.getElementById("smallTasks").value;
  var i=0;
  while (i < 11) {
    if (i != choosenTask) { 
      document.getElementById('taskDescript'+i).className = "dissabled"; 
    } else {document.getElementById('taskDescript'+i).className = "enabled";}
  i++;
  }
  document.getElementById('smallTasksAnswer').value="Answer";
  document.getElementById('smallTasksInput').value="";
  document.getElementById('smallTasksTrick').value=choosenTask;
}

function smallTasksChecker () {
  var choosenTask = document.getElementById('smallTasksTrick').value;
  var inputedValue = document.getElementById('smallTasksInput').value;
  var answer="Choose task first!";

  switch (choosenTask) {
    case "1": {
      if (inputedValue == "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "2": {
      if (inputedValue > "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "3": {
      if (inputedValue < "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "4": {
      if (inputedValue >= "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "5": {
      if (inputedValue <= "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "6": {
      if (inputedValue != "0") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "7": {
      if (inputedValue == "test") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "8": {
      if (inputedValue === "'1'") {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "9": {
      if (inputedValue == true) {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    case "10": {
      if (inputedValue != true) {answer="BEPHO!";} else {answer="HEBEPHO!";}
      break;}
    default: break;
    // ask about 9 , 10 task!
  }
  document.getElementById('smallTasksAnswer').value=answer;
}

function storyGenerator () {

  document.getElementById('childrenAmount').textContent = document.getElementById('childrenAmountInp').value;
  document.getElementById('jobTitle').textContent = document.getElementById('jobTitleInp').value;
  document.getElementById('cityTitle').textContent = document.getElementById('cityTitleInp').value;
  document.getElementById('partnersName').textContent = document.getElementById('partnersNameInp').value;

  document.getElementById('storyLine').className = "enabled";
}

function calcAge() {
  var maxAge = document.getElementById('curYear').value-document.getElementById('birthYear').value;
  document.getElementById('approxYear').value=maxAge+" - "+(maxAge-1)+" years old";
}

function calcFood() {
  var years = document.getElementById("maxAge").value - document.getElementById("curAge").value;
  if (years>0) {
    document.getElementById("approxFood").value = ((years*365*document.getElementById("estAmount").value)+"kg left");
  } else { 
    document.getElementById("approxFood").value = "Enter correct info";
  }
}

function calcCrcl() {
  var radius = document.getElementById("crclRad").value;
  var Pi=3.14;
  document.getElementById("crclLength").value = (2*Pi*radius).toFixed(2)+" cm";
  document.getElementById("crclArea").value = (Pi*radius*radius).toFixed(2)+" cm2";
}

function celcToFar() {
  document.getElementById("displayCTF").value=(document.getElementById("celToFar").value*1.8+32).toFixed(2)+" F deg.";
}
function farToCelc() {
  document.getElementById("displayFTC").value=((document.getElementById("farToCel").value - 32)/1.8).toFixed(2)+" Celc deg.";
}