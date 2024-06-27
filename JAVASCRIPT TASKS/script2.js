function alphastr(str){
    let charArray = str.split('');
    charArray.sort();
    let sorted = charArray.join('');
    return sorted ;
}

function display(){
    let str = document.getElementById("rev").value;
    let result = alphastr(str);
    document.getElementById("output").innerText = `string is: ${result}`;
}