const inputName = document.querySelector('.search-box')
const cityName = document.querySelector('.city')
const date = document.querySelector('.date')
const weather = document.querySelector('.weather')
const hiLow = document.querySelector('.hi-low')
const temp = document.querySelector('.temp')

const fetchData = () => {
    let cityValue = inputName.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=6420f96b7fe30b8d39fc5d0c74b13f8a`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showData(data)
        })
        .catch(
            worngValue()
        )
}

const showData = (data) => {
    cityName.innerHTML = `${data.name} ,${data.sys.country}`
    temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`
    weather.innerHTML = `${data.weather[0].main}`
    hiLow.innerHTML = `${Math.floor(data.main.temp_max - 273.15)}°c / ${Math.floor(data.main.temp_min - 273.15)}°c`
    date.innerHTML = showTime()
    inputName.value = ''
}

const showTime = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date()
    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    return `${day} ${date} ${month} ${year}`
}
 const worngValue = () => {
   cityName.innerHTML = 'please enter a valid name or wait for response'
    temp.innerHTML = ''
    weather.innerHTML = ''
    hiLow.innerHTML = ''
    date.innerHTML = showTime()
}
inputName.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchData()
    } else {
        return
    }
})