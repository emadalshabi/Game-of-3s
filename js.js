
function gameofthree(n){
    while(n >= 1) {
        if(n % 3 === 1) {
            n -= 1;
            n /= 3;
        } else if(n % 3 === 2) {
            n += 1;
            n /= 3;
        } else {
            n /= 3;
        }
    }
    return n;
}

console.log(gameofthree(50));
