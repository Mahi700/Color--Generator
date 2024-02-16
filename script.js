const bg = document.getElementById("bg");
const generateBtn = document.getElementById("colorGenerateBtn");
const colorCode = document.getElementById("colorCodeDisplay");
const autoManualBtn = document.getElementById("autoManualBtn");


function generateRgbColor() {
    let red = (Math.floor(Math.random()* 254) + 1);
    let green = (Math.floor(Math.random()* 254) + 1);
    let blue = (Math.floor(Math.random()* 254) + 1);

    let color = `rgb(${red},${green},${blue})`;
    console.log(color);

    bg.style.backgroundColor = color;
    colorCode.textContent = color;
};


function copyToClipboard() {
    navigator.clipboard.writeText(colorCode.textContent);
    console.log("Color Code Copied");
    alert("Color Code Copied");
};


function autoManualMode() {

    if (autoManualBtn.textContent == "Manual (Coming Soon)") {
        console.log("Auto (Coming Soon)");
        autoManualBtn.textContent = "Auto (Coming Soon)";

    } else {
        console.log("Manual (Coming Soon)");
        autoManualBtn.textContent = "Manual (Coming Soon)";
        
    }
};