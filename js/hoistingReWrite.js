console.log("REWRITTEN VERSION")

// // -------------------------------------------------------
// var hello = 'world';  
// console.log(hello);                                   

// // prediction:   'world'

// // -------------------------------------------------------

// var needle = 'haystack';
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// test();


// // prediction:   'magnet'

// -------------------------------------------------------

// var brendan = 'super cool';

// console.log(brendan);

// prediction:   'okay only', 'super cool'
// prediction was WRONG (print function was never called)


// -------------------------------------------------------

// var food = 'chicken';
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// console.log(food);
// eat();


// // -------------------------------------------------------

// this is what the interpreter sees: 


// mean();
// console.log(food);

// console.log(food);

// // -------------------------------------------------------

// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// rewind();

// var genre = "disco";

// console.log(genre);


// // -------------------------------------------------------

// // WRONG
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// learn();

// dojo = "san jose";
// console.log(dojo);


// console.log(dojo);
// // WRONG

// // -------------------------------------------------------

function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


// // -------------------------------------------------------