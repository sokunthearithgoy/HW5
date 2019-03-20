// function love(){
//     var love1 = document.getElementById("balloon");
//     love1.innerHTML = "love";
    
// }

// // function balloon (){
// //     var test = document.getElementById("test");
// //     test.innerHTMl = "🎈";
// // }
// // console.log(test);
var init=15 ; // initial font size
function arrow(event) { // function to handle arrow keys
event.preventDefault(); // to prevent default scroll functions
var par = document.getElementById("par"); // getting the paragraph
switch (event.key) { // switch case
case "ArrowDown": //In case of arrow down pressing
init=init-(init*0.15) ; //Decreasing the ballon size by 15%
par.style.fontSize=init+"px" ; //Updating the new balloon size
break;
case "ArrowUp": //In case of arrow up pressing
if (init >=60 ){ // Setting the max ballon size to 60px
par.textContent="💥" ; //Repacing with collapsed balloon
window.removeEventListener('keydown',arrow); //Removing any more inflating/deflating
}

else {init=init+(init*0.15) ; //increasing the size of balloon
par.style.fontSize=init+"px" ;//Updating balloon size

}break;
}
}

window.addEventListener("keydown",arrow) ; //Event listener when key is pressed