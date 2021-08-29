const loadaweather=()=>{
    const searctext=document.getElementById('input-city-name');
    const cityname=searctext.value;
     const apikey='5719806ed25c7e3d959634e8b6707781';
    
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
     console.log(url);
     fetch(url)
     .then(response=>response.json())
     .then(data=> displayweather(data));

}

const displayweather=weather=>{
    console.log(weather);
    const cityname=document.getElementById('city-name');
    const tempreture=document.getElementById('temp');
    tempreture.innerText=parseFloat(weather.main.temp-273).toFixed(2);

    cityname.innerHTML=weather.name;

}