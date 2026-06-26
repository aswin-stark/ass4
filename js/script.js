emailjs.init("HOgfxu_zRPX2EIjm2");

// Available laundry services
const services = [
  { emoji: "👚", name: "Dry Cleaning", price: 200 },
  { emoji: "🧺", name: "Wash & Fold", price: 100 },
  { emoji: "🪄", name: "Ironing", price: 30 },
  { emoji: "💥", name: "Stain Removal", price: 500 },
  { emoji: "🧥", name: "Leather & Suede Cleaning", price: 999 },
  { emoji: "👰", name: "Wedding Dress Cleaning", price: 2800 },
];
let cart = [];
const serviceList = document.getElementById("serviceList");

// Display all available services

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
            ? `
              <button
                class="remove-btn"
                onclick="removeService('${service.name}')">
                Remove Item ⊖
              </button>
            `
            : `
              <button
                class="add-btn"
                onclick="addService(${index})">
                Add Item ⊕
              </button>
            `
        }

      </div>
    `;
  });
}

// Add selected service to cart

function addService(index) {
  cart.push(services[index]);

  renderCart();
  renderServices();
}

// Remove service from cart

function removeService(name) {
  cart = cart.filter((item) => item.name !== name);

  renderCart();
  renderServices();
}

// Update cart table and total amount

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

// Smooth scroll to booking section

// Smoothly scroll to the Our Services section
function scrollToBooking() {
  document.getElementById("services-section").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
// Validate booking form and send email

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
    .then(() => {
      const bookingMessage = document.getElementById("bookingMessage");

      bookingMessage.style.color = "green";
      bookingMessage.style.opacity = "1";
      bookingMessage.innerText =
        "Thank you For Booking the Service We will get back to you soon!";

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";

      cart = [];
      renderCart();
      renderServices();

      document.getElementById("totalAmount").innerText = "0.00";

      setTimeout(() => {
        bookingMessage.style.opacity = "0";

        setTimeout(() => {
          bookingMessage.innerText = "";
          bookingMessage.style.opacity = "1";
        }, 500);
      }, 3000);
    });
}

// Newsletter subscription validation

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

renderServices();
renderCart();
