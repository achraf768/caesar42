// invoice.js

// Question 1

// Fonction pour calculer le sous-total des factures
function getInvoiceSubtotal(invoices) {
  // Vérifie si l'objet de facture est mal défini ou s'il n'y a pas de facture, retourne 0.
  if (!invoices || invoices.length === 0) {
    return 0;
  }

  // Calcul du sous-total en additionnant les prix de chaque article de toutes les factures.
  const sousTotal = invoices.reduce((acc, invoice) => {
    if (invoice.products && invoice.products.length > 0) {
      // Calcul du total pour chaque facture en additionnant les prix des produits.
      const totalInvoice = invoice.products.reduce((total, product) => total + product.price, 0);
      return acc + totalInvoice;
    } else {
      return acc;
    }
  }, 0);

  return sousTotal;
}


  

  






  



















}




