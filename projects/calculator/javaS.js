const resultDiv = document.getElementById("resultDiv");
const specialCharacters = ["/","*","-","+"];

function addValue(newValue) {
    if (resultDiv.innerText == "0") {
        resultDiv.innerText = newValue;
        
    } else {
        const lastPosition = resultDiv.innerText.length -1;
        const lastcharacter = resultDiv.innerText[lastPosition];


       if (specialCharacters.includes(lastcharacter) && specialCharacters.includes(newValue)) {
       
        var oldString = resultDiv.innerText;
        oldString = oldString.substring(0,lastPosition);
        const newString = oldString + newValue;
        resultDiv.innerText = newString;

       } else {
        resultDiv.innerText += newValue;
       }
       
    }
}

function clearScreen() {
    resultDiv.innerText = "0";
}

function culculate() {
    const equation = resultDiv.innerText;
    const result = eval(equation);
    resultDiv.innerText = result;
}

function deleteButton() {
    
    const lastPosition = resultDiv.innerText.length -1;
    var oldString = resultDiv.innerText;
    oldString = oldString.substring(0,lastPosition);
    resultDiv.innerText = oldString;

    if (resultDiv.innerText == "") {
        clearScreen();
    }

}