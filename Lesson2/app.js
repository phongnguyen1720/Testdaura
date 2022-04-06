//Bài 2:
function check_odd_even(n) {
    let check = 1;
    if (n % 2 == 0) check = 0;
    return check;
}
let danhSach = [1, 3, 2, 4, 5, 7, 6, 8, 10];
let doiMot = [];
let doiHai = [];
for (let i = 0; i < danhSach.length; i++) {
    if (check_odd_even(danhSach[i]) == 0) doiHai.push(danhSach[i]);
    else doiMot.push(danhSach[i])
}

console.log(`Danh sách đội một: ${doiMot}`);
console.log(`Danh sách đội hai: ${doiHai}`);

let tongCanNang = [48, 75, 92, 61, 54, 83, 76];
let tong = 0;
for (let i = 0; i < tongCanNang.length;i++){
    tong += tongCanNang[i];
}
console.log(`Tổng cân nặng của đội: ${tong}`);