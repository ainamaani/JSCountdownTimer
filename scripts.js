let futureTime = new Date("March 2, 2023 00:00:00").getTime()


var countdown = setInterval(()=>{
    let now = new Date().getTime()
    let timeLeft = futureTime - now;
    if(timeLeft>0){
        let days = Math.floor(timeLeft/(1000*60*60*24));
        let hours = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((timeLeft%(1000*60*60))/(1000*60));
        let seconds = Math.floor((timeLeft%(1000*60))/1000);
    
        
        document.getElementById('days').innerHTML = formatTime(days)
        document.getElementById('hours').innerHTML = formatTime(hours)
        document.getElementById('minutes').innerHTML = formatTime(minutes)
        document.getElementById('seconds').innerHTML = formatTime(seconds)
    }  

},1000)

function formatTime(time){
    return time<10 ? `0${time}` : time
}
