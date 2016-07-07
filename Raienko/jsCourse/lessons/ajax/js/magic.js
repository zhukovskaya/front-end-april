// http://192.168.1.74:4730/answers
var sendBtn=document.getElementById('send-button');
sendBtn.onclick=generateRequest;

function generateRequest() {
  console.log('send thi shit');
  var request= new XMLHttpRequest();
  request.open("POST", 'http://192.168.1.74:4730/answers', true);
  request.setRequestHeader("Content-type", "application/json");
  var someShit={'name':'some XMLHttpRequest','workig':'generated','occupation':'and sent'};
  someShit=JSON.stringify(someShit);
  request.send(someShit);
} 