function showTime(){
    let today = new Date();

    let hour = today.getHours();
        if(hour <10) hour = '0' + hour;
    let minute = today.getMinutes();
        if(minute < 10) minute = '0' + minute;
    let second = today.getSeconds();
        if(second < 10) second = '0' + second;
    
        document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;
    
        setTimeout('showTime()', 1000);
}

function changeEuro(){
    let euroInput = document.getElementById('field1').value;

        if(isNaN(euroInput) === true) alert("You should enter a number");
            else if(euroInput < 0) alert("The number should positive");
                else document.getElementById('result1').innerHTML = euroInput * 18.88 + ' LE';
};

function changeDollar(){
    let dollarInput = document.getElementById('field2').value;
    if(isNaN(dollarInput) === true) alert("You should enter a number");
        else if(dollarInput < 0) alert("The number should positive");
            else document.getElementById('result2').innerHTML = dollarInput * 15.57 + ' LE';
    };





