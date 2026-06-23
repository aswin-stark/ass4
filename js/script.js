// // emailjs.init("YOUR_PUBLIC_KEY");

// // const services = [
// //   {
// //     name: "Dry Cleaning",
// //     price: 200,
// //   },
// //   {
// //     name: "Wash & Fold",
// //     price: 100,
// //   },
// //   {
// //     name: "Ironing",
// //     price: 30,
// //   },
// //   {
// //     name: "Stain Removal",
// //     price: 500,
// //   },
// //   {
// //     name: "Leather & Suede Cleaning",
// //     price: 999,
// //   },
// //   {
// //     name: "Wedding Dress Cleaning",
// //     price: 2800,
// //   },
// // ];

// // let cart = [];

// // const serviceList = document.getElementById("serviceList");

// // function renderServices() {
// //   serviceList.innerHTML = "";

// //   services.forEach((service, index) => {
// //     serviceList.innerHTML += `

// // <div class="service-item">

// // <div>
// // ${service.name}
// // - ₹${service.price}
// // </div>

// // <button onclick="addItem(${index})">
// // Add Item
// // </button>

// // </div>

// // `;
// //   });
// // }

// // function addItem(index) {
// //   cart.push(services[index]);

// //   renderCart();
// // }

// // function renderCart() {
// //   const cartItems = document.getElementById("cartItems");

// //   cartItems.innerHTML = "";

// //   let total = 0;

// //   cart.forEach((item, index) => {
// //     total += item.price;

// //     cartItems.innerHTML += `

// // <tr>
// // <td>${index + 1}</td>
// // <td>${item.name}</td>
// // <td>₹${item.price}</td>
// // </tr>

// // `;
// //   });

// //   document.getElementById("totalAmount").innerText = total;
// // }

// // function bookNow() {
// //   const name = document.getElementById("name").value;

// //   const email = document.getElementById("email").value;

// //   const phone = document.getElementById("phone").value;

// //   if (!name || !email || !phone) {
// //     alert("Please fill all fields");
// //     return;
// //   }

// //   const total = cart.reduce((sum, item) => sum + item.price, 0);

// //   const serviceDetails = cart
// //     .map((item) => `${item.name} - ₹${item.price}`)
// //     .join(", ");

// //   const templateParams = {
// //     customer_name: name,

// //     customer_email: email,

// //     phone_number: phone,

// //     services: serviceDetails,

// //     total_amount: total,
// //   };

// //   emailjs
// //     .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
// //     .then(() => {
// //       document.getElementById("bookingMessage").innerHTML =
// //         "Thank you For Booking the Service We will get back to you soon!";
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });
// // }

// // renderServices();
// emailjs.init("YOUR_PUBLIC_KEY");

// const services = [
//   {
//     name: "Dry Cleaning",
//     price: 200,
//   },
//   {
//     name: "Wash & Fold",
//     price: 100,
//   },
//   {
//     name: "Ironing",
//     price: 30,
//   },
//   {
//     name: "Stain Removal",
//     price: 500,
//   },
//   {
//     name: "Leather & Suede Cleaning",
//     price: 999,
//   },
//   {
//     name: "Wedding Dress Cleaning",
//     price: 2800,
//   },
// ];

// let cart = [];

// const serviceList = document.getElementById("serviceList");

// function renderServices() {
//   serviceList.innerHTML = "";

//   services.forEach((service, index) => {
//     serviceList.innerHTML += `

//         <div class="service-item">

//             <div class="service-info">

//                 <span class="service-name">
//                     ${service.name}
//                 </span>

//                 <span class="service-price">
//                     ₹${service.price}
//                 </span>

//             </div>

//             <button
//                 class="add-btn"
//                 onclick="addItem(${index})"
//             >
//                 Add Item
//             </button>

//         </div>

//         `;
//   });
// }
// function addItem(index) {
//   cart.push(services[index]);

//   renderCart();
// }
// function removeItem(index) {
//   cart.splice(index, 1);

//   renderCart();
// }
// function renderCart() {
//   const cartItems = document.getElementById("cartItems");

//   cartItems.innerHTML = "";

//   let total = 0;

//   cart.forEach((item, index) => {
//     total += item.price;

//     cartItems.innerHTML += `

//         <tr>

//             <td>${index + 1}</td>

//             <td>${item.name}</td>

//             <td>₹${item.price}</td>

