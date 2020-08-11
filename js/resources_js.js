let isSafari = window.safari !== undefined;
alert(isSafari);
if (isSafari) {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    if (top <= 200) {
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
        setTimeout(function () {
            window.scrollTo(0, top);
        }, 300);
    }
}