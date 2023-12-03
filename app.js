// Quick Question #1
// What does the following code return?
// new Set([1,1,2,2,3,4]);
//Answer: {1,2,3,4}


// Quick Question #2
// What does the following code return?
// [...new Set("referee")].join("")
//Answer: 'ref'


// Quick Question #3
// What does the following code return?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
//Answer: 0: {[1,2,3] => true} 1: {[1,2,3] => false}


// hasDuplicate

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
function hasDuplicate(arr){
    const noDuplicate = [...new Set(arr)];
    return !(noDuplicate.length === arr.length);
}
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])); // false


// vowelCount

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
function vowelCount(str){
    const vowels = 'aeiou';
    const lowerCaseStr = str.toLowerCase();
    const vowelMap = new Map();
    for (let letter of lowerCaseStr){
        if (vowels.includes(letter)){
            if (vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter) + 1);
            } else{
                vowelMap.set(letter, 1);
            }
        }
    }
    return vowelMap;
}

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }