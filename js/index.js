// Iteraction 1

let driversName = 'hacker1';
let navigatorsName = 'hacker2';

console.log(`The driver's name is ${driversName}`);
console.log(`The navgator's name is ${navigatorsName}`);

// Iteraction 2 
if (driversName.length > navigatorsName.length){
console.log(`The driver has the longest name, it has ${driversName.length} characters.`)
} else if (driversName.length < navigatorsName.length){
console.log(`It seems that the navigator has the longest name, it has ${navigatorsName.length} characters.`)
}else {
console.log(`Wow, you both have equally long names, ${driversName.length} characters!.`)
};


// Iteraction 3

let result = driversName.toUpperCase().split("").join(" ");
console.log(result);

function reverseString(s){
    return s.split("").reverse().join("");
}
reverseString(navigatorsName);