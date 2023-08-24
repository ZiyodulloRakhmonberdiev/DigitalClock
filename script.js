let section = document.querySelector('section'),
icons = document.querySelector('.icons');

icons.onclick = () => {
    section.classList.toggle('dark');
}

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;


    document.querySelector('.hour-number').innerText = hour;
    document.querySelector('.minute-number').innerText = minute;
    document.querySelector('.second-number').innerText = second;
    document.querySelector('.am__pm').innerText = hour > 12 ? 'PM' : 'AM';


    

    
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;
}, 1000)