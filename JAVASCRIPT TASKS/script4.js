function showDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });
    let year = date.getFullYear();
    let formattedDate = `${day}/${month}/${year}`;
    document.getElementById('dateOutput').innerText = formattedDate;
}

function showTime() {
    let date = new Date();
    let time = date.toString();
    document.getElementById('timeOutput').innerText = time;
}
