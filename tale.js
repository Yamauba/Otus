var namePerson = prompt();

function kolobok() {
    switch (namePerson) {
        case 'дедушка': 
            console.log('Я от дедушки ушёл');
            break;
        case 'заяц': 
            console.log('Я от зайца ушёл');
            break;
        case 'лиса': 
            console.log('Меня съели');
            break;
        default:
            console.log('Такого персонажа в нашей версии сказки нет');

    }
}

kolobok();

var namePerson = prompt();

if (namePerson !='Дед Мороз' && namePerson != 'Снегурочка')
    alert ('Такого персонажа в нашей версии сказки нет');

function newYear() {
    alert(`${namePerson}! ${namePerson}! ${namePerson}!`);
}

newYear();