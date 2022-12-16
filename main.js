const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

console.group('Знайти суму та кількість позитивних елементів.');
let addPositive = 0;
let countPositive = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        addPositive += arr[i];
        countPositive += 1;
    }
}

console.log(`Сума = ${addPositive}, Кількість = ${countPositive}.`);
console.groupEnd();

console.group('Знайти мінімальний елемент масиву та його порядковий номер.')
let minCount = 0;
let minimum = arr[0];

for (let i=0;i<arr.length; i++) {
  if(arr[i] < minimum) {
    minimum = arr[i]; 
    minCount = i;
  }
}

console.log(`Мінімальний елемент = ${minimum}, Порядковий номер = ${minCount}.`);
console.groupEnd();


console.group('Знайти максимальний елемент масиву та його порядковий номер.')
let maxCount = 0;
let maximum = arr[0];

for (let i=0;i<arr.length; i++) {
  if(arr[i] > maximum) {
    maximum = arr[i]; 
    maxCount = i;
  }
}

console.log(`Mаксимальний елемент = ${maximum}, Порядковий номер =${maxCount}`);
console.groupEnd();


console.group('4 Визначити кількість негативних елементів.')
let countNegative = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0) {
        countNegative += 1;
    }
}

console.log(`Кількість негативних елементів = ${countNegative}.`);
console.groupEnd();

console.group('Знайти добуток позитивних елементів.')
let dobutok = 1;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
        dobutok = dobutok * arr[i];
    }
}

console.log(`Добуток = ${dobutok}`);
console.groupEnd();





