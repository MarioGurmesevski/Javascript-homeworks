let yearBorn = prompt("What year are you born");
let yearBornMeaning = (yearBorn - 4) % 12;
console.log (yearBornMeaning)
if (yearBornMeaning===0) {
    console.log("You are a Rat");
}
else if(yearBornMeaning===1){
    console.log("You are a Ox");
}
else if(yearBornMeaning===2){
    console.log("You are a Tiger");
}
else if(yearBornMeaning===3){
    console.log("You are a Rabbit");
}
else if(yearBornMeaning===4){
    console.log("You are a Dragon");
}
else if(yearBornMeaning===5){
    console.log("You are a Snake");
}
else if(yearBornMeaning===6){
    console.log("You are a Horse");
}
else if(yearBornMeaning===7){
    console.log("You are a Goat");
}
else if(yearBornMeaning===8){
    console.log("You are a Monkey");
}
else if(yearBornMeaning===9){
    console.log("You are a Rooster");
}
else if(yearBornMeaning===10){
    console.log("You are a Dog");
}
else{
    console.log("You are a Pig");
}