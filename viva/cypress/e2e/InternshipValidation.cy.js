describe('TC008 - Select Internship Type (Apply As Dropdown)', () => {
    it('should display and allow selection of internship types', () => {
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); // ✅ Adjust this as needed
  
      // Step 1: Check if dropdown is visible
      cy.get('select[name="applyAs"]').should('be.visible');
  
      // Step 2: Select 'Internship'
      cy.get('select[name="applyAs"]').select('Internship').should('have.value', 'internship');
  
    
      
    });
  });
  