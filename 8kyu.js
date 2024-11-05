
/**
 * @abstract A function that given a numeric array, multiplies
 * all the numbers from it and returns the result
 * @param {Array} x 
 * @returns {Integer} The result of multiplying all numbers from the array 
 */

function grow(x) {
    let result = 1;
    x.forEach(element => {
        result*=element;
    });
    return result;
}

// console.log(grow([1, 2, 3, 4]))




/**
 * @abstract Function that given an integer, returns a string that says the number (as a word)
 * @param {Integer} number Between 0 and 9 
 * @returns {String} the number as a word
 */

function switchItUp(number) {
    arr = ['Zero','One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    
    return arr[number];
}   
// console.log(switchItUp(5))