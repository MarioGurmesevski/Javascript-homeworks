console.log("HOMEWORK PART 1")

function whatTypeIsYourWord(wordOrNumber){
    console.log(typeof(wordOrNumber));
    return wordOrNumber;
}
console.log(whatTypeIsYourWord());
console.log(whatTypeIsYourWord(431));
console.log(whatTypeIsYourWord("string"));
//Neznam kako da dobijam boolean i object


console.log("HOMEWORK PART 2")

function humanYearsToDogYears(humanYears){
    let result = (humanYears * 7);
    return result;
}

console.log(humanYearsToDogYears(6));


console.log("HOMEWORK PART 3")

function atm(totalMoneyWithdraw){

    let totalMoney=3000;
    
    let result= (totalMoney-totalMoneyWithdraw);
    
    if(result>0){
        console.log(`You have ${result}$ left`)
    }
    else if(result<0){
        console.log("You don't have enough money in the bank")
    }
    else{
        console.log("Please enter a number")
    }
    return result;

}

console.log(atm([4000]))