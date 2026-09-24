for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Infinite l'iers");
    } 
    else if (i % 3 === 0) {
        console.log("Infinite");
    } 
    else if (i % 5 === 0) {
        console.log("liers");
    } 
    else {
        console.log(i);
    }

}