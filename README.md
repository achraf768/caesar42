# Recruitment exercise

Contact Paul for any question: paul@klaq.io

## Objectives

The objective of this exercise is to test you on developing a fullstack project.

You are evaluated on :

- Having a working project ! 🙂
- Code structure & quality 🤩
- Understanding of the problem 🤓

PS: There's no need to feel pressured; our intention is not to set a trap. The objective is for you to thrive and succeed. The aim is to assess your current level and your programming methodology, so that you can make the best possible adjustments to your future missions.

## Delivery instructions

Send us by email (paul@klaq.io) the link of your project before the due date (indicated in the email). Your project must be on a git repository, cleaned of any working files.

## Description of the problem

### Introduction

At Klaq, we've got a billing tool. Yeah, we've got to juggle creating, finding, editing, and sending invoices for our clients. This exercise is kind of like a dive into the deep end, a taste of what you might get into during your internship here. Various problems can arise: VAT issues, date problems, invoices that are overdue. Today you're going to put yourself in the shoes of a Klaq fullstack developer. You'll be solving problems we've already had to deal with (in simpler ways, of course). Your mission, should you choose to accept it, is to implement different tricks in JavaScript. We'll give you more details just below. We're excited to see how you'll tackle these challenges and how you'll jazz up our billing tool at Klaq! 😎

### Guidelines

You have to use JavaScript, with any libraries or tool you need. Keep it simple!

## Problem

We are dealing with an array of invoice objects, and the task is to extract crucial information from this array. Each invoice object consists of various properties such as id, number, customer, issuedOn, validUntil, status, and products. Within each product, there are properties like price, vta, desc, and name.

```json
[
  {
    "id": 1,
    "number": "F-001-2022",
    "customer": "John Doe",
    "issuedOn": "2022-01-15",
    "validUntil": "2022-02-15",
    "status": "accepted",
    "products": [
      {
        "name": "Product A",
        "desc": "Description for Product A",
        "price": 50,
        "vta": 10
      },
      {
        "name": "Product B",
        "desc": "Description for Product B",
        "price": 30,
        "vta": 20
      }
    ]
  },
  {
    "id": 2,
    "number": "F-002-2022",
    "customer": "Jane Smith",
    "issuedOn": "2022-02-01",
    "validUntil": "2022-03-01",
    "status": "pending",
    "products": [
      {
        "name": "Product C",
        "desc": "Description for Product C",
        "price": 75,
        "vta": 5
      }
    ]
  }
]
```

### Task 1

In the `utils/invoice.js` file, develop a function named `getInvoiceSubtotal`. This function should take an invoice object as a parameter and return the total amount for that specific invoice.

```javascript
// utils/invoice.js
function getInvoiceSubtotal(invoice) {
    // Take an invoice object as a parameter
    // Find the subtotal
    // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
    "id": 2,
    "number": "F-002-2022",
    "customer": "Jane Smith",
    "issuedOn": "2022-02-01",
    "validUntil": "2022-03-01",
    "status": "pending",
    "products": [
        {
            "name": "Product A",
            "desc": "Description for Product A",
            "price": 75,
            "tax": 5
        },
        {
            "name": "Product B",
            "desc": "Description for Product B",
            "price": 30,
            "tax": 5
        }
    ]
};

// Call the function with the example invoice object
const invoiceSubtotal = getInvoiceSubtotal(exampleInvoice);

// Log the result
console.log(`Invoice Subtotal: ${invoiceSubtotal}€`);
// => Invoice Subtotal: 105€
```

### Task 2

In the `utils/invoice.js` file, develop a function named `getInvoiceTax`. This function should take an invoice object as a parameter and return the total tax amount for that invoice. Note that the tax properties in the product objects within the invoice correspond to a percentage. 
💡 For instance, if a product's price is 100€ and the tax is 20%, the calculated tax amount would be 20€.

```javascript
// utils/invoice.js
function getInvoiceTaxes(invoice) {
    // Take an invoice object as a parameter
    // Find the taxes amount
    // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
    "id": 2,
    "number": "F-002-2022",
    "customer": "Jane Smith",
    "issuedOn": "2022-02-01",
    "validUntil": "2022-03-01",
    "status": "pending",
    "products": [
        {
            "name": "Product A",
            "desc": "Description for Product A",
            "price": 75,
            "tax": 20
        },
        {
            "name": "Product B",
            "desc": "Description for Product B",
            "price": 30,
            "tax": 10
        }
    ]
};

// Call the function with the example invoice object
const invoiceTaxes = getInvoiceTaxes(exampleInvoice);

// Log the result
console.log(`Invoice Taxes: ${invoiceTaxes}€`);
// => Invoice Taxes: 18€
```

### Task 3

In the `utils/invoice.js` file, create a function named `getInvoiceTotal` that accepts an invoice object as a parameter and returns the total amount for that invoice.

```javascript
// utils/invoice.js
function getInvoiceTaxes(invoice) {
    // Take an invoice object as a parameter
    // Find the total amount
    // Return the result
}
```

#### Example

```javascript
// Example invoice object
const exampleInvoice = {
    "id": 2,
    "number": "F-002-2022",
    "customer": "Jane Smith",
    "issuedOn": "2022-02-01",
    "validUntil": "2022-03-01",
    "status": "pending",
    "products": [
        {
            "name": "Product A",
            "desc": "Description for Product A",
            "price": 75,
            "tax": 20
        },
        {
            "name": "Product B",
            "desc": "Description for Product B",
            "price": 30,
            "tax": 10
        }
    ]
};

// Call the function with the example invoice object
const invoiceTotal = getInvoiceTotal(exampleInvoice);

// Log the result
console.log(`Invoice Total: ${invoiceTotal}€`);
// => Invoice Total: 123€
```

### Task 4

In the `utils/invoice.js` file, establish a function called `getInvoicesOverdue`. This function should take a list of invoice object as a parameter and provide a list of overdue invoices.
💡 An overdue invoice is one where the validUntil date has already passed.

```javascript
// utils/invoice.js
function getInvoicesOverdue(invoices) {
    // Take an invoice object list as a parameter
    // Find the total amount
    // Return the result
}
```

#### Example

```javascript
// Example usage
const invoicesList = [
{
        "id": 1,
        "number": "INV001",
        "validUntil": "2022-02-01",
        // other properties...
    },
    {
        "id": 2,
        "number": "INV002",
        "validUntil": "2022-01-15",
        // other properties...
    },
    // Add more invoices as needed
];

const overdueInvoices = getInvoicesOverdue(invoicesList);
console.log("Overdue Invoices:", overdueInvoices.length);
// => Overdue Invoices: 2
```



### Bonus





