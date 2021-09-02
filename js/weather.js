const searchCity = async () => {
    const apiKey = "29b65a406b671b9446d0fc1d1f760729";
    const unit = "metric";
    const inputCity = document.getElementById("input-city");
    const cityName = inputCity.value;

    // clear values
    inputCity.value = "";

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
};
const getTheIcon = async (data) => {
    const img = document.getElementById("weather-img");
    const icon = data.weather[0].icon;
    img.innerHTML = `<img id="weather-img" style="width:100px; height:100px" src="https://openweathermap.org/img/wn/${icon}.png" alt="">`;
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayData = (data) => {
    getTheIcon(data);
    setInnerText("city", data.name);
    setInnerText("temp", data.main.temp);
    setInnerText("weather", data.weather[0].main);
};