function myRecursion(arr, n) {
   if (n == 0) {
       return 0;
   } else {
       return arr;
   }
}

console.log(myRecursion([1], 0));
module.exports = myRecursion;