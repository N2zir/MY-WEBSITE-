function input(){
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i<inputs.length; i++){
        inputs[i].addEventListener("click", inputs[i].style.border = "1px solid red");
    }    
}

// function makeBorder(){
//     var inputs = document.getElementsByTagName('input');
//     inputs[i].style.border = "1px solid red";
// }