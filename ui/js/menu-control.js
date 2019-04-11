const menu = document.getElementById("menu");
const close = document.getElementById("close");
const menuMore = document.getElementById("menu-more");

close.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'none';
});

menuMore.addEventListener('click', (event) => {
    event.preventDefault();
    menu.style.display = 'block';
});