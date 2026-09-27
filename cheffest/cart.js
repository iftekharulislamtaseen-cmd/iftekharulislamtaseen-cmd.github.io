const carditem = document.getElementById("carditem");
const maincart = document.getElementById("maincart");
const subtotal = document.getElementById("subtotal");

let product = [
  { name: "Naan Burger", price: "$1.85" }, // index 0
  { name: "Butter Chicken Taco", price: "$1.15" }, // index 1
  { name: "Chicken Burger", price: "$2.00" }, // index 2
  { name: "Cheese Chicken Naan", price: "$2.50" }, // index 3
  { name: "3 Layer Burger", price: "$4.99" }, // index 4
  { name: "Sandwich", price: "$2.80" },
];

let cart = [];

function addtocart(index) {
  let cart = JSON.parse(localStorage.getItem("carditems")) || [];
  cart.push(product[index]);
  localStorage.setItem("carditems", JSON.stringify(cart));
  rendercard();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("carditems")) || [];

  cart.splice(index, 1);
  localStorage.setItem("carditems", JSON.stringify(cart));
  rendercard();
}

function rendercard() {
  let savedata = JSON.parse(localStorage.getItem("carditems")) || [];

  carditem.innerHTML = "";

  if (savedata.length === 0) {
    carditem.innerHTML = `<span>cart empty</span>`;
    maincart.style.display = "none";
    subtotal.style.display = "none";
    return;
  }

  let total = 0;

  savedata.forEach(function (item, index) {
    carditem.innerHTML += `<div class="grid grid-cols-3 items-center bg-white px-20 py-15 border-b border-gray-200">
    
    <div class="flex items-center gap-15">
        <img class="w-50 h-50 object-cover rounded" src="./assets/img/pr-1.png" alt="">
        <div class="flex flex-col">
            <h3 class="font-semibold text-[15px]">${item.name}</h3>
            <span class="text-gray-500 text-[13px]">${item.price}</span>
            <a href="javascript:void(0)" onclick="removeFromCart(${index})" class="text-red-500 text-[12px] hover:underline">Remove</a>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="border border-gray-400 rounded">
            <input class="w-50 h-30 outline-none text-center" type="number" value="0">
        </div>
    </div>

    <div class="text-right">
        <span class="font-bold text-[16px]">${item.price}</span>
    </div>

</div>`;

    let priceNumber = parseFloat(item.price.replace("$", ""));
    total += priceNumber;

    subtotal.innerHTML = `<div>
              <span class="block bg-red-500 w-250 h-2 my-20"></span>
              <div class="flex items-center justify-between gap-70 px-20">
                <h3 class="text-[18px] font-medium">subtotal</h3>
                <span class="text-[18px] font-medium">$${total}</span>
              </div>
            </div>`;
  });
}

if (carditem) {
  rendercard(); // শুধুমাত্র cart.html পেজ ওপেন হলেই এই ফাংশন নিজে নিজে রান হবে
}
