
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





function isTriangle(a, b, c) {
    let arr = [a, b, c];
    if (a+b > c && a+c > b && b+c > a) {
        return true;
    } else {
        return false;
    }
}

// console.log(isTriangle(1, 2, 2))
// console.log(isTriangle(1, 2, 3))