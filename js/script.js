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
function scrollToBooking() {
  document.getElementById("booking-section").scrollIntoView({
    behavior: "smooth",
  });
}
function subscribeNewsletter() {
  const name = document.getElementById("newsletterName").value.trim();

  const email = document.getElementById("newsletterEmail").value.trim();

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Enter a valid email address");
    return;
  }

  document.getElementById("newsletterMessage").innerText =
    "Successfully subscribed to our newsletter!";

  document.getElementById("newsletterName").value = "";
  document.getElementById("newsletterEmail").value = "";
}
function bookNow() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Enter valid email");
    return;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone number must contain 10 digits");
    return;
  }

  if (cart.length === 0) {
    alert("Please add at least one service");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const serviceDetails = cart.map((item) => item.name).join(", ");

  const templateParams = {
    customer_name: name,
    customer_email: email,
    phone_number: phone,
    services: serviceDetails,
    total_amount: total,
  };

  emailjs
    .send("service_laundry", "template_qpj1qsp", templateParams)
    .then(function () {
      document.getElementById("bookingMessage").innerText =
        "Thank you For Booking the Service We will get back to you soon!";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      cart = [];
      renderCart();
      renderServices();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Email could not be sent. Check Service ID, Template ID and Allowed Origins.",
      );
    });
}
function subscribeNewsletter() {
  const name = document.getElementById("newsletterName").value.trim();

  const email = document.getElementById("newsletterEmail").value.trim();

  const message = document.getElementById("newsletterMessage");

  if (!name || !email) {
    message.style.color = "red";
    message.innerText = "Please fill all fields";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    message.style.color = "red";
    message.innerText = "Please enter a valid email address";
    return;
  }

  message.style.color = "green";
  message.innerText = "Successfully subscribed to our newsletter!";

  document.getElementById("newsletterName").value = "";
  document.getElementById("newsletterEmail").value = "";
}
