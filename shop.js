var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
//console.log(incrementButton);
//console.log(decrementButton);

//Increment
for(var i = 0; i < incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click' ,function(event){
        var buttonClicked = event.target;
           //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
           //console.log(input);
        var inputValue = input.value;
           //console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
          //console.log(newValue);
        input.value = newValue;
    })

}
//DECREMENT
for(var i = 0; i < decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click' ,function(event){
        var buttonClicked = event.target;
           //console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[2];
           //console.log(input);
        var inputValue = input.value;
           //console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;    
          //console.log(newValue);

        if (newValue >= 0) {
            input.value = newValue;
        }
        else{
            input.value = 0;
            // alert('QTY CAN NOT BE LESS THAN ZERO');
        }
    })
}
const cartIcon = document.querySelector('.fa-cart-arrow-down')
const wholeCartWindow = document.querySelector('.whole-cart-window')
cartIcon.addEventListener('mouseover', ()=>{
    if(wholeCartWindow.classList.contains('hide'))
wholeCartWindow.classList.remove('hide')
})
 