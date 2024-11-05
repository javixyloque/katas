

/**
 * @abstract Function that given a string, replace every letter with its position in the alphabet.
 * @param {string} text 
 * @returns A string with all the positions of the characters
 */

function alphabetPosition (text) {
    let charCode;
    let output = "";
    for (let i = 0; i < text.length;i++) {
        charCode = text[i].charCodeAt()
        if ( charCode >= 65 && charCode <= 90 ) {
            output += (charCode-64)+ " ";
        } else if (charCode >= 97 && charCode <= 122) {
            output += (charCode-96)+ " ";
        }
    }
    return output.substring(0, output.length-1);

}

// console.log(alphabetPosition("abdc ABDC - Asd"));



/**
 * @abstract Function that given a string, returns "(" if string appears once or ") if it repeats on the original string
 * Ignores case letters
 * @param {*} word 
 * @returns A string composed by ()
 */

function duplicateEncode(word){
    let lowerCase = word.toLowerCase();
    let strPar = "";
    let counter = 0;
    for (let i = 0; i<=lowerCase.length; i++) {
        counter = lowerCase.split(lowerCase[i]).length-1;
        if (counter == 1) {
            strPar+="(";
        } else if (counter >1) {
            strPar+=")";
        }
    }
    return strPar;
}

// console.log(duplicateEncode("amaya"));

/**
 * @abstract Function that counts every letter in a phrase
 * @param {*} string 
 * @returns An object with all the characters (key) and their appearances (value)
 */

function count(string) {
    object = {};
    if (string != '' && string != null && string != 0) {
        for (let i = 0; i < string.length; i++) {
            object[`${string[i]}`] = string.split(string[i]).length - 1; // Devuelve la longitud del array que hace buscando el caracter de esa posicion del string
        }
    } else {
        return object;
    }
    return object;
}

// console.log(count());
// console.log(count("jesusmiguel anbdres"))





/**
 * @abstract A function that given customers (& time they waste to check out) and number of checkout tills
 * @param {*} customers an array of positive integers representing the queue, the number
 * represents the time they require to check out
 * @param {*} n number of checkout tills (cajas registradoras)
 */



function queueTime (customers, n) {
    // let sum = 0;
    // if (n === 1) {
    //     customers.forEach(element => {
    //         sum+=element;
    //     });
    //     return sum/n;
    // } else {
    //     if (n >= customers.length) {
    //         sum = Math.max(...customers);
    //         return sum;
    //     } else {
    //         customers.forEach (element => {
    //             element > n ? sum += element : sum-=element;
    //         })
    //         return sum;
    //     }
    // }

    long = 0;

    customers.forEach(element => {
        long+=element;
    });
    arr = new Array(long);
    arr.fill("*");
}

console.log(queueTime([5,3,4], 1))
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10,2], 2))