//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
word.slice(4).toUpperCase();

//Experiment with other combinations (chains) of string methods.

word.trim(2).toUpperCase();