let input = document.querySelector(".city-input");
let container = document.querySelector(".container");
let button = document.querySelector(".btn");
let result = document.querySelector(".result")
let cityname = ""
let value;
input.addEventListener("input",(e)=>{
    value = e.target.value;
})

button.addEventListener("click",()=>{
    getData();

})

function getData(){
    cityname = value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=db09041ceb02c62845bd0654e04eb514`
    fetch(url)
.then(res => res.json())
.then(data => {
    if(data.cod === 200){
        let image;
        let temp = Math.round(data.main.temp - 273)
        if(data.weather[0].main === "Thunderstorm"){
            image = "http://openweathermap.org/img/wn/11d@2x.png"
        }
        else if(data.weather[0].main === "Rain"){
            image = "http://openweathermap.org/img/wn/10d@2x.png"
        }
        else if(data.weather[0].main === "Atmosphere"){
            image = "http://openweathermap.org/img/wn/50d@2x.png"
        }
        else if(data.weather[0].main === "Snow"){
            image = "http://openweathermap.org/img/wn/13d@2x.png"
        }
        else if(data.weather[0].main === "Clear"){
            image = "http://openweathermap.org/img/wn/01d@2x.png"
        }
        else if(data.weather[0].main === "Clouds"){
            image = "http://openweathermap.org/img/wn/02d@2x.png"
        }
    
        let element = document.createElement("div")
        result.innerHTML = `<h1 class="olke">${data.name},${data.sys.country}</h1>
        <div class="image"><img src="${image}" alt=""></div>
        <h1 class="selsi">${temp}°C</h1>
        <h1 class="durum">${data.weather[0].main}</h1>
        <div class="kulek">
        <h1>Külək:${data.wind.speed}km/s</h1>
        <h1>Nəm:${data.main.humidity}%</h1>
    </div>`
    }else{
        result.innerHTML = "<div class='error'>Şəhərin adını düzgün qeyd edin</div>";
        setTimeout(() => {
            result.innerHTML = ""
        }, 1000);
    }


}
)
}