//             <td>

//                 <button
//                     class="remove-btn"
//                     onclick="removeItem(${index})"
//                 >
//                     Remove
//                 </button>

//             </td>

//         </tr>

//         `;
//   });

//   document.getElementById("totalAmount").innerText = total;
// }
// function bookNow() {
//   const name = document.getElementById("name").value;

//   const email = document.getElementById("email").value;

//   const phone = document.getElementById("phone").value;

//   if (!name || !email || !phone) {
//     alert("Please fill all fields");
//     return;
//   }

//   if (cart.length === 0) {
//     alert("Please add at least one service");
//     return;
//   }

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   const serviceDetails = cart
//     .map((item) => `${item.name} - ₹${item.price}`)
//     .join(", ");

//   const templateParams = {
//     customer_name: name,

//     customer_email: email,

//     phone_number: phone,

//     services: serviceDetails,

//     total_amount: total,
//   };

//   emailjs
//     .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
//     .then(() => {
//       document.getElementById("bookingMessage").innerText =
//         "Thank you For Booking the Service We will get back to you soon!";

//       cart = [];

//       renderCart();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// renderServices();
// renderCart();
emailjs.init("HOgfxu_zRPX2EIjm2");

const services = [
  {
    emoji: "👚",
    name: "Dry Cleaning",
    price: 200,
  },
  {
    emoji: "🧺",
    name: "Wash & Fold",
    price: 100,
  },
  {
    emoji: "🪄",
    name: "Ironing",
    price: 30,
  },
  {
    emoji: "💥",
    name: "Stain Removal",
    price: 500,
  },
  {
    emoji: "🧥",
    name: "Leather & Suede Cleaning",
    price: 999,
  },
  {
    emoji: "👰",
    name: "Wedding Dress Cleaning",
    price: 2800,
  },
];

let cart = [];

const serviceList = document.getElementById("serviceList");

function renderServices() {
  serviceList.innerHTML = "";

  services.forEach((service, index) => {
    const alreadyAdded = cart.find((item) => item.name === service.name);

    serviceList.innerHTML += `
        <div class="service-item">

            <div class="service-left">

                <span>${service.emoji}</span>

                <span class="service-name">
                    ${service.name}
                </span>

                <span class="service-price">
                    ₹${service.price.toFixed(2)}
                </span>

            </div>

            ${
              alreadyAdded
                ? `<button class="remove-btn"
                onclick="removeService('${service.name}')">
                Remove Item ⊖
                </button>`
                : `<button class="add-btn"
                onclick="addService(${index})">
                Add Item ⊕
                </button>`
            }

        </div>
        `;
  });
}

function addService(index) {
  cart.push(services[index]);

  renderCart();
  renderServices();
}

function removeService(name) {
  cart = cart.filter((item) => item.name !== name);

  renderCart();
  renderServices();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price.toFixed(2)}</td>
        </tr>
        `;
  });

  document.getElementById("totalAmount").innerText = total.toFixed(2);
}

function bookNow() {
  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  if (cart.length === 0) {
    alert("Please add at least one service");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const serviceDetails = cart.map((item) => item.name).join(", ");

  emailjs
    .send("service_laundry", "template_qpj1qsp", {
      customer_name: name,
      customer_email: email,
      phone_number: phone,
      services: serviceDetails,
      total_amount: total,
    })
    .then(() => {
      document.getElementById("bookingMessage").innerText =
        "Thank you For Booking the Service We will get back to you soon!";
    });
}

renderServices();
renderCart();
function bookNow() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  if (cart.length === 0) {
    alert("Please add at least one service");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const serviceDetails = cart
    .map((item) => `${item.name} - ₹${item.price}`)
    .join(", ");

  const templateParams = {
    customer_name: name,
    customer_email: email,
    phone_number: phone,
    services: serviceDetails,
    total_amount: total,
  };

  console.log("Sending Email...", templateParams);

  emailjs
    .send("service_laundry", "template_qpj1qsp", templateParams)
    .then((response) => {
      console.log("SUCCESS!", response);

      document.getElementById("bookingMessage").innerText =
        "Thank you For Booking the Service We will get back to you soon!";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      cart = [];
      renderCart();
      renderServices();
    })
    .catch((error) => {
      console.error("EMAILJS ERROR:", error);

      alert("Email sending failed. Check browser console (F12 → Console).");
    });
}
