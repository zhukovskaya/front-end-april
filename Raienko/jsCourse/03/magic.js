function spanWrapper (){
  var liValues=document.getElementsByTagName('li'),
    len=liValues.length,
    span,
    ul;
    console.log('BEFORE:',liValues);
  for (var i=0;i<len;i++) {
    span=document.createElement('span');
    span.innerText=liValues[i].firstChild.nodeValue;
    liValues[i].removeChild(liValues[i].firstChild);
    liValues[i].insertBefore(span,liValues[i].firstChild);
  }
  console.log('AFTER:',liValues);
}
spanWrapper();

document.addEventListener('click',menuMagic,false);

function menuMagic(event) {
  var currentElement;
  if (event.target.parentNode.tagName=='LI') {
    currentElement=event.target.parentNode.childNodes[1];
    console.log(currentElement);
    if (currentElement.style.display === 'none') {
        currentElement.style.display = 'block';
    } else {
        currentElement.style.display = 'none';
    }
  }
}