// filter method. function validUserNames that 
// that accepts an array of usernames(strings).
// it should return a new array, containing only 
// the usernames that are less than 10 characters.

const names = ['KatherineAlton', 'GabrielleHerbst', 'TodOwsley', 'Tallulah', 'PiperFrances', 'Sarah'];

const result = names.filter(word => word.length < 10);

console.log(result);
