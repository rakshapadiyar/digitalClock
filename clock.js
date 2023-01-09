setInterval(showTime,1000); // call displayTime function every 1 second
function showTime()
{
    let time = new Date(); //time is the object
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let am_pm = "am";

    //since time is obtained from the above methods in military format, convert them to standard format by below conditions
    if(hour == 0)
    {
        hour=12;
        am_pm ="am";
    }
    if(hour > 12)
    {
        hour=hour-12;
        am_pm="pm"
    }

    // since time is shown in hh:mm:ss format, <10 corner case should be taken care of
    hour = hour < 10 ? "0" + hour : hour ;
    minutes = minutes <10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //final time string
    let currentTime = hour + " : " + minutes + " : " + seconds + " " + am_pm;
     console.log(" time is " + currentTime);
      document.getElementById("clock").innerHTML = currentTime;
}
showTime();
