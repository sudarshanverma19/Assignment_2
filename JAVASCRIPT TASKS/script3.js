function multiply(num1,num2){
    let result = num1*num2;
    return result;
}
function divide(num1,num2){
    let result = num2/num1;
    return result;
}

function display1(){
    let s1 = document.getElementById("numb").value;
    let s2 = document.getElementById("numb2").value;
    let s3 = parseFloat(s1);
    let s4 = parseFloat(s2);
    result= s3*s4;
    document.getElementById("output1").innerText = `Result after multiplication is ${result} `;
}

function display2(){
    let s1 = document.getElementById("numb").value;
    let s2 = document.getElementById("numb2").value;
    let s3 = parseFloat(s1);
    let s4 = parseFloat(s2);
    document.getElementById("output2").innerText = `Result after multiplication is ${divide(s3,s4)} `;
}