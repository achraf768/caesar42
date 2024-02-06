// invoice.js

  // Task 1
  
  function getInvoiceSubtotal(invoices) {
    // Si l'objet de facture est mal défini ou s'il n'y a pas de facture, retourne 0.
    if (!invoices || invoices.length === 0) {
      return 0;
    }
  
    // Calcul du sous-total ca additionne les prix de chaque article de toutes les factures.
    const sous_total = invoices.reduce((acc, invoice) => {
      if (invoice.products && invoice.products.length > 0) {
        const totalInvoice = invoice.products.reduce((total, product) => total + product.price, 0);
        return acc + totalInvoice;
      } else {
        return acc;
      }
    }, 0);
  
    return sous_total;
  
  
  // Exemple
  const subtotal = getInvoiceSubtotal(invoices);
  console.log("Subtotal:", subtotal);

  






  



















}




