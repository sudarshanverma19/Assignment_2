function reverse(num){
    let reversed = 0;
    let sign = Math.sign(num);
    num = Math.abs(num);

    while(num > 0){
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed*sign ;
}

function display(){
    let input = document.getElementById("numberInput").value;
    let number = parseInt(input);
    let reversed = reverse(number);
    document.getElementById("result").innerText = `Reversed number is = ${reversed}`;
}