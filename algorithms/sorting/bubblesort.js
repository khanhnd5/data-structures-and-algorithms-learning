function bubbleSort(array) {
    while(true) {
        let sorted = true;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                sorted = false;
            }
        }
        if(sorted) break;
    }
    return array;
}

let array = [1, 3, 2, 9, 7, 5];
console.log(bubbleSort(array))