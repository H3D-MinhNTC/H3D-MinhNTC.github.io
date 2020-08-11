let isSafari = window.safari !== undefined;
let isSafariNavigator = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') === -1 &&
    navigator.userAgent.indexOf('FxiOS') === -1;
if (isSafari || isSafariNavigator) {
    alert("Here");
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