console.log('This is file 1');
console.log('This is flie 2');

document.getElementById('burger').addEventListener("click", openMenu);

function openMenu(){
    console.log('kliknut sam');
    document.getElementById('dropdown').classList.toggle("active");
    document.getElementById('burger').classList.toggle("active");
}
