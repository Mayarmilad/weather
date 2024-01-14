var city = document.getElementById("city");
var weatherTable = document.getElementById("weatherTable");
var day = [];
var date = new Date();

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDayOfWeek = daysOfWeek[date.getDay()];

async function getWeather(userInput="cairo") {

    var weather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e98a145f3153440b9d2170007240501&q=${userInput}&days=3`)

    var result = await weather.json();
  
    display(result);

}

city.addEventListener("input", function () {
    getWeather(city.value)
});


function display(data) {
    for (var i = 0; i < data.forecast.forecastday.length; i++) {

        var cartona = '';
        cartona += `
        <div class="day">
        <div class="head">${currentDayOfWeek}</div>
        <div class="time">${data.location.localtime}</div>
        <div class="weather">
            <div class="location">
                <p>${data.location.name} </p>
            </div>
            <div class="temp d-flex">
                <p> Temperature ${data.current.temp_c}</p>
                <div class="icon"><img src="http:${data.current.condition.icon}"></div>
        
            </div>
            <div class="status">
                <p> Hunidity ${data.current.humidity}</p>
            </div>   
        </div>
        </div>


        <div class="day">
        <div class="head">${currentDayOfWeek}</div>
        <div class="time">${data.location.localtime}</div>
        <div class="weather">
            <div class="location">
                <p>${data.location.name} </p>
            </div>
            <div class="temp d-flex">
                <p> Temperature ${data.forecast.forecastday[0].day.maxtemp_c}</p>
                <div class="icon"><img src="http:${data.forecast.forecastday[0].day.condition.icon}"></div>
        
            </div>
            <div class="status">
                <p> Hunidity ${data.forecast.forecastday[0].day.avghumidity}</p>
            </div>
        </div>
        </div>

        <div class="day">
        <div class="head">${currentDayOfWeek}</div>
        <div class="time">${data.location.localtime}</div>
        <div class="weather">
            <div class="location">
                <p>${data.location.name} </p>
            </div>
            <div class="temp d-flex">
                <p> Temperature ${data.forecast.forecastday[1].day.maxtemp_c}</p>
                <div class="icon"><img src="http:${data.forecast.forecastday[1].day.condition.icon}"></div>
        
            </div>
            <div class="status">
                <p> Hunidity ${data.forecast.forecastday[1].day.avghumidity}</p>
            </div>
        </div>
        </div>
   
    `

    }
    document.getElementById("weatherTable").innerHTML = cartona;
}

