//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase();
}
//Other solutions
const makeUpperCase = str => str.toUpperCase();

//Other unique solutions
function makeUpperCase(str) {
    return str.replace(/[a-z]/g, s => String.fromCharCode(s.charCodeAt(0) - 32))
}


/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

//my solution
function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
        return true;
    } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
        return true;
    } else return false;
}

//another solution

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}

//Other solutions:
function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1
}

//another solution:
const lovefunc = (flower1, flower2) =>
    !!((flower1 ^ flower2) % 2);

//another solution:
function lovefunc(flower1, flower2) {
    return flower1 % 2 != flower2 % 2
}


//another solution:
function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 != 0; // moment of truth
}
//complicated soultion:
let lovefunc = (f1, f2) => !!((f1 + f2) % 2)
