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
        };
  document.getElementById("firstAnswer").innerText = (answer);
};

function secondQuest () {
  var argument = document.getElementById("quest2input2").value;
  var answer;
    if (argument == "Espaniol") {
      answer="Buenos dias!";
    } else if (argument == "Deutsch") {
        answer="Gutten tag!";
      } else answer="Hello World!";
  document.getElementById("secondAnswer").innerText = (answer);
};

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
          } else answer="F";
  document.getElementById("thirdAnswer").innerText = (answer);
};

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
};
