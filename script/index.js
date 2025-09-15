console.log(document)
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

const titles = document.querySelectorAll('.card-title');
console.log(titles);

for(let title of titles){
    title.innerHTML = "<span class='text-pink-600'>We are ph student</span>"
}
