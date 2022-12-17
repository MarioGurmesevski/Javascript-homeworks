//HOMEWORK #1
console.log("HOMEWORK #1")

// function shortStory() {
//     const arr = ["Kristijan", "tired", "sleeping"];
//     const name = (arr[0])
//     const mood = (arr[1])
//     const activity = (arr[2])
    
//     let story = ("This is"(name))
//     return story;
// }

// Ne mi e jasno kako da koristam strings i arary zaedno

//HOMEWORK #2
console.log("HOMEWORK #2")
const numArr = [6, 15, 300, 1954, 405];

function calculateSum(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i];
        sum += num;
    }
    return sum;
}

console.log(calculateSum(numArr));


//HOMEWORK #3
console.log("HOMEWORK #3")

// Ne mi e jasno kako da koristam strings i arary zaedno



//HOMEWORK #4
console.log("HOMEWORK #4")

for (let i = 1; i <= 20; i++) {
    console.log(i);
    if (i % 2 == 0) {
        console.log("Number is even")
    }
    else {
        console.log("Number is odd")
    }
}




//HOMEWORK #5
console.log("HOMEWORK #5")

const randomNumbers = [453, 60,421, 31, 806, 574, 56, 3045, 1, 54];

function calculateMax(numArray) {
    let counter = 0;
    let max = numArray[0];
    let min = numArray[0];

    while (counter < numArray.length) {
        let currentNumber = numArray[counter];
        console.log(currentNumber);
        if (currentNumber > max) {
            max = currentNumber;
        }
        else if (currentNumber < min) {
            min = currentNumber;
        }
        let sum = 0;
        for (let i = 0; i < numArray.length; i++) {
            sum += randomNumbers[i];
        }

        console.log(`Max is: ${max}`);
        console.log(`Min is: ${min}`);
        console.log(`Sum is: ${sum}`);

        counter++;
    }


}
console.log(calculateMax(randomNumbers));




//HOMEWORK #6
console.log("HOMEWORK #6")


// Ne mi e jasno kako da koristam strings i arary zaedno