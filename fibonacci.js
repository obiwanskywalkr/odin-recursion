#!/usr/bin/env node

const fibsIter = (n) => {
    const sequence = [0, 1]

    for (let i = 2; i < n; i++) {
        let temp = sequence[i - 1] + sequence[i - 2]
        sequence.push(temp)
    }

    return sequence
}

console.log(fibsIter(8))

const fibsRec = (n, seq = [0, 1]) => {
    if ( n <= seq.length ) return seq
    return fibsRec(n, [...seq, seq[seq.length - 2] + seq[seq.length - 1]])
}

console.log(fibsRec(8))