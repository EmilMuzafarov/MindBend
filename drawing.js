// Set default color
let color = "black";

// Function to set color from palette
function setColor(newColor) {
    color = newColor;
}

// Function for custom color input
function askCustomColor() {
    color = prompt("Enter a custom color:");
}

// Create the grid of divs
function createGrid() {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < 500; i++) { // Adjust the number for more or fewer squares
        let div = document.createElement("div");
        div.addEventListener("mouseover", paint);
        container.appendChild(div);
    }
}
function reset(){
    let list=document.getElementsByTagName("div")
    for (let j=0; j<500; j++) {
        list[j].style.backgroundColor="";
    }
}

// Paint function
function paint() {
    this.style.backgroundColor = color;
}

// Initialize grid on page load
window.onload = createGrid;
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '0';
}
function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-100%';
}
function showBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='flex'
}
function hideBar() {
    const mainbar=document.querySelector('.mainbar')
    mainbar.style.display='none'
}