function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    console.log(arr)
    return arr;
}

module.exports = bubbleSort;