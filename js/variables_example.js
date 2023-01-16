// Autorefresh de la web en Miliseconds
const autorefresh = 60000;
//Velocidad entre diapositivas en Miliseconds
const time_slide = 5000;
// Timezone según https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const timeZone = 'America/Argentina/Buenos_Aires';
//API KEY de OpenWeatherMap https://openweathermap.org/api
const weather_apikey ='199f918678e7e48319bdbc62a3610f99';
//Ciudad de https://openweathermap.org/find
const weather_city ='neuquen';
//Lenguaje de https://openweathermap.org
const weather_lang = 'es';
//Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit https://openweathermap.org/current
const weather_units = 'metric';
//Simbolo segun las unidades de temperatura °C or °F
const weather_temp_symbol = '°C';
//Lenguaje para usar .toLocaleDateString y .toLocaleTimeString
const formato = 'es-Ar'