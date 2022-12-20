let background = ["hsl(217, 12%, 63%)", ""]
let count = 0
function color() {
    count++;
    if(count > 1) {
        count = 0;
    }
    let b1 = document.getElementById("b1").style.backgroundColor = background[count]
    return b1    
}
function color1(){
    count++;
    if(count > 1) {
        count = 0;
    }
    let b2 = document.getElementById("b2").style.backgroundColor = background[count]
    return b2
}