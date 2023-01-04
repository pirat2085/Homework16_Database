const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];
/*
1. Select and print all married person. (filter)
2. Print database sorted by age ASC. (min->max) (sort)
3. Calculate average age. (reduce)
4. Print statistic by country.
{'Israel':3, ...}
5#. Print married person sorted ASC by name, not married DESC by
age and average age of married person.
6. Remove user by position.
 */

// Functions for onclick event
function test1(){
    console.log(isMarried(database, true));
}

function test2(){
    console.log(ageSorter(database));
}

function test3(){
    console.log(averageAge(database));
}

function test4(){
    console.log(statistic(database));
}

function test5(){
    marriedSort(database);
}

function test6(){
    const deleteNumber = document.getElementById("deleteNumber");
    console.log(database)
    console.log(removeUser(database,deleteNumber.value));
}

// Function for implementation
function isMarried(database, yesNo) {
    if (yesNo) {
        return database.filter(function (value) {
            return value.isMarried;
        });
    }
    else {
        return database.filter(function (value) {
            return value.isMarried === false;
        });
    }

};

function ageSorter(database) {
    return database.sort(function (a,b) {
        if (a.age>b.age) return 1;
        if (a.age<b.age) return -1;
        return 0;
    });
};

function averageAge(database) {
    const age=database.reduce(function (acc, value) {
        if (value) acc=acc+value.age;
        return acc;
    },0);
    return age/database.length;
};

function statistic(database) {
    const res=database.reduce(function (acc, value) {
        if (acc[value.country]) {
            acc[value.country]++;
        } else {
            acc[value.country]=1;
        }
        return acc;
    }, {});
    return res;
};

function marriedSort(database) {
    const married=isMarried(database,true).sort(function (a,b) {
        if (a.name>b.name) return 1;
        if (a.name<b.name) return -1;
        return 0;
    });
    console.log(married);
    console.log("Average age married = "+averageAge(married));
    console.log(isMarried(database,false).sort(function (a,b) {
        if (a.name>b.name) return -1;
        if (a.name<b.name) return 1;
        return 0;
    })
    );
};

function removeUser(database, userNumber) {
    database.splice(userNumber,1);
    return database;
};
