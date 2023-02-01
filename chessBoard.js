// Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.


// option 1

function chessBoard() {
    const lines = 8;
    let res = '';

    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < lines; j++) {
            if (i % 2 !== 0) {
                res += j % 2 === 0 ? ' ' : '#';
            } else {
                res += j % 2 === 0 ? '#' : ' ';
            }
        }
        res += '\n';
    }
    return res;
}

console.log(chessBoard());


// option 2


function chessBoard2() {
    const lines = 8;

    return Array.from(Array(lines).keys()).reduce((acc, _, index) => {
        let res = '';
        if (index % 2 !== 0) {
            res += ' #'.repeat(lines / 2);
        } else {
            res += '# '.repeat(lines / 2);
        }
        return acc + res + '\n'
    }, '')
}

console.log(chessBoard2());
