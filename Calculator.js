
var button = document.getElementsByClassName('button');
var displayresult = document.getElementById('displays');

for(var i = 0; i<button.length; i++){
     button[i].addEventListener('click', function(){
     var value = this.getAttribute('data-value');
     
     if(value=="="){
         displayresult.innerText = eval(displayresult.innerText);
     }
     else if(value == "AC"){
        displayresult.innerText = " ";
     }
     else{
        displayresult.innerText += value;
      
     }
});
}
