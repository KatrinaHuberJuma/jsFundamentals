console.log("PLATFORM VERSION")

// // -------------------------------------------------------

// console.log(hello);                                   
// var hello = 'world';                                 

// // prediction:   'world'

// // -------------------------------------------------------

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

// // prediction:   'magnet'

// -------------------------------------------------------


// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

// prediction:   'okay only', 'super cool'
// prediction was WRONG (print function was never called)

// -------------------------------------------------------

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// // prediction:   'chicken', 'half-chicken'


// // -------------------------------------------------------

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

// prediction:   error

// // -------------------------------------------------------

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

// // prediction:   'disco', error
// // prediction was WRONG --apparently it can see 
                            // the function before it's defined? 
                            // is this because there is no "var" in the 
                            // function definition?
                            // Also, the function call gets hoisted over
                            // the console.log() outside of the function?

// // -------------------------------------------------------

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

// // prediction:   "seattle", "burbank", "san jose", "san jose"
// // prediction was WRONG -- why though?
// // -------------------------------------------------------

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
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

// prediction:  Object:{name: "Chicago", students: 65, hiring: true}, "closed for now"
// // prediction was WRONG -- const variables cannot be reassigned

// // -------------------------------------------------------