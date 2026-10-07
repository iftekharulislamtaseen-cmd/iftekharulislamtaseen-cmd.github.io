function gettimes(){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let mil = time.getMilliseconds();

      if(hour >= 13 && hour < 14 ){
          if(hour == 13){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
            hour = 1;
      } else if(hour >= 14 && hour < 15){
          if(hour == 14){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 2;
      } else if(hour >= 15 && hour < 16){
          if(hour == 15){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 3;
      } else if(hour >= 16 && hour < 17){
        if(hour == 16){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 4;
      }else if(hour >= 17 && hour < 18){
        if(hour == 17){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 5;
      }else if(hour >= 18 && hour < 19){
        if(hour == 18){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 6;
      }else if(hour >= 19 && hour < 20){
        if(hour == 19){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 7;
      }else if(hour >= 20 && hour < 21){
        if(hour == 20){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 8;
      }else if(hour >= 21 && hour < 22){
        if(hour == 21){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 9;
      }else if(hour >= 22 && hour < 23){
        if(hour == 22){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 10;
      }else if(hour >= 23 && hour < 24){
        if(hour == 23){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 11;
      } else if(hour == 24){
        if(hour == 24){
              document.getElementsByClassName("am")[0].innerHTML ="PM";
          }
        hour = 12;
      }

      if(hour < 10){
       hour = `0${hour}`;
      } else {
        hour = hour;
      }

      if(min < 10){
        min = `0${min}`;
      } else{
        min = min;
      }

      if(sec < 10){
        sec = `0${sec}`;
      } else {
        sec = sec;
      }
       
   
        document.getElementById("hours").innerHTML = `${hour}`;
        document.getElementById("mins").innerHTML = `${min}`;
        document.getElementById("secd").innerHTML = `${sec}`;
        document.getElementById("mils").innerHTML = `${mil}`;
    }

      let timers = setInterval(() => {
        gettimes();
      },1);