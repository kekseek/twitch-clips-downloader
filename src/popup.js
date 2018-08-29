var xhr = new XMLHttpRequest();
let range = "7d";
let URL;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    URL = tabs[0].url;
});

xhr.open("GET", `${URL}/clips?range=${range}`, true); // тут происходит ГЕТ запрос на указанную страницу
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) // если всё прошло хорошо, выполняем, что в скобках
    {
        var dannie = document.getElementById('dannie');
        dannie.innerHTML = xhr.responseText; // добавляем в блок с id=dannie  полученный код
    }
}
xhr.send();