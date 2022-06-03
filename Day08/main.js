/*
    Hàm - function
    Hàm không có tham số và không có return (giá trị trả về)
    Hàm không có tham số và có return (giá trị trả về)
    Hàm có tham số và không có return (giá trị trả về)
    Hàm có tham số và có return (giá trị trả về)
*/

// const tinhTong = function(){}

// function tinhTong() {
//     const a = 10, b = 5;
//     let sum = a + b;
//     // console.log(sum);
//     return sum;
// }
// const tienDanhDe = tinhTong() + 100;
// console.log(tienDanhDe);


// function tinhTong(a,b,c) {
//     let sum = a + b + c;
//     // console.log(sum);
//     return sum;
// }
/*
    tham số: giống như biến, được truyền vào hàm khi khởi tạo
    đối số: là giá trị truyền vào hàm khi gọi ra thực thi
*/ 

// function tinhTong() {
//     console.log(arguments)
//     let sum = 0;
//     // for(let item of arguments){
//     //     sum += item
//     //     //sum = sum + item
//     // }
//     for(let i = 0; i < arguments.length ; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// const numberList = [1,2,3,4,5];
// console.log(numberList.length);
// for(let i = 0; i < numberList.length ; i++){
//     console.log(numberList[i])
// }
// console.log("---- for of ----");
// for(let item of numberList){
//     console.log(item)
// }

// console.log("---- foreach ----");
// console.log(numberList);
// numberList.forEach(function(index,value){
//     console.log(index)
// })

// const userList = new Array("sontv","thienth","datlt");
const userList = ["sontv","thienth","datlt"]
// console.log(userList[1])
// for(let item of userList){
//     console.log(item);
// }

// console.log(userList);
// userList.push("tiennh") //thêm phần tử vào cuối mảng
// userList.unshift("huynh") // thêm phần tử vào đầu mảng


// userList.pop() //xóa phần tử cuối mảng
// userList.shift() // xóa phần tử đầu mảng
console.log(userList);

// userList.splice(2,0,"loantt");
/*
    khi muốn thêm sửa xóa dữ liệu trong mảng ở 1 vị trí bất kỳ
    ta sử dụng hàm splice()
    hàm này nhận vào 3 tham số
        tham số 1: vị trí phần tử muốn xóa (index)
        tham số 2: deleteCount 
            thêm mới - giá trị đưa vào là 0 (không xóa đi gì)
            xóa - nếu muốn xóa 1 phần tử đưa vào giá trị là 1, xóa bao nhiêu thì đưa vào giá trị bấy nhiêu
            sửa - xóa đi 1 phần tử ở đúng vị trí ở tham số 1, sau đó cập nhật giá trị mới ở tham số thứ 3
        tham số 3: giá trị muốn thêm (hoặc sửa)
*/ 
// userList.splice(1,2)
userList.splice(0,1,"abc");
console.log(userList);
