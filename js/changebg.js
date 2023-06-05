var a = document.getElementById('bg');
var b = document.getElementById('rotation');
var r = document.getElementById('rod');
/*b.onclick = function() {
    if(a.style.backgroundImage == 'none'){
        a.style.backgroundImage = "url(./img/98124138_p0.jpg)";
        r.style.backgroundColor = 'rgb(254, 254, 254)';
    }
    else{
        a.style.backgroundImage = 'none';
        r.style.backgroundColor = 'wheat'
    }
}*/
b.onclick = function() {
    if(a.style.backgroundColor == 'white') {
        a.style.backgroundColor = 'rgba(50,50,50,1)';
    }
    else{
        a.style.backgroundColor = 'white';
    }
}