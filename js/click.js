
var plus = 1
var clicks = 0
var upgrades1 = 0 

cookieStorage = window.localStorage
// Сколько добавляется
if (!cookieStorage.getItem('plus'))
    cookieStorage.setItem('plus', '1')

plus = parseInt(cookieStorage.getItem('plus'))

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


// Функции кнопок



const clicker = document.getElementById('clicker')
clicker.addEventListener('click', event => {
    clicks += plus
    document.getElementById("clicks").innerHTML = clicks
})


const upgrademenu = document.getElementById('upg')
upgrademenu.addEventListener('click', event => {
    document.getElementById("upg").style.display='none'
    document.getElementById("clicker").style.display='none'
    document.getElementById("upgmenu").style.display='block'
    document.getElementById("upgback").style.display='block'
})

const back = document.getElementById('upgback')
back.addEventListener('click', event => {
    document.getElementById("upg").style.display='block'
    document.getElementById("clicker").style.display='block'
    document.getElementById("upgmenu").style.display='none'
    document.getElementById("upgback").style.display='none'  
})

const upgr1 = document.getElementById('upgrade1')
upgr1.addEventListener('click', event => {
    clicks-=10 
    console.log('alle')
    plus += 2
    upgrades1 +=1
    document.getElementById("upgrades1").innerHTML = upgrades1
})
