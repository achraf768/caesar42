  // Question 7
  
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
  