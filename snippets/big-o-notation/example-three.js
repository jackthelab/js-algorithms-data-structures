// What about nested for loops?

const printAllPairs = (n) => {

    let steps = 0;

    for(let i = 0; i < n; i++) {
        
        for(let j = 0; j < n; j++) {
            // console.log(i, j);
            steps += 1;
        }

    }

    console.log(`With n equal to ${n}, ${steps} operations were performed.`)

}

printAllPairs(1);
printAllPairs(10);
printAllPairs(100);
printAllPairs(1000);
printAllPairs(10000);

// this is an O(n) nested inside of an O(n)

    // O(n) * O(n) is O(n^2) 
        // this is quadratic


