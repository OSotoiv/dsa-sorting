function insertionSort(arr) {
    let length = arr.length;

    for (let i = 1; i < length; i++) {
        let currentValue = arr[i];
        let position = i;

        while (position > 0 && arr[position - 1] > currentValue) {
            arr[position] = arr[position - 1];
            position--;
        }

        arr[position] = currentValue;
    }

    return arr;
}

module.exports = insertionSort;