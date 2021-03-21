var footerXHR= new XMLHttpRequest();
footerXHR.open('GET', '/2021-websites/owen/components/footer.html', true);
footerXHR.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return;
    var footerExsists = setInterval(() => {
        if (document.getElementById('footer')) {
            clearInterval(footerExsists);
            document.getElementById('footer').innerHTML= this.responseText;
        }
    }, 100);
};
footerXHR.send();

var headerXHR= new XMLHttpRequest();
headerXHR.open('GET', '/2021-websites/owen/components/header.html', true);
headerXHR.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return;
    document.getElementById('header').innerHTML= this.responseText;
    var slideoutXHR= new XMLHttpRequest();
    slideoutXHR.open('GET', '/2021-websites/owen/components/slideoutmenu.html', true);
    slideoutXHR.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return;
        document.getElementById('slideoutmenu').innerHTML= this.responseText;
        console.log('script');
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', '/2021-websites/owen/scripts/slideMenu.js');
        script.setAttribute('defer', '');
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    slideoutXHR.send();
};
headerXHR.send();
