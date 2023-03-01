let futureTime = new Date("January 1, 2024 00:00:00").getTime()

var countdown = setInterval(()=>{
    let now = new Date().getTime()
    let timeLeft = futureTime - now;

    let days = Math.floor(timeLeft/(1000*60*60*24));
    let hours = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((timeLeft%(1000*60*60))/(1000*60));
    let seconds = Math.floor((timeLeft%(1000*60))/1000);

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
    
    if(timeleft<=0){
        clearInterval(countdown)
        document.getElementById('days').innerHTML = 00
        document.getElementById('hours').innerHTML = 00
        document.getElementById('minutes').innerHTML = 00
        document.getElementById('seconds').innerHTML = 00
    
    }

},1000)