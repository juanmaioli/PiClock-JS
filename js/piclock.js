/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/*!
  * PiClock v1.0.0 (https://juanmaioli.com.ar/)
  * Copyright 2019-2022 Juan Maioli Author (https://github.com/juanmaioli/PiClock)
  * Licensed under MIT
  */
setTimeout(function() { window.location.reload() }, autorefresh)

const carouselPpal = document.querySelector('#carouselPpal')
const carousel = new bootstrap.Carousel(carouselPpal, {interval: time_slide, wrap: true})
const longdate = document.querySelector('#longdate')
const fechaShow = new Date()
const optionsDate = {timeZone: timeZone,weekday: 'long',year: 'numeric',month: '2-digit',day: '2-digit'}
const optionsTime = {hour: '2-digit', minute:'2-digit'}

longdate.innerHTML = fechaShow.toLocaleDateString(formato, optionsDate)
run_Clock(timeZone)
if(weather_apikey != 'API_KEY') {obtenerClima()}else{alert('Debe obtener una API KEY en https://openweathermap.org/api')}
// if(news_apikey != 'API_KEY') {obtenerNoticias()}else{alert('Debe obtener una API KEY en https://newsapi.org')}
obtenerDolar()


/**
 * La función `run_Clock` muestra la hora actual en la zona horaria especificada y la actualiza cada
 * segundo.
 * @param timeZone - El parámetro timeZone se usa para especificar la zona horaria para la que desea
 * mostrar el reloj. Debe ser un identificador de zona horaria válido, como "América/Nueva_York" o
 * "Europa/Londres".
 */
function run_Clock(timeZone){
  const optionsClocok = {timeZone: timeZone,hour12: false,hour: '2-digit',minute: '2-digit',second: '2-digit'}
  const actualTime = new Date()
  const timeToShow = actualTime.toLocaleTimeString([], optionsClocok)
  document.getElementById('divClock').innerHTML = timeToShow
  setTimeout('run_Clock()', 1000)
}
/**
 * La función anterior es una función asíncrona que obtiene datos meteorológicos de una API y actualiza
 * los elementos HTML con los datos recuperados.
 */

async function obtenerClima(){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + weather_city + '&units=' + weather_units + '&lang=' + weather_lang + '&appid=' +  weather_apikey
  console.log('url : ', url )
  const response = await fetch(url)
  const clima = await response.json()

  const temp = document.querySelector('#temp')
  const weather_desc = document.querySelector('#weather_desc')
  const icon = document.querySelector('#icon')
  const city_name = document.querySelector('#city_name')
  const city_name2 = document.querySelector('#city_name2')
  const feels_like = document.querySelector('#feels_like')
  const humidity = document.querySelector('#humidity')
  const pressure = document.querySelector('#pressure')
  const visibility = document.querySelector('#visibility')
  const clouds = document.querySelector('#clouds')
  const wind = document.querySelector('#wind')
  const sunrise = document.querySelector('#sunrise')
  const sunset = document.querySelector('#sunset')
  const sunlight = document.querySelector('#sunlight')
  const cuerpo = document.querySelector('#cuerpo')
  const moon = document.querySelector('#moon')
  const desc = clima.weather[0].description
  const png = clima.weather[0].icon + '.png'
  const ciudad = 'Clima En ' + clima.name
  const amanecer = new Date().sunrise(clima.coord.lat, clima.coord.lon)
  const atardecer =  new Date().sunset(clima.coord.lat, clima.coord.lon)
  const tarjetas = document.querySelectorAll('.card')

  if(fechaShow.getHours() > amanecer.getHours() && fechaShow.getHours() < atardecer.getHours()){
    cuerpo.classList.add('dayColor')
    for(let tarjeta of tarjetas){
      tarjeta.classList.add('dayColor')
    }
  }else{
    cuerpo.classList.add('nigthColor')
    for(let tarjeta of tarjetas){
      tarjeta.classList.add('nigthColor')
    }
  }

  temp.innerHTML = clima.main.temp.toFixed(1) + weather_temp_symbol
  weather_desc.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1)
  weather_desc.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1)
  icon.innerHTML = getIcon(png)
  city_name.innerHTML = ciudad
  city_name2.innerHTML = ciudad
  feels_like.innerHTML = '<i class="fal fa-cloud text-info fa-fw"></i>&nbsp;Sensación Térmica&nbsp;' + clima.main.feels_like.toFixed(1) + weather_temp_symbol
  humidity.innerHTML = '<i class="fal fa-humidity fa-fw text-primary fa-fw"></i>&nbsp;Humedad:&nbsp;' + clima.main.humidity.toFixed(0) + '%'
  wind.innerHTML = '<i class="fal fa-wind fa-fw text-info fa-fw"></i>&nbsp;Viento ' + direccionViento(clima.wind.deg)+ '&nbsp;a&nbsp;' + clima.wind.speed.toFixed(0) + '&nbsp;km/h'
  pressure.innerHTML = '<i class="fal fa-tachometer-alt-fast text-info fa-fw"></i>&nbsp;Presi&oacute;n&nbsp;' + clima.main.pressure + '&nbsp;kPa'
  visibility.innerHTML = '<i class="fal fa-low-vision text-info fa-fw"></i>&nbsp;Visibilidad&nbsp;' + clima.visibility/1000 + '&nbsp;km'
  clouds.innerHTML = '<i class="fal fa-cloud text-info fa-fw"></i>&nbsp;Nubosidad&nbsp;'+ clima.clouds.all + '&nbsp;%'
  sunrise.innerHTML = amanecer.toLocaleTimeString(formato , optionsTime)
  sunset.innerHTML = atardecer.toLocaleTimeString(formato , optionsTime)
  sunlight.innerHTML = msToHMS(atardecer - amanecer)
  moon.innerHTML = '<i class="fal fa-moon text-primary fa-fw"></i>&nbsp;' + getMoonPhase(fechaShow.getFullYear(),fechaShow.getMonth(),fechaShow.getDate())
}

