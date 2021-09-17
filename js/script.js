// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand, secondsRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio)

// }

// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)

// }

// setClock()








// function clock () {
//     var today = new Date();
    
//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     // var seconds = today.getSeconds();
//     document.getElementById('watch').innerHTML = hours+':'+minutes;
//     }
//     setInterval(clock, 1000);



//     function date () {
//         var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//         var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
//         var date = new Date();
        
//         var dayName = days[date.getDay()];
//         var day = date.getDate();
//         var monthName = months[date.getMonth()];
    
//         document.getElementById('date').innerHTML = dayName+', '+monthName+' '+day;
        
//         }
        
//         setInterval(date, 1000);
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()








function clock () {
    var today = new Date();
    
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var hoursLength = hours.toString().length;
    var minutesLength = minutes.toString().length;

    var hoursZero = "";
    if(hoursLength<2) {
        hoursZero = 0;
    }

    var minutesZero = "";
    if(minutesLength<2) {
        minutesZero = 0;
    }

    document.getElementById('watch').innerHTML = hoursZero + hours +':'+ minutesZero + minutes;
    }
    setInterval(clock, 1000);



    function date () {
        var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        var date = new Date();
        
        var dayName = days[date.getDay()];
        var monthName = months[date.getMonth()];
        var day = date.getDate();

        var dayLength = day.toString().length;

        var dayZero = "";
        if(dayLength<2) {
            dayZero = 0;
        }
    
        document.getElementById('date').innerHTML = dayName+', '+monthName+' '+ dayZero + day;
        
        }
        
        setInterval(date, 1000);