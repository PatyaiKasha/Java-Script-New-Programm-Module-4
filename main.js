// 1. Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

// 2. Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.

// 3. Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const key = [];

// const key1 = [
//     "qwertyuiop[]", //0
//     "asdfghjkl;\'", //1
//     "zxcvbnm,./" //2
// ];

function addKeyboardLayout(alphabet) {

    let k1 = alphabet.slice(0, 12);

    let k2 = alphabet.slice(12, 23);

    let k3 = alphabet.slice(23);

    key.push(k1, k2, k3);

    // console.log('key', key);

    return key;

}

function getRandCharInRow(row) {

    console.log(row);

}

function getRandCharInAlph(alphabet) {
    // body... 
}


// addKeyboardLayout(alphabet);

getRandCharInRow();

// getRandCharInAlph(alphabet);

console.log(addKeyboardLayout(alphabet));