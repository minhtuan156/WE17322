/*
    Biến: là đại lượng sinh ra để lưu trữ giá trị (dữ liệu)
    Cú pháp khai báo biến
        var
        let
        const 
    Kiểu dữ liệu
    biểu thức và toán tử
        a = b + c; -> biểu thức toán học
        toán hạng: là các giá trị (biến) tham gia vào biểu thức toán học
        toán tử: là các phép tính
    toán tử:
        toán tử số học: + - * / % ++ --
        toán tử logic: &&   ||  !
        toán tử so sánh: > < >= <= == !=
        toán tử gán: = +=   -=  *=  /=  %=
*/ 

// {
//     let money = 100;
// }
// money = 10000;
// const money = 1000;
// money = 20000;
// console.log(money);

let a = 10.5;

/*
    Câu lệnh rẽ nhánh (if ... else)
        if
        if ... else
        if ... else if

*/ 
const diemThi = 8;
if(diemThi>=0 && diemThi < 5){
    console.log("Ban da tach mon");
}else if(diemThi >= 5 && diemThi <= 10){
    console.log("Ngon lanh roi, qua mon");
}else{
    console.log("Diem bi loi");
}