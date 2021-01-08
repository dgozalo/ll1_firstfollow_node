const firstFollow = require('first-follow');


const rules = [
    // S -> a b A
    {
        left: 'S',
        right: ['A', 'B']
    },

    // A -> b c
    {
        left: 'B',
        right: ['*', 'A', 'B']
    },

    {
        left: 'B',
        right: [null]
    },

    // A -> ε
    {
        left: 'A',
        right: ['C']
    },

    {
        left: 'C',
        right: ['(', 'S', ')']
    },

    {
        left: 'C',
        right: ['i']
    },

];

const { firstSets, followSets, predictSets } = firstFollow(rules);

console.log(firstSets);
console.log(followSets);

