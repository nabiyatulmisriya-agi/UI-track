//pop
var arr = [1, 2, 3, 4, "abc", "xyz", 8, 9];
arr.push(10);
console.log(arr);

//push
var arr1 = [1, 2, 3, 4, "abc", "xyz", 8, 9];
arr1.pop();
console.log(arr1);

//shift
var arr2 = [1, 2, 3, 4, 8, 9];
arr2.shift();
console.log(arr2);

//unshift
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr3.unshift(0);
console.log(arr3);

//slice
var arr4 = [1, 2, 3, 4, "abc", "xyz", 8, 9];
var newArr = arr4.slice(3, 6);
console.log(newArr);
console.log(arr4);

//splice
var arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr5.splice(3, 4);
console.log(arr5);

var arr5a = arr5.splice(1, 2);
console.log(arr5a);

//splice adding
var arr5b = arr5.splice(1, 0, 3, 5);
console.log(arr5b);

//split
var str = "have a gud day!";
var newstr = str.split(" ");
console.log(newstr);
