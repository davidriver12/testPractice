function capitalize(string) {
    return string.toUpperCase();
};

const reverseString = (string) => {
    let stringArray = [];
    for (let c in string){
        stringArray.push(string[c]);
    };
    stringArray = stringArray.reverse();
    let newString = '';
    for (let char of stringArray){
        newString += char;
    }
    return newString;
};

const calculator = {
    add: function(a, b){
        return (a+b);
    },
    subtract: function(a,b){
        return (a-b);
    },
    divide: function(a,b){
        return(a/b);
    },
    multiply: function(a,b){
        return(a*b);
    }
};

const alphabet = {
    'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13,
    'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25,
    'z':26
};
const reverseAlphabet ={
    1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 9:'i', 10:'j', 11:'k', 12:'l', 13:'m',
    14:'n', 15:'o', 16:'p', 17:'q', 18:'r', 19:'s', 20:'t', 21:'u', 22:'v', 23:'w', 24:'x', 25:'y',
    26:'z'
};
function caesarCipher(string, k){
    let newString = '';
    let isUpper = false;
    for (let char of string){
        isUpper = false;
        if (isLetter(char)){
            if (char == char.toUpperCase()){
                isUpper = true;
                char = char.toLowerCase();
            }
            char = alphabet[char];
            char = (char + k)%26;
            char = reverseAlphabet[char];
            if (isUpper){
                char = char.toUpperCase();
            };
        };
        newString += char;
    };
    return newString;
};

function analyzeArray(array){
    let total = 0;
    let min = array[0];
    let max = array[0];
    for (let num  of array){
        total += num;
        if (num < min){
            min = num;
        }
        if (num > max){
            max = num;
        }
    };
    let average = total/array.length;


    return {
        average,
        min,
        max,
        length: array.length
    }
};

//Helper Functions
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};