async function obtenerDolar(){
  const url = '../dolar.php'
  const valorCompraOficial = document.querySelector('#valorCompraOficial')
  const valorVentaOficial = document.querySelector('#valorVentaOficial')
  const valorCompraBlue = document.querySelector('#valorCompraBlue')
  const valorVentaBlue = document.querySelector('#valorVentaBlue ')
  const response = await fetch(url)
  const dolar = await response.json()
  console.log('dolar: ', dolar)
  // const variacionOficial = parseFloat(dolar[0].casa.variacion.replace(',','.')).toFixed(2)
  // const variacionBlue = parseFloat(dolar[1].casa.variacion.replace(',','.')).toFixed(2)
  // let variacionOficialTxt = '<i class="fa-regular fa-equals text-primary"></i>'
  // let variacionBlueTxt = '<i class="fa-regular fa-equals text-primary"></i>'

  // variacionOficialTxt = variacionOficial > 0 ? '<i class="fa-regular fa-arrow-up text-danger"></i>': variacionOficialTxt
  // variacionOficialTxt = variacionOficial < 0 ? '<i class="fa-regular fa-arrow-down text-success"></i>': variacionOficialTxt
  // variacionBlueTxt = variacionBlue > 0 ? '<i class="fa-regular fa-arrow-up text-danger"></i>': variacionBlueTxt
  // variacionBlueTxt = variacionBlue < 0 ? '<i class="fa-regular fa-arrow-down text-success"></i>': variacionBlueTxt

  valorCompraOficial.innerHTML = '$' + dolar.CompraOficial
  valorVentaOficial.innerHTML = '$' + dolar.VentaOficial + '&nbsp;'//  + variacionOficialTxt
  valorCompraBlue.innerHTML = '$' + dolar.CompraBlue
  valorVentaBlue.innerHTML = '$' + dolar.VentaBlue + '&nbsp;'//  + variacionBlueTxt
}

/**
 * La función `obtenerNoticias` obtiene los últimos artículos de noticias de una API específica y los
 * muestra en una página web.
 */
