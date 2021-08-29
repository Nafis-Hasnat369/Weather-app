const searchCity = async () => {
    const apiKey = "29b65a406b671b9446d0fc1d1f760729";
    const unit = "metric";
    const inputCity = document.getElementById("input-city");
    const cityName = inputCity.value;
    // clear values
    // clearData();
    inputCity.value = "";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    displayData(data);
};
const getTheIcon = async (data) => {
    const img = document.getElementById("weather-img");
    img.innerHTML = "";
    const icon = data.weather[0].icon;
    img.innerHTML = `<img id="weather-img" style="width:100px; height:100px" src="https://openweathermap.org/img/wn/${icon}.png" alt="">`;
};
const displayData = (data) => {
    getTheIcon(data);
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    const weather = document.getElementById("weather");
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    weather.innerText = data.weather[0].main;
};
