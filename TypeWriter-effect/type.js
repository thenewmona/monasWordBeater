const TypeWriter = function(txtElement, words, wait = 3000){
this.txtElement = txtElement;
this.words = words;
this.txt = '';
this.wordIndex = 0;
this.wait = parseInt(wait, 10);
this.type();
this.isDeleting = false;
}

//Type Method 
TypeWriter.prototype = function(){
    console.log('Hello');

    setTimeout(()=> this.type(),500)
    
}
//Init on DOM Load
document.addEventListener('DOMcontentloaded',init);

//Init App
function init() {
const txtElement = document.querySelector('.txt-type');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement/getAttribute('data-wait');
//Init typewriter
new TypeWriter(txtElement, words, wait);
}


