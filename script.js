
let len = window.prompt('Введи длину строки для генерации');
function characters(length) {
    var result_html  = '';
    var characters  = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result_html += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return document.body.innerHTML = result_html;
}

characters(len)