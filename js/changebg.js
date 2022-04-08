var a = document.getElementById('bg');
var b = document.getElementById('rotation');
var r = document.getElementById('rod');
b.onclick = function(){
    if(a.style.backgroundImage == 'none'){
        a.style.backgroundImage = "url(../img/1295632_2736-x-1824-wallpaper.jpg)";
        r.style.backgroundColor = 'rgb(254, 254, 254)';
    }
    else{
        a.style.backgroundImage = 'none';
        r.style.backgroundColor = 'wheat'
    }
}