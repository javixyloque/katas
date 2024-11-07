

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

// console.log(queueTime([5,3,4], 1))
// console.log(queueTime([10,2,3,3], 2));
// console.log(queueTime([2,3,10,2], 2))




/**
 * @abstract function that given a number, returns as a string in expanded form
 * @param {Integer} num A number given by the user
 * @returns {String} The sum with zeros that composes that integer
 */

function expandedForm(num) {
    let arrNums = num.toString().split('');
    let zeros;
    let strFin = "";
    for (let i = 0; i < arrNums.length; i++) {
        zeros = "0".repeat(arrNums.length- i -1);
        if (arrNums[i] > 0) {
            strFin+= `${arrNums[i]+zeros} + `;
        }
        
    }
    return strFin.slice(0 , -3);
}

// console.log(expandedForm(156));
// expandedForm(1060)



/**
 * @abstract A function that given a number, returns the sum of all multiples of 3 or 5 below the number passed
 * @param {Integer} number 
 * @returns {Integer} sum of multiples of 3 and 5 below the number
 */


function multipleSum(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0) {
            sum+=i;
        } else if (i % 5 ===0 && i % 3 !=0) {
            sum+=i;
        }
    }
    return sum;
    
}

// console.log(multipleSum(10));





// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function romanNumbers (number) {
    let numeroArr = number.toString().split('');
    let contador = 0;
    let numRomano = "";
    for (let i = numeroArr.length - 1 ; i < numeroArr.length; i--) {
        switch (numeroArr[i]) {
            case 1:
        }
    }
}






/**
 * @abstract A function that given an array of numbers, return the distinct number on it
 * @param {Array} numbers 
 * @returns {Integer} The different one among the array
 */

function stray (numbers) {
    
    if (numbers[0] != numbers[1]) {
        if (numbers[0] == numbers[2]) {
            return numbers[1];
        } else {
            return numbers[0];
        }
    } else {
        let comparador = numbers[0];

        let newArr = numbers.filter((num) => num != comparador);
        return newArr[0];
    }
    
    
}

console.log(stray([3,1,1]));