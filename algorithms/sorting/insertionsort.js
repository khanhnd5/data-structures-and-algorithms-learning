function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        if(array[i] <= array[0]) [array[0], array[i]] = [array[i], array[0]];
        let temp = array[i];
        for(let j = 0; j < i; j++) {
            if(temp >= array[j] && temp <= array[j + 1]) {
                for(let k = i; k > j + 1; k--) {
                    array[k] = array[k - 1]; 
                }
                array[j+1] = temp;
                break;
            }
        }
    }
    return array;
}

let array = [1, 3, 2, 9, 7, 5];
console.log(insertionSort(array))