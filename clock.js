let userName = prompt("Adınızı Yazınız")

document.getElementById("myName").innerHTML = userName



setInterval(function () {

    let week = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    let dateHours = new Date().getHours()
    let dateMin = new Date().getMinutes()
    let dateSec = new Date().getSeconds()
    let dateDay = new Date().getDay()

    console.log(dateHours, dateMin, dateSec, week[dateDay + 1])

    document.getElementById("hour").innerHTML = `${dateHours} :`
    document.getElementById("minute").innerHTML = `${dateMin} :`
    document.getElementById("second").innerHTML = dateSec
    document.getElementById("day").innerHTML = week[dateDay + 1]



}, 1000)







