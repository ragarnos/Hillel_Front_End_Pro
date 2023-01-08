let result = document.querySelector(".result");
let resultPop = document.querySelector(".result")


function validateForm(){
    const firstName = document.forms["form"].firstName.value;
    const secondName = document.forms["form"].secondName.value;
    const date = document.forms["form"].date.value;
    const gender = document.forms["form"].gender.value
    const city = document.forms["form"].city.value;
    const mail = document.forms["form"].mail.value;
    const listOfCheck = [checked1, checked2, checked3];
    const listOfLang = [language1, language2, language3];
    result.style.display = 'block';
    resultPop.innerHTML += `<li>Ім'я: ${firstName}</li>`;
    resultPop.innerHTML += `<li>Прізвище: ${secondName}</li>`;
    resultPop.innerHTML += `<li>Дата народження: ${date}</li>`;
    resultPop.innerHTML += `<li>Стать: ${gender}</li>`;
    resultPop.innerHTML += `<li>Місто: ${city}</li>`;
    resultPop.innerHTML += `<li>Адреса: ${mail}</li>`;
    for (let i=0; i<listOfLang.length+1; i++){
        if (listOfCheck[i] == true) {
            resultPop.innerHTML += `<li>Мова ${i+1} : ${listOfLang[i].value}</li>`;
        }
    }
}
const language1 = document.getElementById('language1');
const language2 = document.getElementById('language2');
const language3 = document.getElementById('language3');
function saved() {
    localStorage.setItem('language1', language1.checked);
    localStorage.setItem('language2', language2.checked);
    localStorage.setItem('language3', language3.checked);


}
const checked1 = JSON.parse(localStorage.getItem('language1'));
const checked2 = JSON.parse(localStorage.getItem('language2'));
const checked3 = JSON.parse(localStorage.getItem('language3'));
function load() {
    document.getElementById("language1").checked = checked1;
    document.getElementById("language2").checked = checked2;
    document.getElementById("language3").checked = checked3;
}

load();

const save = document.getElementsByName('gender');
for (var i = 0; i < save.length; i++) {
    save[i].onclick = function () {
        localStorage.setItem('Radio', this.value);
    }
}
if (localStorage.getItem('Radio')) {
    let Radio = localStorage.getItem('Radio');
    document.querySelector('input[name="gender"][value="' + Radio + '"]').setAttribute('checked', 'checked');
}