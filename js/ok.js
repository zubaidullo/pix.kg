function listenForShare() {
    if (window.addEventListener) {
        window.addEventListener('message', onShare, false);
    } else {
        window.attachEvent('onmessage', onShare);
    }
}
function onShare(e) {
    var args = e.data.split("$");
    if (args[0] == "ok_shared") {
        alert(args[1]); // Вывод идентификатора фрейма кнопки - в случае нескольких кнопок на одной странице, по нему можно определить какая именно была кликнута
    }
}
listenForShare();