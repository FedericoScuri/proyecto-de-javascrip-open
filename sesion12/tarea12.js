

function fibo(num){
    if(num===1)return [1]
    if(num===2)return[1,1]

    let arr=[1,1]
    for (let i = 0; i < num; i++) {

        arr.push(arr[i-1]+arr[i-2])
        
    }
    return arr
}
console.log(fibo(5))