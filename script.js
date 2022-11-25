const year = window.prompt('Ваш рік народження?');
let birthday;
if (year === null){
    birthday = 'Ви не захотіли ввести свій рік народження';
    alert('Шкода, що Ви не захотіли ввести свій рік народження ');
}else {
    birthday = `Ваш вік народження => ${year}`;
}
const city = prompt('Ваше місто, де ви проживаєте?');
let country;
if (city === null){
    country = 'Ви не захотіли ввести свіє місто';
    alert('Шкода, що Ви не захотіли ввести свіє місто');
}else {
    switch (city){
        case "Київ":
            country = 'Ти живеш у столиці України';
            break;
        case "Вашингтон":
            country = 'Ти живеш у столиці США';
            break;
        case "Лондон":
            country = 'Ти живеш у столиці Англії';
            break;
        default:
            country = `Ти живеш у місті ${city}`;
    }
}
const sport = prompt('Який ваш улюблений вид спорт?');
let champion;
if (sport === null){
    champion = 'Ви не захотіли ввести свій улюблений вид спорту';
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}else {
    switch (sport){
        case "Футбол":
            champion = 'Круто! Хочеш стати як Рональдо?';
            break;
        case "Бокс":
            champion = 'Круто! Хочеш стати як Тайсон?';
            break;
        case "Баскетбол":
            champion = 'Круто! Хочеш стати як Джордан?';
            break;
        default:
            champion = `Круто! Твій спорт => ${sport}`;
    }
}
alert(`${birthday}\n${country}\n${champion}`);