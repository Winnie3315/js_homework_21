let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let arr_two = [[1,2,3,4],[5,[6,7,[8,9],10],11],[12,13],[[[[[14,15]]]]]]



function fizzBuzz(arr) {
let result = []

    for(let itm of arr){
        if(itm % 3 === 0 && itm % 5 === 0){
            result.push("FizzBuzz")
        }else if(itm % 5 === 0){
            result.push("Buzz")
        }else if(itm % 3 === 0){
            result.push('Fizz')
        }else{
            result.push(itm)
        }
    }
    return result
}
let fizz = fizzBuzz(arr)
    

console.log(fizz);

function flatten(arr) {
    let cleared = []

    for(let itm of arr){
        if (Array.isArray(itm)) {
            cleared.push(...flatten(itm))
        }else{
            cleared.push(itm)
        }
    }
    
    return cleared
}



let arrCleared = flatten(arr_two)
console.log(arrCleared);
