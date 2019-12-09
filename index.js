// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left = "180";
dodger.style.right = "120px";


document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
      }
});

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});


function moveDodgerLeft(){
      let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
    
        dodger.style.left = `${left - 1}px`;
      }


function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left + 1}px`;
    }







document.addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        dodger.style.left = "180px"
      }
});