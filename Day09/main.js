/*
    DOM
    Events
*/ 
// console.log(document)
// const title = document.getElementById("title")
// console.log(title)
// const mainTitle = document.getElementsByClassName("main-title")
// console.log(mainTitle);
// const h2Tag = document.getElementsByTagName("h2")
// console.log(h2Tag);

// const title = document.querySelector(".box .main-title")
// console.log(title.innerHTML)
// title.innerHTML = "Tiêu đề mới"
// title.style.color = "red";
// title.style.fontSize = "50px";
// title.style.textAlign = "center";
/*
    fontSize
    text-align
*/ 

// title.id = "abc"

const btnGet = document.querySelector("#btn-get")
const quantity = document.querySelector("#quantity")

// btnGet.onclick = function(e){
//     e.preventDefault()
//     console.log(quantity.value);
// }

// btnGet.addEventListener("click",function(e){
//         e.preventDefault()
//         console.log(quantity.value);
// })

// btnGet.onclick = function(e){
//     e.preventDefault()
//     console.log(1);
// }
// btnGet.onclick = function(e){
//     e.preventDefault()
//     console.log(2);
// }

// btnGet.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log(1);
// })
// btnGet.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log(2);
// })

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login")
const errorMessageDiv = document.querySelector(".show-error")

function showErrorMessage(message){
    errorMessageDiv.innerHTML = message
}
btnLogin.onclick = function(e){
    e.preventDefault()
    if(username.value == ""){
        // errorMessageDiv.innerHTML = "Không được để trống username"
        showErrorMessage("Không được để trống username")
        return false;
    }
    if(username.value.length < 5){
        showErrorMessage("Username phải lớn hơn 5 ký tự")
        return false;
    }
    if(password.value ==""){
        // errorMessageDiv.innerHTML = "Không được để trống password"
        showErrorMessage("Không được để trống password")
        return false;
    }
    showErrorMessage("")
    console.log(username.value)
    console.log(password.value);
}