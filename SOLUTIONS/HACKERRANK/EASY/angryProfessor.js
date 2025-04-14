function AngryProfessor(k, a) {
    // initialise a time checker for the punctual arrivals
    let onTimeCount = 0

    // loop through arrivals(a) to know who came ontime or before time
    for (const num of a){
        if (num <= 0){
            onTimeCount++
        }
    }

    // if the number of students is not up to what he wants to teach, then yes! he will leave the class 
    return onTimeCount < k ? "YES" : "NO";
}