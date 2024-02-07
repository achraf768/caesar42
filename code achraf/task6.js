  // Question 6
  
  // Fonction pour obtenir la liste des factures dans l'ordre : accepted -> pending -> rejected
  function getInvoicesByStatus(invoices) {
    if (!invoices || invoices.length === 0) {
      return [];
    }
  
    // Trier les factures en fonction de l'ordre spécifié dans statusOrder
    const sortedInvoices = invoices.sort((a, b) => {
      const statusOrder = { accepted: 1, pending: 2, rejected: 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  
    return sortedInvoices;
  }
  