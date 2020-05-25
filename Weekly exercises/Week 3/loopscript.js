function calculateSum() {
    sum = 0; //sum starts from 0, later on I add numbers
    number = Number(document.getElementById("numFrom").value); //my number start from 1, this number will be a counter of my loop
    while (number <= Number(document.getElementById("numTo").value)) { //my condition is number less than/equal to 5
        sum = sum + number; // on left of '=', it is variable, on the right of '=', they must be considered as a value
        console.log("number: " + number + "sum:" + sum); //we need to print them out as a string
        number = number + 1; // add one number in order to update my condition
    }
    document.getElementById("sumResult").innerText = sum;
}

function goNextStep() {
    inputText = document.getElementById("userInput").value;
    if (inputText != "yes") {
        alert("type again");
    } else {
        alert("you typed right");
    }
}