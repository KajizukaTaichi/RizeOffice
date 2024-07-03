document.addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        const inputs = document.getElementById("sheet").querySelectorAll('input');
        let program = "";
        inputs.forEach(input => {
            program +=`${input.value} ${input.id} var\n`;
        });
        document.activeElement.value = window.run_stack(`${program} ${document.activeElement.value} print`).output();
    }
});

let previousActiveElement;
let currentActiveElement;

document.getElementById("sheet").addEventListener('focusin', function(event) {
    currentActiveElement = event.target;
});

document.getElementById("sheet").addEventListener('focusout', function(event) {
    previousActiveElement = currentActiveElement;
    currentActiveElement = null;
});


document.getElementById("fontSize").addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        previousActiveElement.style.fontSize = document.getElementById("fontSize").value;
    }
});

document.getElementById("fontColor").addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        previousActiveElement.style.color = document.getElementById("fontColor").value;
    }
});

document.getElementById("backColor").addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        previousActiveElement.style.backgroundColor = document.getElementById("backColor").value;
    }
});