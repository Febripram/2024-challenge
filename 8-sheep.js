// const countSheep = (num) => {
//     let result = '';
//   //your code here
//   for (let i = 1 ; i<= num; i++) {
//       result += i + ' sheep...'
//     }
//     return result
// }

const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3));