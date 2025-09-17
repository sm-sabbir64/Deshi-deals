console.log(document);

function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

//Event delegation 
getElementById('product-box').addEventListener('click',function(e){
  if(e.target.className.includes('cart-btn')){
    // alert('card-clicked')
    const cartButton = e.target;
     const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;
    const productTitle =
      cartButton.parentNode.parentNode.children[1].children[1].innerText;
    const productPrice =
      cartButton.parentNode.parentNode.children[1].children[2].innerText;
    // console.log(productPrice);

    const totalPrice = getElementById("total-price").innerText;
    // console.log(totalPrice);
    const currentTotal = parseInt(productPrice) + Number(totalPrice);
    getElementById("total-price").innerText = currentTotal;

    const cartContainer = getElementById("cart-container");

    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between p-4">
                     <img src="${productImg}" alt="" class="w-10">
                         <div class="">
                            <h1 class="font-semibold">${productTitle}</h1>
                              <h1 class="font-semibold"> ${productPrice}</h1>
                          </div>
                    </div>
    `;
    cartContainer.append(newCart);

    const quantity = getElementById('total-quantity').innerText;

    const currentQuantity = Number(quantity) + 1;
    getElementById('total-quantity').innerText = currentQuantity;
  }
})


//traverse technique
// const cartbtns = document.getElementsByClassName("cart-btn");
// console.log(cartbtns);

// for (let cartButton of cartbtns) {
//   cartButton.addEventListener("click",function(){
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;
//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[1].innerText;
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].innerText;
//     // console.log(productPrice);

//     const totalPrice = getElementById("total-price").innerText;
//     // console.log(totalPrice);
//     const currentTotal = parseInt(productPrice) + Number(totalPrice);
//     getElementById("total-price").innerText = currentTotal;

//     const cartContainer = getElementById("cart-container");

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                      <img src="${productImg}" alt="" class="w-10">
//                          <div class="">
//                             <h1 class="font-semibold">${productTitle}</h1>
//                               <h1 class="font-semibold"> ${productPrice}</h1>
//                           </div>
//                     </div>
//     `;
//     cartContainer.append(newCart);

//     const quantity = getElementById('total-quantity').innerText;

//     const currentQuantity = Number(quantity) + 1;
//     getElementById('total-quantity').innerText = currentQuantity;

//   });
// }

document.getElementById('btn-clear').addEventListener('click', function(){
  const cartContainer = getElementById('cart-container');
  cartContainer.innerHTML = "";
  getElementById('total-price').innerText = 0;
  getElementById("total-quantity").innerText = 0;
  
})


//event add korar system

//যেখানে ক্লিক হবে সেটাকে ধরে নিয়ে আসতে হবে।
//ইভেন্ট অ্যাড করতে হবে।
//ফাংশন লেখতে হবে।

// document.getElementById("cart-btn-spoon").addEventListener('click', function(){
//     alert('Spoon clicked')
// })

// id -> element
// className -> array of element
// tagName -> array of element
// querySelector -> element
// querySelectorAll -> array of element

// const titles = document.querySelectorAll('.card-title');
// console.log(titles);

// for(let title of titles){
//     title.innerHTML = "<span class='text-pink-600'>We are ph student</span>"
// }

//traditional way
// document.getElementById("cart-btn-1").addEventListener("click", function () {
//   const title = getElementById("card-title-1").innerText;
//   const price = getElementById("card-price-1").innerText;
//   // console.log(title,price);

//   //total price k dhoro
//   const totalPrice = getElementById("total-price").innerText;

//   //calculate
//   let currentTotal = Number(price) + Number(totalPrice);

//   //price update korte hbe
//   getElementById("total-price").innerText = currentTotal.toFixed(2);

//   //cart-container k dhoro
//   const cartContainer = getElementById("cart-container");

//   //Ekta div banaow
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
// <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//    <img src="./assets/kitchen-1.png" alt="" class="w-10">
//        <div class="">
//           <h1 class="font-bold">${title}</h1>
//             <h1 class="font-bold"> ${price} TK</h1>
//         </div>
//   </div>
// `;

// //cart-container e যোগ করতে হবে
// cartContainer.append(newCart)

// });
