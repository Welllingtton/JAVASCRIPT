function fatorial(f) {
    let fat = 1
    for (let c = f; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))