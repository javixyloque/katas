
/**
 * @abstract A function that given a number, returns the square of every digit on it,
 *           in a new number
 * @author Javier Alvarez Centeno
 * @returns 
 */
function squareDigits (num) {
    let strNum = num.toString();
    let newStr = ""
    for (let i = 0; i<strNum.length; i++) {
        newStr+=(strNum[i]**2).toString();
    }
    return parseInt(newStr);
}
// console.log(squareDigits(34));