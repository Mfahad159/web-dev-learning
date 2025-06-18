let arr = [1, 2, 3, 4, 5];
console.log(arr);

//Maps in Array
// returns a new array with the results of
//  calling a provided function on every element
//  in the calling array

//method # 1

console.log(arr.map(function (item) {
    return item * 10;
}));

// method # 2

console.log(arr.map((item) => {
    return item * 10;}));

// method # 3
console.log(arr.map((item) => item * 10))