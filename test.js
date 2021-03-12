// 1 ci sual  ----   2 deyisheni 3cu deyishen istifade etmeden birbirine beraber etmek

// 1ci variant ----------
let a = 5;
let b = 2;
[a, b] = [b, a];
console.log(a, b)

// 2 ci variant ------------
let c = 4
let d = 2;

c = c + d;
d = c - d;
c = c - d;
console.log(c, d)

// ---------------------------------------------------------------------------------
//     2 ci sual  --- 2 massiv 1 if ve 1 for ile diger massivde olmayani taomaq
function DiffArr(array1, array2) {
    let difference = [];
    for (var i = 0; i < array2.length; i++) {
        if (array1[i] !== array2[i]) {
            difference.push(array2[i]);
        }
    }
    console.log(difference)
    return difference;
}

let array1 = [1, 2, 3, 4]
let array2 = [1, 2, 3, 4, 5]
DiffArr(array1, array2);


// 3 cu sual  5X5 matrix spiral kimi yigmaq
let matris = [
    [0, 1, 2, 3, 4],
    [9, 8, 7, 6, 5],
    [10,11,12,13,14],
    [19, 18, 17, 16, 15],
    [20, 21, 22, 23, 24,],
];
const s = matris.length;
const n = Math.pow(s, 2); // (s*s)
let spiral = [];
for (let i = 0; i < n; i++) {
    let z = Math.floor(i / s);
    let t = z % 2 == 0 ? i % s : s - 1 - (i % s);
    spiral[i] = matris[z][t];
}
console.log(spiral);

