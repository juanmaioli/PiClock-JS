# PiClock JS

### Mini web desarrollada en Vainilla JS para poder usar una Rasperry Pi con pantalla de  3,5"(480x320) como reloj.

#### Muestra en pantalla:
- Reloj
- Temperatura Actual(openweathermap.org).
- Sensación Térmica(openweathermap.org).
- Humedad(openweathermap.org).
- Dirección del viento y velocidad(openweathermap.org).
- Presión atmosférica(openweathermap.org).
- Visibilidad(openweathermap.org).
- Nubosidad(openweathermap.org).
- Horario de amanecer y atardecer(openweathermap.org).
- Horas de luz diurna(openweathermap.org).
- Fases lunares(openweathermap.org).
- Cotización dólar (Dolarsi.com).

## Configuracion:
Renombrar ./js/variables_example.js a ./js/variables.js.

#### Variables de variables.js.

#### Autorefresh de la web en Miliseconds
const autorefresh = 60000;
#### Velocidad entre diapositivas en Miliseconds
const time_slide = 5000;
#### Timezone según https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const timeZone = 'America/Argentina/Buenos_Aires';
#### API KEY de OpenWeatherMap https://openweathermap.org/api
const weather_apikey ='API_KEY';
#### Ciudad de https://openweathermap.org/find
const weather_city ='neuquen';
#### Lenguaje de https://openweathermap.org
const weather_lang = 'es';
#### Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit https://openweathermap.org/current
const weather_units = 'metric';
#### Simbolo segun las unidades de temperatura °C or °F
const weather_temp_symbol = '°C';
#### Lenguaje para usar .toLocaleDateString y .toLocaleTimeString
const formato = 'es-Ar'
#### API KEY de https://newsapi.org
const news_apikey ='API_KEY'