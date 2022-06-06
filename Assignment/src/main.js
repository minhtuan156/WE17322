const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-1.png",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-3.png",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-1.png",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-2.png",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./image/home/popular-item-3.png",
        category: 6
    }
]
const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"./image/home/breakfast.png"
    },
    {
        id:2,
        name:"vegan",
        image:"./image/home/breakfast.png"
    },
    {
        id:3,
        name:"meat",
        image:"./image/home/breakfast.png"
    },
    {
        id:4,
        name:"dessert",
        image:"./image/home/breakfast.png"
    },
    {
        id:5,
        name:"lunch",
        image:"./image/home/breakfast.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"./image/home/breakfast.png"
    }
]

function showProduct(data){ //khai báo hàm, truyền vào tham số data để cần hiển thị mảng nào thì truyền vào mảng đó
    const popularList = document.querySelector(".popular-list") //tìm thẻ div có class popular-list
    popularList.innerHTML = "" //clear khối sản phẩm đi để hiển thị lại dữ liệu mới
    for(let item of data){ // lặp qua mảng truyền vào tham số data

        // đổ dữ liệu vào trong thẻ div popular
        popularList.innerHTML += `
            <div class="popular__item">
                <a href=""><img src="${item.image}" alt=""></a>
                <h3><a href="">${item.name}</a></h3>
                <p>
                    <img src="./image/home/Timer.png" alt="">
                    <span>30 Minutes</span>
                    <img src="./image/home/ForkKnife.png" alt="">
                    <span>Snack</span>
                </p>
            </div>
        `         
    }
}
showProduct(ListProduct) //gọi hàm ra để hiển thị sản phẩm

const filterSelect = document.querySelector("#filter-select") // tìm thẻ select
function filterProduct(){ //tạo hàm để thực hiện chức năng lọc 
    const over30 = ListProduct.filter(function(item){
        // khai báo biến over30 chứa dữ liệu lọc được từ mảng ListProduct
        return item.price > 30 
        // return về điều kiện để lọc
    })
    const under30 = ListProduct.filter(function(item){
        return item.price <= 30
    })
    if(filterSelect.value == 'over30'){ //kiểm tra xem đang chọn vào option nào trong thẻ select
        showProduct(over30) // gọi hàm ra và truyền vào mảng lấy được bên trên để hiển thị sản phẩm tương ứng
    }
    if(filterSelect.value == 'under30'){

    }
    if(filterSelect.value == 'all'){

    }
}
filterSelect.addEventListener("change",filterProduct)