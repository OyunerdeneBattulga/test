let target
let n = []

for (let i = 0; i < n.length; i++) {
    const arr = [i];
    for (let j = i+1; j < n. length; j++) {        
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j])
        }
    }
}


















// const { first } = require("lodash");
// const _ = require("lodash");

// // 1 bodlog
// console.log(_.difference([1 ,2 ,3] , [1 ,2 ,4]))



// //2 bodlog
// // var products = [
// //     { 'product': 'banana',  'hasGMO': true },
// //     { 'product': 'apple',    'hasGMO': false },
// //     { 'product': 'orange', 'hasGMO': false }
// //   ];
  
// // console.log(_.dropWhile(products, { 'product': 'banana', 'hasGMO': true }))






// //3 bodlog
// // var products = [
// //     { 'product': 'banana',  'hasGMO': true },
// //     { 'product': 'apple',    'hasGMO': false },
// //     { 'product': 'orange', 'hasGMO': false }
// //   ];
// // console.log(_.findIndex(products, function(o) { return o.hasGMO == true; }))






// //4 bodlog
// // var a = ([1, 2, 3]);
// // console.log(_.fill(a, 0))




// //5 bodlog
// // console.log(_.intersection([2, 3], [3, 2]))






// // 7 bodlog
// // console.log(_.xor([2, 1], [2, 3]))





// // 6 bodlog
// // console.log(_.union([2], [1, 2]))




// //8 bodlog
// // console.log(_.isEqual('2', 2))




// // 9 bodlog
// // console.log(_.max([4, 2, 8, 6]))





// //10 bodlog
// // console.log(_.sum([4, 2, 10, 6]))





// //11 bodlog
// // console.log('1' , _.random(10) , '5')


// //12 bodlog
// // function Foo() {
// //   this.a = 1;
// // }
// // function Bar() {
// //   this.c = 3;
// // }
// // Foo.prototype.b = 2;
// // Bar.prototype.d = 4;
// // console.log(_.assignIn({ 'a': 0 }, new Foo, new Bar))





// //13 bodlog
// // let products = {
// //     banana: {'hasGMO': true },
// //     apple: {'hasGMO': true },
// //     orange: {'hasGMO': false },
// // };
// // console.log(_.findKey(products, {'hasGMO': true} ))





// //14 bodlog
// // let products = {
// //     banana: {'hasGMO': true },
// //     apple: {'hasGMO': true },
// //     orange: {'hasGMO': false },
// // };
// // console.log(_.keysIn(products))



