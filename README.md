# Laundry Service Web Application

## Overview

A responsive Laundry Service web application built using HTML, CSS, JavaScript, and EmailJS.

## Features

- Responsive Navbar
- Hero Section
- Achievements Section
- Laundry Services List
- Add Item / Remove Item Functionality
- Dynamic Cart
- Total Amount Calculation
- Booking Form
- EmailJS Booking Confirmation
- Newsletter Subscription
- Quality Description Section
- Footer with Social Media Links
- Responsive Design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- EmailJS
- Font Awesome

## Project Structure

Laundry-Service-App/

├── index.html

├── css/
│ └── style.css

├── js/
│ └── script.js

├── assets/

└── README.md

## EmailJS Setup

1. Create EmailJS account.
2. Create Email Service.
3. Create Email Template.
4. Replace:
   - PUBLIC_KEY
   - SERVICE_ID
   - TEMPLATE_ID

5. Run the project.

## Validation

- Required Fields Validation
- Email Format Validation
- Phone Number Validation

## Responsive Design

Supports:

- Desktop
- Laptop
- Tablet
- Mobile

# How to Run

## Prerequisites

- Visual Studio Code
- Live Server Extension
- Internet connection (for EmailJS)

## Steps

1. Download or clone the project.

2. Open the project in Visual Studio Code.

3. Install the Live Server extension.

4. Right-click on `index.html`.

5. Select **Open with Live Server**.

6. The project will open in your browser.

7. Configure EmailJS:
   - Create an EmailJS account.
   - Create an Email Service.
   - Create an Email Template.
   - Replace the following values inside `script.js`:

```javascript
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
```

8. Fill in the booking form.

9. Add services to the cart.

10. Click **Book Now**.

11. A confirmation email will be sent.
