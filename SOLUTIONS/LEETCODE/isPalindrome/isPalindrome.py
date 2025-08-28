def isPalindrome(s) :
    check = ''.join([c.lower(), for c in s if c.isalnum()])
    pali = check [::-1]
    return check == pali


    # ANOTHER SOLUTION THAT ELUDES THE REGEX EXPRESSION

def isPalindrome(s):
    # clean the string to lowercase and return only alphanumeric
    cleaned = [] 
    for char in s:
        if char.isalnum:
            cleaned.append(char.lower())
    check = ''.join(cleaned)

    pali = check[::1]
    return pali == check