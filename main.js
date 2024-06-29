let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
 let lapbtn = document.getElementById('lap');
 lapList = document.querySelector(".lap-list");
let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0 ,
lapCount = 1 ;
  
startBtn.addEventListener('click', function () {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    lapCount = 1;
    lapList.innerHTML = ""; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 
lapbtn.addEventListener('click',function () {
    const lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(count)}`;
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
});
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
  
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 
}