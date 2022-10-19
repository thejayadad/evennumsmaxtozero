

let evenNumbers = function(max) {
    let evens = [];

    for (let i = 1; i < max; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        }
    }

    return evens;
};
