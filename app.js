//Init Storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

//Initialize weather object
  const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init ui
const ui = new UI();
  //Get weather on eventListenner

  document.addEventListener('DOMContentLoaded', getWeather);
  //change location event
  document.getElementById('w-change-btn').addEventListener('click',(e) =>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    //set Location in LS
    storage.setLocationData(city, state);
    getWeather();
    //close Model
    $('#locModal').modal('hide');
  });
 
  function getWeather(){
    weather.getWeather()
      .then(results => {
        ui.paint(results);
      })
      .catch(err => console.log(err));
    }
 

