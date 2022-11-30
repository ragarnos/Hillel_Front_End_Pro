

var leng = window.prompt("Ввести длину для массива", "7");
var index, len;
let a = [];
for(index = 0, len = leng; index < len; ++index)
{
    a.push(window.prompt("Ввести цыфру для массива"));
    
}
a.sort();
a.splice(2, 3);
console.log(a);


var html = document.createElement('div')
html.innerHTML = a;
document.getElementById('text').appendChild(o)
