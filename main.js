Notification.requestPermission()

var interval
if(Notification.permission==="granted"){
    interval = setInterval(function(){
        new Notification("這是一個測試用的notification")
    }, 10000)
}

document.getElementById("clear-notification").addEventListener('click', function(){
    clearInterval(interval)
})
