  // Question 5
  
  // Fonction pour obtenir la liste des factures correspondant à une chaîne donnée dans la propriété client
  function getInvoicesMatchingCharacter(invoices, searchString) {
    if (!invoices || invoices.length === 0 || !searchString) {
      return [];
    }
  
    // Filtrer les factures dont la propriété client contient la chaîne de recherche
    const matchingInvoices = invoices.filter(invoice => invoice.client.includes(searchString));
    return matchingInvoices;
  }
  