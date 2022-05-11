let numbers = [3,4,0,5,2,1,-5,-50, 173, 13, 35, 29, -130, 1999999, -200000, 12371, 554, -332, -1902, 100099, 88559, -936578]
for (let index = 0; index < 10000; index++) {
    numbers.push(Math.floor(Math.random() * 10009999))
    
}
let numbers2 = [0,-5,-50, 173]
let numbers3 = [13, 3.5, 29, -130]

function getMin(numbers){
    let a, minNumber = numbers[0];
    a=0;
    numbers[a]
    for (let a = 0; a < numbers.length; a++) {
        if(minNumber > numbers[a]){
            minNumber = numbers[a]
        }
    }

    return minNumber;
}

function getMinNumberPosition(numbers){
    let minNumber = getMin(numbers)

    for (let i = 0; i < numbers.length; i++) {
        if(minNumber == numbers[i]){
            minNuberPosition = i;
        }
    }

    return minNuberPosition;
}

function sort(numbers){
    let newNumbers = [];


    while(numbers.length > 0){
        let minNumber = getMin(numbers)
        let minNuberPosition = getMinNumberPosition(numbers);
        newNumbers[newNumbers.length] = minNumber;
        numbers.splice(minNuberPosition, 1);
    }

    return newNumbers;
}


function insertionSort(array){
    let sortedArray = []
    debugger;
    while (array.length > 0) {
        let newElement = array.pop();
        sortedArray = addInCorrectPosition(sortedArray, newElement)
        debugger;
    }
    return sortedArray;
}

function addInCorrectPosition(sortedArray, newElement){
    if(sortedArray.length === 0){
        sortedArray.push(newElement)
    }else{
        debugger
        for (let index = 0; index < sortedArray.length; index++) {
            if(newElement < sortedArray[index]){
                sortedArray.splice(index, 0, newElement);
                return sortedArray;
            }
        }
        sortedArray.push(newElement);
        return sortedArray;
    }



    return sortedArray;
}

// let sortedNumbers = insertionSort(numbers)
// let sortedNumbers2 = insertionSort(numbers2)
// let sortedNumbers3 = insertionSort(numbers3)

// console.log(sortedNumbers)
// console.log(sortedNumbers2)
// console.log(sortedNumbers3)


function measureInsSort() {
	const start = Date.now();
	for (let index = 0; index < 10000; index++) {
        insertionSort(numbers)
    }
	const duration = Date.now() - start;
	return duration;
}

function measureSort() {
	const start = Date.now();
	for (let index = 0; index < 10000; index++) {
        sort(numbers)
    }
	const duration = Date.now() - start;
	return duration;
}

console.log(measureInsSort())
console.log(measureSort())
