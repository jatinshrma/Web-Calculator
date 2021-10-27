// Display pressed key on screen
let keys = document.getElementsByClassName('visible-keys');

for (const key of keys) {
    key.addEventListener('click', () => {

        let buttonText = key.innerText;
        let txt = document.getElementById('text-area');
        if (buttonText == "x") {

            buttonText = "*";
            txt.value += buttonText;
        }
        else {
            txt.value += key.innerText;
        }
    });
};

// Cancel calculation when clicked 'C' button
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    location.reload();
});

// Remove last entry from text area when clicked 'Del' button
let deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', () => {

    let txt = Array.from(document.getElementById('text-area').value);
    txt.splice(-1);
    document.getElementById('text-area').value = txt.join("");
});

// Make Calculation
// Listen to click event for each 'math-operators' class holder 
document.getElementById('calculate').addEventListener('click', () => {

    let value = document.getElementById('text-area').value;
    var calculated_value = eval(value);
    document.getElementById('text-area').value = calculated_value;
});