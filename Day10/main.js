/*
    điện thoại
    đặc tính
        thương hiệu     iphone
        key           : value
        màu sắc         đen
        kích thước      5inch
        giá tiền        400
        ...
    hành động
        gọi điện
        gửi tin nhắn
        ...

    key : value (name : value)
*/

// const phone = {
//     brand : "iphone", 
//     color:"black",
//     size:"5inch",
//     price:500,
//     phoneCall: function(){
//         console.log("Bạn đang gọi điện");
//     },
//     sendMessage: function(){
//         console.log("Bạn đang nhắn tin");
//     }
// }
// // console.log(phone.sendMessage());
// phone.brand = "apple"
// console.log(phone);

/*
    phone 
    id      name        price      
    1       iphone      500  
    2       xiaomi      300
    3       samsung     400       
*/

// const phoneList = [
//     {
//         id: 1,
//         name: "iphone",
//         price: 500
//     },
//     {
//         id: 2,
//         name: "xiaomi",
//         price: 300
//     },
//     {
//         id: 3,
//         name: "samsung",
//         price: 400
//     }
// ]
// function showProduct() {
//     const productDiv = document.querySelector(".product")

//     for (let item of phoneList) {
//         // productDiv.innerHTML += '<div class="item"><h2>'
//         //                         + item.name +'</h2><p>'
//         //                         + item.price +'</p></div>'

//         productDiv.innerHTML += `
//             <div class="item">
//                 <h2>${item.name}</h2>
//                 <p>${item.price}</p>
//             </div>
//         `
//     }
// }
// showProduct()

// const username = "sontv"
// const message = `Hello ${username}`
// console.log(message);

const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        image: "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg ",
        price: 400,
        status: true,
    },
    {
        id: 2,
        name: "Xiaomi Mi 11 Lite",
        image: "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-black-1-200x200.jpg ",
        price: 300,
        status: true,
    },
    {
        id: 3,
        name: "Samsung Galaxy S21",
        image: "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg ",
        price: 300,
        status: false,
    }
]

function showProduct(){
    const tbody = document.querySelector("tbody")
    for(let item of products){
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td><img src="${item.image}" alt=""></td>
                <td>${item.price}</td>
                <td>${item.status? "Còn hàng":"Hết hàng"}</td>
                <td><button onclick="detailProduct(${item.id})">Chi tiết</button></td>
            </tr>
        `
    }
}
showProduct()

function detailProduct(id){
    // console.log(id);
    for(let item of products){
        if(item.id == id){
            // console.log(item);
            document.querySelector(".detail").innerHTML = `
                <img src="${item.image}" alt="">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
                <p>${item.status?"Còn hàng":"Hết hàng"}</p>
            `
        }
    }
}