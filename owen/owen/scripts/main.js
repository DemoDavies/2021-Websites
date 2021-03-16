$(function () {
    $('#footer').load('/2021-websites/owen/components/footer.html');
    $('#header').load('/2021-websites/owen/components/header.html', function () {
        $('#slideoutmenu').load('/2021-websites/owen/components/slideoutmenu.html');
    });
})