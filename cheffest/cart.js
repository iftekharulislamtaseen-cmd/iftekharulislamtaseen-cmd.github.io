const carditem = document.getElementById("carditem");
const maincart = document.getElementById("maincart");
const subtotal = document.getElementById("subtotal");
const arrow = document.getElementById("arrow");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const couponcontainer = document.getElementById("couponcontainer");
const inputcontainer = document.getElementById("inputcontainer");
const message = document.getElementById("message");

let product = [
  { name: "Naan Burger", price: "$1.85" },
  { name: "Butter Chicken Taco", price: "$1.15" },
  { name: "Chicken Burger", price: "$2.00" },
  { name: "Cheese Chicken Naan", price: "$2.50" },
  { name: "3 Layer Burger", price: "$4.99" },
  { name: "Sandwich", price: "$2.80" },
];

let cart = [];
let coupon = "TASEEN45";
let total = 0;
let discount = 0;


//========================Add to Card=========================//

function addtocart(index) {
  let cart = JSON.parse(localStorage.getItem("carditems")) || [];
  cart.push(product[index]);
  localStorage.setItem("carditems", JSON.stringify(cart));
  rendercard();
}

//========================Remove Card=========================//

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("carditems")) || [];

  cart.splice(index, 1);
  localStorage.setItem("carditems", JSON.stringify(cart));
  rendercard();
}

//========================Render Card=========================//

function rendercard() {
  total = 0;
  let savedata = JSON.parse(localStorage.getItem("carditems")) || [];

  carditem.innerHTML = "";

  if (savedata.length === 0) {
    carditem.innerHTML = `<div class="flex flex-col items-center mt-30 bg-white px-40 py-90 rounded-md mx-330">
      <h3 class="pb-20 font-semibold text-[21px]">Empty Cart</h3>
      <a href="index.html"><button class="bg-black border-0 outline-0 py-10 px-20 text-white rounded-md">Continue Shopping</button></a>
    </div>`;
    maincart.style.display = "none";
    subtotal.style.display = "none";
    couponcontainer.classList.add("hidden");
    return;
  }

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
  });
  rendersummery();
}

//========================Coupon Expand/collapse=========================//

arrow.addEventListener("click", function () {
  if (inputcontainer.classList.contains("hidden")) {
    arrow.style.transform = "rotate(180deg)";
    arrow.style.transition = "0.4s all";
    inputcontainer.classList.remove("hidden");
    inputcontainer.style.display = "block";
    couponcontainer.style.height = "105px";
  } else {
    arrow.style.transform = "rotate(0deg)";
    inputcontainer.classList.add("hidden");
    inputcontainer.style.display = "none";
    couponcontainer.style.height = "43px";
  }
});

//========================Coupon =========================//

submit.addEventListener("click", function () {
  if (input.value.trim() === "") {
    message.innerHTML = `<span>Please Input Your Coupon Code</span>`;
    return;
  }

  if (input.value.trim() === coupon) {
    discount = total * 0.10;
    rendersummery();
    message.innerHTML = `<span>Coupon Applied Successfully</span>`;
    input.value = "";
  } else {
    message.innerHTML = `<span>Wrong Code</span>`;
    discount = 0;
    rendersummery();
  }
});

//========================Render Summery =========================//

function rendersummery() {
  let totals = total - discount;

  subtotal.innerHTML = `<div class="border-t border-gray-200 pt-15 mt-20">
            <div class="flex justify-between items-center px-20 py-5">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium">$${total.toFixed(2)}</span>
            </div>
          <div class="${discount > 0 ? "" : "hidden"}">
            <div class="flex justify-between items-center px-20 py-5 text-green-600">
                <span>Discount (Coupon)</span>
                <span>-$${discount.toFixed(2)}</span>
            </div>
          </div>

            <span class="block bg-gray-200 h-1 my-10"></span>

            <div class="flex justify-between items-center px-20 py-5 font-bold text-[18px]">
                <span>Total</span>
                <span>$${totals.toFixed(2)}</span>
            </div>
        </div>
    `;
}

if (carditem) {
  rendercard();
}