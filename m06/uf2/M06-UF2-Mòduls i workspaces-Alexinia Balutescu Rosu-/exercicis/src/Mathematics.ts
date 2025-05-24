// #region Exercici 1
// export default --> 
// export default function min(values: number[]) : number {
//     let min : number = Number.NaN;
//     for (let value of values) {
//         if (min > value) {
//             min = value;
//         }
//     }
//     return min;
// }
//#endregion


// #region Exercici 2
export function min(values: number[]) : number {
    let min : number = Number.NaN;
    for (let value of values) {
        if (min > value) {
            min = value;
        }
    }
    return min;
}
export function max(values: number[]) : number {
    let max : number = Number.NaN;
    for (let value of values) {
        if (max < value) {
            max = value;
        }
    }
    return max;
}
// #endregion


// #region Exercici 3
export function descompose(value: number) {
    let res : number[] = [];
    let primer = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let num : number = value;

    while(num > 1) {
        let i = 0;

        while (num % primer[i] != 0) {
            i++;
        }
        res.push(primer[i]);
        num = num / primer[i];
    }
    return res;
}
// #endregion
