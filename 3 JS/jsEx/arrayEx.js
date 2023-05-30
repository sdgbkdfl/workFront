'use strict';
const fruits = ['🍎', '🍋'];
console.log(fruits);
console.log(fruits.lengths);

// 3. Looping over an Array
// print all fruits
// a. for
for (let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of 
for(let fruit of fruits){
    console.log(fruits);
};

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Additon, deletion, copy
//add an item to the end
// remove an item from the end
fruits.push('🍓','🍑');
console.log(fruits);
fruits.pop();
console.log(fruits);

// 5. Searching
// find the index :  indexOf
//🍎 인덱스 찾고자 할 때
console.log(fruits.indexOf('🍎'));

// lastIndexOf : 배열에 있는 중복된 값 중 마지막에 있는 값 출력
// (indexOf : first one )

