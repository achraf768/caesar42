// Klaq - recruitment exercices

// Task 1
function getInvoiceSubtotal(invoice) {
  // Take an invoice object as a parameter
  // Find the subtotal
  // Return the result
}

// Task 2
function getInvoiceTaxes(invoice) {
  // Take an invoice object as a parameter
  // Find the taxes amount
  // Return the result
}

// Task 3
function getInvoiceTotal(invoice) {
  // Take an invoice object as a parameter
  // Find the total amount
  // Return the result
}

// Task 4
function getInvoicesOverdue(invoices, date) {
  // Take an invoice object list as a parameter
  // Find the overdue invoices
  // Return the result
}

// Task 5
function getInvoicesMatchingCharacter(invoices, string) {
  // Take an invoice object list as a parameter
  // Find the invoices matching the customer property
  // Return the result
}

// Task 6
function getInvoicesOrderedByStatus(invoices) {
  // Take an invoice object list as a parameter
  // Find the invoices ordered by status accepted, pending, rejected
  // Return the result
}

// Task 7
async function getInvoices() {
  try {
    // fetch the invoices from the "https://api.klaq.io/api/v1/intern/invoices" url
    // return the data
  } catch (error) {
    console.error(error);
  }
}

// DO NOT TOUCH THE FOLLOWING LINES
module.exports = {
  getInvoiceSubtotal,
  getInvoiceTaxes,
  getInvoiceTotal,
  getInvoicesOverdue,
  getInvoicesMatchingCharacter,
  getInvoicesOrderedByStatus,
  getInvoices,
};
