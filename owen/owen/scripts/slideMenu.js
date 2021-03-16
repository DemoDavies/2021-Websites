var slideOutMenu = document.getElementById('slideoutmenu');
var menuButton = document.getElementById('menuButton');
var closeButton = document.getElementById('closeButton');

menuButton.addEventListener('click', function (e) {
    let open = slideOutMenu.classList.contains('slideoutmenuopen');
    if (open) {
        slideOutMenu.classList.remove('slideoutmenuopen');
    } else {
        slideOutMenu.classList.add('slideoutmenuopen');
    }
});

slideOutMenu.addEventListener('click', function (e) {
    let open = slideOutMenu.classList.contains('slideoutmenuopen');
    if (open) {
        slideOutMenu.classList.remove('slideoutmenuopen');
    }
});

closeButton.addEventListener('click', function (e) {
    slideOutMenu.classList.remove('slideoutmenuopen');
});