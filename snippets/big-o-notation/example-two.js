//Method 1

const countUpAndDown = (n) => {

    // going up
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }

    // going down
    for (let i = n; i >=0; i--) {
        console.log(i)
    } 

}

// countUpAndDown(10);

// This method is going to be 2n -- still falls in the linear category though
    // Written in Big-O as O(n) because we care about the big picture w/ Big-O