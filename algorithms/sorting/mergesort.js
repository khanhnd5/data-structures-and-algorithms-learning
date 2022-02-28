function mergeSort(array, left, right) {
    let sortedArray = [];
    if(left === right) {
        sortedArray.push(array[left]);
        return sortedArray;
    } 
    let mid = Math.floor((left + right) / 2);
    let leftArray = mergeSort(array, left, mid);
    let rightArray = mergeSort(array, mid + 1, right);
    let i = 0;
    let j = 0;
    while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] <= rightArray[j]) {
            sortedArray.push(leftArray[i]);
            i++;
        } else {
            sortedArray.push(rightArray[j]);
            j++;
        }
    }
    if(i == leftArray.length) {
        for(let k = j; k < rightArray.length; k++) {
            sortedArray.push(rightArray[k]);
        }
    } else {
        for(let k = i; k < leftArray.length; k++) {
            sortedArray.push(leftArray[k]);
        }
    }
    return sortedArray;
}

let array = [1, 3, 2, 9, 7, 5];
console.log(mergeSort(array, 0, array.length - 1))