

var clicks = 0;

const clicker = document.getElementById('clme');
clicker.addEventListener('click', event => {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
});

const upgrademenu = document.getElementById('upg');
upgrademenu.addEventListener('click', event => {
    document.getElementById("upg").style.display='none';
    document.getElementById("clme").style.display='none';
    document.getElementById("upgmenu").style.display='block';
    document.getElementById("upgback").style.display='block';
});

const back = document.getElementById('upgback');
back.addEventListener('click', event => {
    document.getElementById("upg").style.display='block';
    document.getElementById("clme").style.display='block';
    document.getElementById("upgmenu").style.display='none';
    document.getElementById("upgback").style.display='none';
});