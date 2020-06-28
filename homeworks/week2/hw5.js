function join(arr, concatStr) {
    let str = '';
    arr.forEach((item,i)=> {
        str += arr[i] + concatStr
    })
    return str
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
