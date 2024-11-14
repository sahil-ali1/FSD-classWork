// console.log("Hello")
// const div = document.getElementsByClassName("cls");
// const btn = document.getElementsByClassName("btn");
// console.log(div)
// console.log(btn)



// // div[0].innerHTML = '<h2>Hello js</h2>'

// const h1 = document.createElement("h1");
// h1.innerText = "ABES ENGINEERING COLLEGE"
// console.log(h1);
// h1.style.color = "red"
// h1.style.margin = "10px"
// h1.style.padding = "10px"

// div[0].appendChild(h1)

// const img = document.createElement("img")

// img.src = "https://foujiadda.com/wp-content/uploads/2024/07/unnamed-14.png"

// div[0].appendChild(img)
// img.setAttribute('height:10px')

// function getData() {
//   console.log("hi , inside getdata")
//   div[0].innerText="hi , inside getdata"
// }


// btn[0].addEventListener("click" , getData);


// const promise = new Promise((resolve , reject) => {
//   let a = 12 ;
//   if(a > 10) {
//     resolve("accepted")
//   }
//   else {
//     reject("not accepted")
//   }
// })

// promise.then((msg) => {console.log(msg)})
//  .catch((error) => {
//   console.log(error)
//  })
//   .finally(() => console.log("all resources have closed"));

// const promise2 = new Promise((resolve , reject) => {
//    resolve({name: "sahil" , Stack:"MERN"});
//   })

//   promise2.then((data) => console.log(data))
//    .catch(error => console.log(error))

const res = fetch('https://dummyjson.com/products');
 res.then((data) => {
  console.log(data);
  data.json().then((res) => {
    console.log(data)
  })
 })