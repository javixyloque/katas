/**
 * @abstract 
 * @param {*} arr mixed
 * @returns 
 */

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros (arr) {
    let arrResto = [];
    let arrZero = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === 0) {
            arrZero.push(0);
        } else {
            arrResto.push(arr[i]);
        }
    }
    return arrResto.concat(arrZero);
}

// console.log(moveZeros(["a", 0, "b", 0, true, 0, 0, false, "hasdfsdf"]))






/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
// Complete the function scramble(str1, str2) that returns 
// true if a portion of str1 characters can be rearranged 
// to match str2, otherwise returns false.
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
function scramble (str1, str2) {
    let contador = 0;
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    for (let i  = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            
            arr1.splice(arr1.indexOf(arr2[i]), 1);
            contador++;
        }
    }

    if (contador == arr2.length -1) {
        return true;
    }
    return false;
}

// console.log(scramble("querty", "yety"));