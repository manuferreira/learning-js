/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */


function sumInput() {
    let arr = [];
    
    while ( true ) {
        let value = prompt('type a value', 0);
        if ( value === "" || value === null || !isFinite(value) ) {
            break;
        } else {
            arr.push(+value)
        }
    }
    let sum = 0;
    for ( item of arr ) {
        sum+=item;
    }
    return sum;
}