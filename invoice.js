// Klaq - recruitment exercices

// Task 1
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

// Task 2
// Fonction pour calculer le montant total de la taxe
function getInvoiceTaxes(invoice) {
  // Vérifie si l'objet de facture et la taxe sont définis
  if (!invoice || !invoice.products || invoice.products.length === 0 || !invoice.taxRate) {
    return 0;
  }

  // Calcule le montant total de la taxe en pourcentage du sous-total
  const taxAmount = (getInvoiceSubtotal([invoice]) * (invoice.taxRate / 100));

  return taxAmount;
}

// Task 3
// Fonction pour calculer le montant total de la facture
function getInvoiceTotal(invoice) {
  // Vérifie si l'objet de facture est défini
  if (!invoice) {
    return 0;
  }

  // Calcule le montant total en ajoutant le sous-total et la taxe
  const total = getInvoiceSubtotal([invoice]) + getInvoiceTaxes(invoice);

  return total;
}

// Task 4
// Fonction pour obtenir la liste des factures en retard
function getInvoicesOverdue(invoices, currentDate) {
  if (!invoices || invoices.length === 0 || !currentDate) {
    return [];
  }

  // Filtrer les factures dont la date d'échéance est antérieure à la date actuelle
  const overdueInvoices = invoices.filter(invoice => new Date(invoice.validUntil) < new Date(currentDate));
  return overdueInvoices;
}

// Task 5
// Fonction pour obtenir la liste des factures correspondant à une chaîne donnée dans la propriété client
function getInvoicesMatchingCharacter(invoices, searchString) {
  if (!invoices || invoices.length === 0 || !searchString) {
    return [];
  }

  // Filtrer les factures dont la propriété client contient la chaîne de recherche
  const matchingInvoices = invoices.filter(invoice => invoice.customer.includes(searchString));
  return matchingInvoices;
}

// Task 6
// Fonction pour obtenir la liste des factures dans l'ordre : accepted -> pending -> rejected
function getInvoicesOrderedByStatus(invoices) {
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

// Task 7
// Fonction pour obtenir les données d'appel d'API à https://api.klaq.io/api/v1/intern/invoices
async function getInvoices() {
  try {
    // Appel  à l'API pour récupérer les données des factures
    const response = await fetch('https://api.klaq.io/api/v1/intern/invoices');
    if (!response.ok) {
      // Gérer les erreurs lors de la récupération des données de l'API
      throw new Error(`Erreur lors de la récupération des données. Code d'erreur: ${response.status}`);
    }

    // Ici on convertit la réponse en JSON
    const invoicesData = await response.json();
    return invoicesData;
  } catch (error) {
    // Gérer les erreurs d'une manière détaillée en affichant le message d'erreur
    console.error('Erreur:', error.message);
    return null;
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

