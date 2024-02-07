  // Question 4
  
  // Fonction pour obtenir la liste des factures en retard
  function getInvoicesOverdue(invoices, currentDate) {
    if (!invoices || invoices.length === 0 || !currentDate) {
      return [];
    }
  
    // Filtrer les factures dont la date d'échéance est antérieure à la date actuelle
    const overdueInvoices = invoices.filter(invoice => new Date(invoice.dueDate) < new Date(currentDate));
    return overdueInvoices;
  }
  