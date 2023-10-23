//STEP 1
var moviesArray = ["Harry Potter Part 1", "The Hunger Games Part 1", "Jab Tak Hai Jaan", "Yeh Jawaani Hai Deewani", "Teer enta!"];
console.log("Step 1: " + moviesArray[1]);

//STEP 2
var movies1 = new Array(5);
movies1[0] = "Harry Potter Part 1";
movies1[1] = "The Hunger Games Part 1";
movies1[2] = "Jab Tak Hai Jaan";
movies1[3] = "Yeh Jawaani Hai Deewani";
movies1[4] = "Teer enta!";
console.log("Step 2: " + movies1[0]);

//STEP 3
movies1.splice(2, 0, "The message 1976");
console.log("Step 3: " + movies1.length);
console.log(movies1[2]);

//STEP 4
var movies2 = [];
movies2[0] = "Harry Potter Part 1";
movies2[1] = "The Hunger Games Part 1";
movies2[2] = "Jab Tak Hai Jaan";
movies2[3] = "Yeh Jawaani Hai Deewani";
movies2[4] = "Teer enta!";
delete movies2[0];
console.log("Step 4: " + movies2);

//STEP 5
var movies3 = [];
movies3[0] = "Harry Potter Part 1";
movies3[1] = "The Hunger Games Part 1";
movies3[2] = "Jab Tak Hai Jaan";
movies3[3] = "Yeh Jawaani Hai Deewani";
movies3[4] = "Teer enta!";
movies3[5] = "The message 1967";
movies3[6] = "Devdas";
console.log("Step 5: ");
for(var i = 0; i < movies3.length; i++) {
    console.log(movies3[i]);
}

//STEP 6
var movies4 = [];
movies4[0] = "Harry Potter Part 1";
movies4[1] = "The Hunger Games Part 1";
movies4[2] = "Jab Tak Hai Jaan";
movies4[3] = "Yeh Jawaani Hai Deewani";
movies4[4] = "Teer enta!";
movies4[5] = "The message 1967";
movies4[6] = "Devdas";
console.log("Step 6: ");
for(index in movies4) {
    console.log(movies4[index] + ",");
}

//STEP 7
var movies5 = [];
movies5[0] = "Harry Potter Part 1";
movies5[1] = "The Hunger Games Part 1";
movies5[2] = "Jab Tak Hai Jaan";
movies5[3] = "Yeh Jawaani Hai Deewani";
movies5[4] = "Teer enta!";
movies5[5] = "The message 1967";
movies5[6] = "Devdas";
movies5.sort();
console.log("Step 7: ");
for(index in movies5) {
    console.log(movies5[index] + ",,");
}

//STEP 8
var leastFavMovies = ["Om Shanti Om", "El kebeer 2", "Insidious"];
console.log("Step 8: ");
console.log("Movies I like: ");
for(index in movies4) {
    console.log(movies4[index]);
}
console.log("...");
console.log("Movies I regret watching: ");
for(index in leastFavMovies) {
    console.log(leastFavMovies[index]);
}
console.log("...");

//STEP 9
var movies = movies5.concat(leastFavMovies);
console.log("Step 9: ");
movies = movies.sort().reverse()
console.log(movies);

//STEP 10
console.log("Step 10: ");
console.log(movies.pop());
