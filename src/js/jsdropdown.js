
var menuLink = document.getElementsByClassName('b-header__link'),
    windowWidth = document.documentElement.clientWidth;

    

document.getElementById('burger').addEventListener("click", openMenu);

if(windowWidth < 1024){
    for (var i = 0 ; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click' , closeMenu ) ;
     }
}

function openMenu(){
    document.getElementById('dropdown').classList.toggle("active");
    document.getElementById('burger').classList.toggle("active");
}

function closeMenu(){
    document.getElementById('dropdown').classList.toggle("active");
}
