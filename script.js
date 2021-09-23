let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue ='';
for(items of buttons) {
 items.addEventListener('click',(e)=>{
     buttonText = e.target.innerText 
     console.log("button text is", buttonText)
     if(buttonText=='x') {
         buttonText = '*';
         screenValue += buttonText;
         screen.value= screenValue;
     }
     else if(buttonText=='c'){
         screenValue= '';
         screen.value=screenValue;
     }
     else if(buttonText=="="){
         screen.value= eval(screenValue) ;
     }
     else{
         screenValue += buttonText;
         screen.value = screenValue;
     }
 })
}