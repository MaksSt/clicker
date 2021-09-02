
var plus = 1
var clicks = 0
var upgrades1 = 0
var miners1 = 0

cookieStorage = window.localStorage
// Сколько добавляется
if (!cookieStorage.getItem('plus'))
    cookieStorage.setItem('plus', '1')

plus = parseInt(cookieStorage.getItem('plus'))
document.getElementById("plus").innerHTML = plus

setInterval(() => {
    cookieStorage.setItem('plus', plus)
}, 10000);
// Кол-во кликов
if (!cookieStorage.getItem('cookie'))
    cookieStorage.setItem('cookie', '0')

clicks = parseInt(cookieStorage.getItem('cookie'))
document.getElementById("clicks").innerHTML = clicks

setInterval(() => {
    cookieStorage.setItem('cookie', clicks)
}, 10000);
//Улучшения
if (!cookieStorage.getItem('upgrades1'))
    cookieStorage.setItem('upgrades1', '0')

upgrades1 = parseInt(cookieStorage.getItem('upgrades1'))
document.getElementById("upgrades1").innerHTML = upgrades1

setInterval(() => {
    cookieStorage.setItem('upgrades1', upgrades1)
}, 10000);

if (!cookieStorage.getItem('upgrades2'))
    cookieStorage.setItem('upgrades2', '0')

upgrades2 = parseInt(cookieStorage.getItem('upgrades2'))
document.getElementById("upgrades2").innerHTML = upgrades2

//Майнер
if (!cookieStorage.getItem('miners1'))
    cookieStorage.setItem('miners1', '0')

miners1 = parseInt(cookieStorage.getItem('miners1'))
document.getElementById("miners1").innerHTML = miners1

setInterval(() => {
    cookieStorage.setItem('miners1', miners1)
}, 10000);


// Таймер майнера
setInterval(() => {
    clicks += miners1
    document.getElementById("clicks").innerHTML = clicks
}, 1000);

// Функции кнопок



const clicker = document.getElementById('clicker')
clicker.addEventListener('click', event => {
    clicks += plus
    document.getElementById("clicks").innerHTML = clicks
})


const upgrademenu = document.getElementById('upg')
upgrademenu.addEventListener('click', event => {
    document.getElementById("upg").style.display = 'none'
    document.getElementById("clicker").style.display = 'none'
    document.getElementById("upgmenu").style.display = 'block'
    document.getElementById("upgback").style.display = 'block'
})

const back = document.getElementById('upgback')
back.addEventListener('click', event => {
    document.getElementById("upg").style.display = 'block'
    document.getElementById("clicker").style.display = 'block'
    document.getElementById("upgmenu").style.display = 'none'
    document.getElementById("upgback").style.display = 'none'
})

// Кнопки улучшений

const upgr1 = document.getElementById('upgrade1')
upgr1.addEventListener('click', event => {
    if (clicks >= 10) {
        clicks -= 10
        plus += 2
        upgrades1 += 1
        document.getElementById("upgrades1").innerHTML = upgrades1
        document.getElementById("plus").innerHTML = plus
        document.getElementById("clicks").innerHTML = clicks
    }
})

const upgr2 = document.getElementById('upgrade2')
upgr2.addEventListener('click', event => {
    if (clicks >= 20000) {
        clicks -= 20000
        plus += 10000
        upgrades2 += 1
        document.getElementById("upgrades2").innerHTML = upgrades2
        document.getElementById("plus").innerHTML = plus
        document.getElementById("clicks").innerHTML = clicks
    }
})

const mine1 = document.getElementById('miner1')
mine1.addEventListener('click', event => {
    if (clicks >= 5000) {
        clicks -= 5000
        miners1 += 250
        document.getElementById("clicks").innerHTML = clicks
        document.getElementById("miners1").innerHTML = miners1
    }
})

const mine2 = document.getElementById('miner2')
mine2.addEventListener('click', event => {
    if (clicks >= 30000) {
        clicks -= 30000
        miners1 += 25000
        document.getElementById("clicks").innerHTML = clicks
        document.getElementById("miners1").innerHTML = miners1
    }
})
