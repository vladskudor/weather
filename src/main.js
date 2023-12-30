import './style.css'

let city;
let button = document.querySelector('button');

document.querySelector('#city').onchange = (e) => {
    city = e.target.value;
}

button.onclick = function(){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71d8a72b562873456a59f71415b27864`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            document.querySelector('.block-weather');
            document.querySelector('.block-weather h3').textContent = '';
            document.querySelector('.name-city').textContent ='City ' + res.name;
            document.querySelector('.temp').innerHTML = 'Temp ' + Math.round(res.main.temp - 273) + '&deg';
            document.querySelector('.wind').innerHTML = 'Wind ' + res.wind.speed + 'km/h';
            document.querySelector('.desctiption').innerHTML = res.weather[0]['description'];
            document.querySelector('.img').innerHTML = '<img src="https://openweathermap.org/img/wn/' + res.weather[0]['icon'] + '@2x.png">';
    })
}

// http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=71d8a72b562873456a59f71415b27864