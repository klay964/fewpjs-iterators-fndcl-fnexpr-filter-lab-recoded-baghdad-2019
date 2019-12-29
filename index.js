// Code your solution here
let arr = [1, 2, 3, 4, 5, 6];
let even = [];
for(var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) even.push(arr[i]);
  even.filter(n => {
  return n % 2 === 0;
});
}