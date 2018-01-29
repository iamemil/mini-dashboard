$( document ).ready(function() {
function fn30minutes() {
  var fTemp,cTemp;  
  
   
    //Create API with GEOLOCATION
  var api = 'https://api.openweathermap.org/data/2.5/weather?q=Baku,az&appid=896ddd233198ecb7a263b01cd3ca3962';
          
   $.getJSON(api,function(data){
     //JSON call open weather API
    var weatherType=data.weather[0].main;
     var kTemp =data.main.temp;
     var windSpeed =data.wind.speed;
     var city=data.name;
  
     //temperature in kelvin  
     cTemp =((kTemp -273)).toFixed(1);
  //console.log(city);
   //  console.log(api);
    // console.log("lat");
     
     $(".city").html(city);
//     $(".weatherType").html(weatherType);
     $(".temp").html(cTemp+"&#8451;");
  
   //change Background - image
     if(cTemp>30){
      $(".weatherType").html("<i class=\"wi wi-meteor\"></i>");   
   }
     else if(cTemp>25){
      $(".weatherType").html("<i class=\"wi wi-day-sunny\"></i>"); 
     }
     else if(cTemp>15){
      $(".weatherType").html("<i class=\"wi wi-day-sunny-overcast\"></i>");         
     }
     else if(cTemp<10){
      $(".weatherType").html("<i class=\"wi wi-snowflake-cold\"></i>");   
     }  
   });   

  }
  fn30minutes();
  setInterval(fn30minutes, 30*10*1000);
});
  