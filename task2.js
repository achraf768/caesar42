//Task 2


// Fonction pour calculer le montant total de la taxe
function getFactureTax(invoice) {
    // Vérifie si l'objet de facture et la taxe sont définis
    if (!invoice || !invoice.items || invoice.items.length === 0 || !invoice.taxRate) {
      return 0;
    }
  
    // Calcule le montant total de la taxe en pourcentage du sous-total
    const taxAmount = (invoice.items.reduce((acc, item) => acc + item.price, 0) * (invoice.taxRate / 100));
  
    return taxAmount;
  }




  

