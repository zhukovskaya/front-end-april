var baton=document.getElementById('evilBtn');
var elements = document.querySelectorAll('h3,p');
console.log(elements);
baton.onclick=function() {
  var holder=document.getElementById('holder');
  holder.addEventListener('click',deleter,false);
  function deleter(event){
    console.log('Whom should i kill?');
    event.target.style.display='none';
  }
};
var baton2=document.getElementById('goodBtn');
baton2.onclick=function(){
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.display='inline-block';
    }
}