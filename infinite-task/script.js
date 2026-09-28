for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("InfiniteTiers");
    } 
    else if (i % 3 === 0) {
        console.log("Infinite");
    } 
    else if (i % 5 === 0) {
        console.log("Tiers");
    } 
    else {
        console.log(i);
    }

}