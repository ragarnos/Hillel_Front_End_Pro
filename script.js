const postNumber = prompt("Введи ID поста: ");

function getResponse() {
    fetch(`https://jsonplaceholder.typicode.com/posts/`+ `${postNumber}`)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then(error => {
            const err = new Error("Неверный ID поста")
            let resultat = document.getElementById('resultat');
            resultat.innerHTML = "Помилка: " + err
            err.data = error
            throw err
        })
    })
    .then((response) => {
        console.log(response);
        let resultat = document.getElementById('resultat');
        resultat.innerHTML = "User Id: " + response.id + '</br>' + "User title: " + response.title + "</br>" +
        "User Body: " + response.body
    })
}