async function obtenerNoticias(){
  let total = 0
  const url = 'https://newsapi.org/v2/top-headlines?country=ar&apiKey='+news_apikey
  const noticias = document.querySelector('#noticias')
  noticias.innerHTML = ''
  const response = await fetch(url)
  const ultimasNoticias = await response.json()
  const resultados = ultimasNoticias.articles.length
  for(let noticia of ultimasNoticias.articles){
    total++
    let imagenNoticia = ''
    let descripcion = ''
    if(noticia.urlToImage){imagenNoticia = `<div class="col"><img src="${noticia.urlToImage}" width="180px"></div>`}
    if(noticia.description){descripcion = noticia.description.slice(0, 140)+'...'}
    noticias.innerHTML +=`
    <div class="carousel-item">
      <div class="card rounded">
        <div class="card-header"><h5 class="text-white"><i class="fa-light fa-newspaper text-primary"></i>&nbsp;${noticia.source.name}(${total} de ${resultados})</h5></div>
        <div class="card-body">
        <div class="row"><div class="col"><h5>${noticia.title}</h5></div></div>
        <div class="row">
        ${imagenNoticia}
        <div class="col"><p class="fst-italic">${descripcion}</p></div>
        </div>
        </div>
      </div>
    </div>`
  }
}

function getIcon(png){
  const iconosLista ={
    '01d.png':'<i class="fal fa-sun text-warning fa-fw"></i>',
    '01n.png':'<i class="fal fa-moon text-info fa-fw"></i>',
    '02d.png':'<i class="fal fa-cloud-sun text-warning fa-fw"></i>',
    '02n.png':'<i class="fal fa-cloud-moon text-info fa-fw"></i>',
    '03d.png':'<i class="fal fa-cloud text-info fa-fw"></i>',
    '03n.png':'<i class="fal fa-cloud text-info fa-fw"></i>',
    '04d.png':'<i class="fal fa-cloud text-info fa-fw"></i>',
    '04n.png':'<i class="fal fa-cloud text-info fa-fw"></i>',
    '09d.png':'<i class="fal fa-cloud-rain text-info fa-fw"></i>',
    '09n.png':'<i class="fal fa-cloud-rain text-info fa-fw"></i>',
    '10d.png':'<i class="fal fa-cloud-sun-rain text-info fa-fw"></i>',
    '10n.png':'<i class="fal fa-cloud-moon-rain text-info fa-fw"></i>',
    '11d.png':'<i class="fal fa-bolt text-warning fa-fw"></i>',
    '11n.png':'<i class="fal fa-bolt text-warning fa-fw"></i>',
    '13d.png':'<i class="fal fa-snowflake text-primary fa-fw"></i>',
    '13n.png':'<i class="fal fa-snowflake text-primary fa-fw"></i>',
    '50d.png':'<i class="fal fa-smog text-white fa-fw"></i>',
  }
  return iconosLista[png] || '<i class="fal fa-thermometer-half text-danger fa-fw"></i>'
}

function direccionViento(deg) {
  let val = Math.floor((deg / 22.5) + 0.5)
  let arr = ['⬆️ N', '↗️NNE', '↗️ NE', '↗️ ENE', '➡️ E', '↘️ ESE', '↘️ SE', '↘️ SSE', '⬇️ S', '↙️ SSO', '↙️ SO', '↙️ OSO', '⬅️ O', '↖️ ONO', '↖️ NO', '↖️ NNO']
  return arr[(val % 16)]
}


function msToHMS( ms ) {
  let seconds = ms / 1000
  const hours = parseInt( seconds / 3600 )
  seconds = seconds % 3600
  const minutes = parseInt( seconds / 60 )
  seconds = seconds % 60
  return ( hours.toString().padStart(2,'00') + ':' + minutes.toString().padStart(2,'00'))
}

function getMoonPhase(year, month, day){
  let c = e = jd = b = 0
  if (month < 3) {
    year--
    month += 12
  }
  ++month
  c = 365.25 * year
  e = 30.6 * month
  jd = c + e + day - 694039.09 //jd is total days elapsed
  jd /= 29.5305882
  b = parseInt(jd)
  jd -= b
  b = Math.round(jd * 8)
  if (b >= 8 ) {b = 0}

  const fasesLista = {
    0:'Luna Nueva',
    1:'Luna Creciente',
    2:'Cuarto Creciente',
    3:'Luna Gibosa Creciente',
    4:'Luna Llena',
    5:'Luna Gibosa Menguante',
    6:'Cuarto Menguante',
    7:'Luna Creciente',
  }
  return  fasesLista[b] || 'Sin Datos'
}