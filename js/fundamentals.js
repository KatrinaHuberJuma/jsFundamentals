let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};



function printStudents(arr){
    for (let i = 0; i < arr.length; i++){
        console.log("name: " + arr[i]["name"] + ", cohort: " + arr[i].cohort)
    }
}

function printUsers(obj){
    for (key in obj){
        console.log(key.toUpperCase());
        for (let i = 0; i < obj[key].length; i++){
            var user = obj[key][i];
            var str = i + " - " + user.last_name.toUpperCase() + ", " + user.first_name.toUpperCase() + " - ";
            var count = user.last_name.length + user.first_name.length;
            console.log(str + count);


        }
    }
}




// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9