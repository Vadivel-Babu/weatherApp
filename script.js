const Key = '50c50ef8e4e9c2258bd386e59a6d8d48';
const card = document.querySelector('.weather');
const btn = document.querySelector('.btn');
const val = document.querySelector('.input');
const body = document.querySelector('.body');




const getWeather= async() => {
  const red = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*255);
  const blue = Math.floor(Math.random()*255);
  
  if(val.value.trim() === ''){
    alert("Input can't be empty")
    return;
  }
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val.value}&appid=${Key}`);
    const res = await data.json();
    
    if(res.cod === '404'){
      card.innerHTML = `<p class='name'>${res.message}</p>`
    } else {
      card.innerHTML = `<img src="./images/${res.weather[0].main}.jpg" alt="" class="img">
      <h2 class="name">${res.name}</h2>
      <h2 class="name">${res.weather[0].main}</h2>
      <h2 class="name">${Math.floor(res.main.temp - 273.15)} <sup>o</sup>c</h2>`
    }
    val.value = '';   
  } catch (e) {
    alert(e);
    val.value = '';  
  }
  
}

btn.addEventListener('click',getWeather);
