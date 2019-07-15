let xhr = new XMLHttpRequest();

xhr.open("GET", "/api/user", true);

xhr.onload = function () {
    console.log(xhr.response);
}

xhr.send();

// console.log('home');

// class A{
//     constructor(){
//         console.lo('出错了');
//     }
// }

// let obj = new A();