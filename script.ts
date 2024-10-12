let input = document.getElementById('inputBox') as HTMLInputElement;
let buttons = document.querySelectorAll('.button'); // Updated selector to match button class

let result = "";
let arr = Array.prototype.slice.call(buttons); 

arr.forEach(button => {
    button.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLDivElement; // Change this to HTMLDivElement since buttons are divs

        if (target.innerHTML === '=') {
            if (result != "") {
                result = eval(result).toString(); // Ensure the result is a string
                input.value = result;
            }
        } else if (target.innerHTML === "AC") {
            result = "";
            input.value = result;
        } else if (target.innerHTML === "DEL") {
            result = result.substring(0, result.length - 1);
            input.value = result;
        } else if (target.innerHTML === "%") {
            // If the result is not empty, calculate the percentage
            if (result != "") {
                try {
                    // Evaluate the expression to get the number
                    const evaluatedResult = eval(result);
                    result = (evaluatedResult / 100).toString(); // Calculate percentage
                } catch (error) {
                    result = "Error";
                }
                input.value = result;
            }
        } else {
            result += target.innerHTML; // Add the button's value to result
            input.value = result;
        }
    });
});
