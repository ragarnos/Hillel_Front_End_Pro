const bos = window.prompt('Що ви хочете зробити (add, sub, mult, div)?');

let result, firstNumber, secondNumber;

    switch (bos){

        case 'add':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) + Number(secondNumber);
             alert(`${firstNumber} + ${secondNumber} = ${result}`)
        break;

        case 'sub':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) - Number(secondNumber);
            alert(`${firstNumber} - ${secondNumber} = ${result}`)
        break;

        case 'mult':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) * Number(secondNumber);
            alert(`${firstNumber} * ${secondNumber} = ${result}`)
        break;

        case 'div':
            firstNumber = prompt('Введіть перше число', 0);
            secondNumber = prompt('Введіть друге число', 0);
            result = Number(firstNumber) / Number(secondNumber);
            alert(`${firstNumber} / ${secondNumber} = ${result}`)
        break;

        default:
        window.location.reload();
        break;
    }
