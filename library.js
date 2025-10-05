
//Task 1: Create a multi-dimensional array with nine books and/or movies of your choice.

let library = [
    ["War and Peace", "Crime and Punishment", "Anna Karenina"],
    ["Things Fall Apart", "Pride and Prejudice", "Sense and Sensibility"],
    ["Harry Potter", "Anne of Green Gables", "Charlotte's Web"]
];

//Task 2: Access and log all the elements in the array using bracket notation with numbers.
console.log("Library Items listed using bracket notation with numbers:\n");
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);
console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);
console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);

//Task 3: Access and log all the elements in the array using bracket notation with
//variables as indices. Use the variables row and item.
console.log("\nLibrary Items listed using for loop:\n");
for(let row=0;row<library.length;row++){
    for(let item=0; item<library[row].length;item++){
        console.log(library[row][item]);
    }
}

//Task 4: Write a loop that prints all the items on the second shelf.
console.log("\nItems on the second shelf:\n");
for(let i=0; i<library[1].length;i++){
    console.log(library[1][i]);
}