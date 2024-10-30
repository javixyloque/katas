

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