  // Question 3
  
  // Fonction pour calculer le montant total de la facture
  function getInvoiceTotal(invoice) {
    // Vérifie si l'objet de facture est défini
    if (!invoice) {
      return 0;
    }
  
    // Calcule le montant total en ajoutant le sous-total et la taxe
    const total = getInvoiceSubtotal([invoice]) + getFactureTax(invoice);
  
    return total;
  }
  