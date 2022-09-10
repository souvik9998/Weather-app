let weather = {
    apikey : "a5bd05c3e58767c636f0194d1101655a",
    fetchWeather : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid=a5bd05c3e58767c636f0194d1101655a"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data)) 
    },
    displayWeather: function(data){
        const{ name } = data;
        const { icon, description} = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in  " + name;
        document.querySelector(".icon").src = "https://openWeathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: "+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }    
});
weather.fetchWeather()