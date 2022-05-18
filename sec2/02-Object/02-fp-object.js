// Object data type

const person = {
    fname: "Thanh",
    lname: "Ng.",
    bdate: new Date(2022, 05, 15),
    job: "Programmer",
};

const meal = {
    description: "Mango Cookie",
    calories: 100,
    exDate: new Date(2022, 0, 1),
};

const updatedCalories = meal.calories + 150; 


console.log("First name:", person.fname);
console.log("Last name :", person.lname);
console.log("Birth day:", person.bdate.toString());
console.log("Job:", person.job);

console.log(meal.description);
console.log("Calories:", meal.calories);
console.log("Expiration Date:", meal.exDate.toString());

console.log("Updated calories:", updatedCalories)