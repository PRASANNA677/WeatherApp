function weather(){
    const inputValue=document.getElementById('input').value
    const place=document.getElementById("h-place")
    const temp=document.getElementById("h-temp")
    const lon=document.getElementById("h-lon")
    const lat=document.getElementById("h-lat")
    const humidity=document.getElementById("h-humidity")
    const maxT=document.getElementById("h-max-t")
    const minT=document.getElementById("h-min-t")
    const pressure=document.getElementById("h-pressure")
    const status=document.getElementById("h-status")
    const url="https://api.openweathermap.org/data/2.5/weather?q="+inputValue+"&appid=bfb12dd01a60ae5bd8c4e6c3e73af357"
    fetch(url)
    .then((x)=>{
        return x.json()
    
    })
    .then((y)=>{
        const weatherData=y
        const apiPlace=weatherData.name       
        const apiTemp=Math.floor(weatherData.main.temp)-273
        const apiLon=weatherData.coord.lon
        const apiLat=weatherData.coord.lat
        const apiHumidity=weatherData.main.humidity
        const apiMaxT=weatherData.main.temp_max
        const apiMinT=weatherData.main.temp_min
        const apiPressure=weatherData.main.pressure
        const apistatus=weatherData.weather[0].main

        place.innerText=apiPlace
        temp.innerText=apiTemp
        lon.innerText=apiLon
        lat.innerText=apiLat
        humidity.innerText=apiHumidity
        maxT.innerText=apiMaxT
        minT.innerText=apiMinT
        pressure.innerText=apiPressure
        status.innerText= apistatus
    })
}
