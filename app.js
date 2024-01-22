// const firstbar = document.getElementById("bar");
// const secondbar=document.getElementById("secnd-bar");
// function openBar(){ 
// secondbar.style.display = "block"
// }
// function open(){
// var close = document.getElementById("secnd-bar");
// }
// const openBars = document.getElementById("bar");
// const sideBars = document.getElementById("secndbar");
// function openBar(){
//     sideBars.style.display = "block";
//     // sideBars.style.display = "none"

// }
// // function openBar(){
// // }
const openBars = document.getElementById("bar");
const sideBars = document.getElementById("secndbar");

function openBar() {
    if (sideBars.style.display === "block") {
        sideBars.style.display = "none";
    } else {
        sideBars.style.display = "block";
    }
}




