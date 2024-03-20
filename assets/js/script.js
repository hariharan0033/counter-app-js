const number = document.getElementById("number")
const incrementBtn = document.getElementById("btnin");
const decrementBtn = document.getElementById("btndec");
const resetBtn = document.getElementById("btnrs");
let count = 0;


incrementBtn.onclick = function(){
    count++;
    number.textContent = count;
}

decrementBtn.onclick = function(){
    count--;
    number.textContent = count;
}
resetBtn.onclick = function() {
    count=0;
    number.textContent = count;
}