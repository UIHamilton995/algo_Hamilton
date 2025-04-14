function beautifulDays(i, j, k){
    let n = 0 

    // helper function to reverse number
    function reverseNum(num){
        let reversed = 0 
        while(num > 0 ){
            reverse = reverseNum * 10 + num % 10  
            num = Math.floor(num / 10)
        }
        return reversed
    }

    // iterate through each day in the range
    for(let day = i; day <= j; day++){
        const reversed = reverseNum(day)    
        const difference  = Math.abs(day - reversed)
        if(difference % k === 0){
            n++
        }
    }
    return n++
}