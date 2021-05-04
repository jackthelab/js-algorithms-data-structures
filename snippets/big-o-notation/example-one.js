// write a function that calculates sum of all numbers from 1 up to and including n

// Method 1

const sumUpTo = (n) => {

    let total = 0

    for(i = 1; i <= n; i++) {
        total += i;
    }

    return total

}

// console.log(sumUpTo(10))

// Method 2

const otherSumUp = (n) => {

    return n * (n+1) / 2

}

// console.log(otherSumUp(10))

//Which is better?

    // What does better mean? Faster, less memory, more readable?

    // Can use instances of Date.now() to measure time performance.
        // This isn't exactly how to measure but for the sake of visualization.
        // Same machine can run at different speeds but different machines can be different.
        // Time doesn't measure efficiency. This is where BigO comes in. See below.

const t1 = Date.now();
sumUpTo(1000000000);
const t2 = Date.now();

console.log(`Method 1 took ${(t2 - t1)} ms`);

const t3 = Date.now();
otherSumUp(1000000000);
const t4 = Date.now();

console.log(`Method 2 took ${(t3 - t4)} ms`);

// Initially the times are similar but a loop at this magnitude will be linear and constantly increasing as n grows

    // this becomes a problem for sumUpTo with larger datasets

        // sumUpTo(1) is 1 step and sumUpTo(10) is 10 steps
            // This is O(n) notation -- linear

    // However, otherSumUp takes the same amount of steps regardless of n

        // That means otherSumUp(1) and otherSumUp(1000000000000) take the exact same time.
            // called O(1) notation -- constant
        
    // For Big O, we're looking at number of operations required in the worst case scenario




