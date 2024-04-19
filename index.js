//Calculator Program

const display = document.getElementById("display")

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}


function percent(){
        let value = parseFloat(display.value);
            display.value = value / 100; //This code shows the percentage as a factor of change
}

function plusMinus() {
    if (display.value == ""){
        appendToDisplay("-");
    }
    else if(display.value == "-"){
        clearDisplay();
    }
    else{
    let value = parseFloat(display.value);
    value *= -1;
    display.value = value;}
}
