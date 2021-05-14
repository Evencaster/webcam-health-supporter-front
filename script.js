const toggle = document.querySelector('#toggle')
toggle.onclick = () => {
    Notification.requestPermission(function(permission){
        console.log('Результат запроса прав:', permission)
    })
    setInterval(() => {
        const notification = new Notification('Webcam health supporter', {
            body: 'Pls, sit up straight'
        })
    }, 5000)
}
