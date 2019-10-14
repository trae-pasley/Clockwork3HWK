var updateTime = function () {
   
  var clocktime = new Date();
  var clockSpace = document.getElementById('clock');
  var hours = clocktime.getHours();
  var minutes = clocktime.getMinutes(); 
  var seconds = clocktime.getSeconds();
  var meridian= 'PM';
  var wakeuptime = 5;
  var noon = 12;
  var studyTime = 12 + 9;
  var codeTime = 12 + 10;
  var napTime = 12 + 11;
  var evening = 12 - 6;

  
  //logic for displaying time
  
  if (hours < 12) {
      hours = hours - 12;
      meridian = 'AM';
  }
  
  if (hours < 10) {
      hours = '0' + hours;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  if (seconds < 10) {
      seconds = '0' + seconds;
  }
  
       //displaying time
       clockSpace.innerHTML = innerHTML = hours + ":" + minutes + ":" + seconds + ":" + meridian;
      };
  
      var oneSecond = 1000;
      setInterval(updateTime, oneSecond);
  