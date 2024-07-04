document.getElementById("sheet").addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        const inputs = document.getElementById("sheet").querySelectorAll('input');
        let program = "";
        inputs.forEach(input => {
            program +=`${input.value} ${input.id} var\n`;
        });
        document.activeElement.value = window.run_stack(`${program} ${document.activeElement.value} print`).output();
    } else if (event.code === "ArrowLeft" || event.key === "ArrowLeft") {
        let [row, col] = document.activeElement.id.split("-");
        [row, col] = [parseInt(row), parseInt(col)];
        document.getElementById(`${row}-${col - 1}`).focus()
    } else if (event.code === "ArrowRight" || event.key === "ArrowRight") {
        let [row, col] = document.activeElement.id.split("-");
        [row, col] = [parseInt(row), parseInt(col)];
        document.getElementById(`${row}-${col + 1}`).focus()
    } else if (event.code === "ArrowUp" || event.key === "ArrowUp") {
        let [row, col] = document.activeElement.id.split("-");
        [row, col] = [parseInt(row), parseInt(col)];
        document.getElementById(`${row - 1}-${col}`).focus()
    } else if (event.code === "ArrowDown" || event.key === "ArrowDown") {
        let [row, col] = document.activeElement.id.split("-");
        [row, col] = [parseInt(row), parseInt(col)];
        console.log(`${row + 1}-${col}`);
        document.getElementById(`${row + 1}-${col}`).focus()
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

document.getElementById("imgUrl").addEventListener("keydown", function(event) {
    if (event.code === "Enter" || event.key === "Enter") {
        previousActiveElement.style.backgroundImage =  `url("${document.getElementById("imgUrl").value}")`;
        previousActiveElement.style.backgroundSize = "auto 100%";
        previousActiveElement.style.backgroundRepeat = "no-repeat";
        previousActiveElement.style.backgroundPosition = " center";
    }
});
