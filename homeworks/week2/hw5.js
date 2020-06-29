function join(arr, concatStr) {
    if(arr.length === 0) {
        return arr
    }

    let result = arr[0];
    for(let i=1; i<arr.length; i++) {
        result += concatStr + arr[i]
    }
    return result
}

function repeat(str, times) {
    let string = '';
    for(let i=0; i<times; i++) {
        string += str
    }
    return string
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
