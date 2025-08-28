function isPalindrome(s){
    // to lowercase first before we use regex to expunge all signs and exclamations, then join
    let check = s.toLowercase().replace(/[^a-z0-9]/gi, '').join('')
    // pali reverses the value of check
    let pali = check.split('').reverse().join('')

    if(pali === check){
        return true
    }
    return false
}

/* 
Use Case
Input: "A man, a plan, a canal: Panama"
Cleaned: "amanaplanacanalpanama"
Reversed: "amanaplanacanalpanama"
Returns: True 
*/