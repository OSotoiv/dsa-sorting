// Helper function: Get the digit at the given place value
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function: Get the number of digits in a number
function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function: Get the number of digits in the largest number in an array
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// Radix sort function
function radixSort(arr) {
    const maxDigits = mostDigits(arr);

    for (let i = 0; i < maxDigits; i++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}


module.exports = { getDigit, digitCount, mostDigits, radixSort };