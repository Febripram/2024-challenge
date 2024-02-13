// const min = (list) => {
//     let minValue = list[0];
//     for (let i = 0; i <= list.length; i++) {
//         if(minValue > list[i]){
//             minValue = list[i];
//         }
//     }
//     return minValue;
// }
// console.log(min([-52, 56, 30, 29, -54, 0, -110]))

// const max = (list) => {
//     let maxValue = list[0];
//     for (let i = 0; i <= list.length; i++) {
//         if(maxValue < list[i]){
//             maxValue = list[i];
//         }
//     }
//     return maxValue;    
// }

// console.log(max([-52, 56, 30, 29, -54, 0, -110]))

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]))