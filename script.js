const apikey = "3e38bd821ffb4687cc70e8d23185d30a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city) {
    const APIkey="3e38bd821ffb4687cc70e8d23185d30a";
    const currURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    const response = await fetch(currURL);
    let data = await response.json();
    
    if(data.cod==404){
        alert(" OOPS!.INVALID..Try again");
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weathericon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.png";
        }
    
        else if(data.weather[0].main=="Mist"){
            weathericon.src="mist.png";    
        }   
    
        else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.png";
        }
        document.querySelector(".weather").style.display="block";
        // document.querySelector(".weather").style.display="none";
        
    
    }


}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
