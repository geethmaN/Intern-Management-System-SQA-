describe('TC006 - Gender Dropdown Functionality', () => {
    it('should display and allow selection of gender options', () => {
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); // ✅ Adjust if needed
  
      // Step 1: Check if the dropdown is visible
      cy.get('select[name="gender"]').should('be.visible');
  
      // Step 2: Select 'Male' and assert it's selected
      cy.get('select[name="gender"]').select('Male').should('have.value', 'male');
  
      // Step 3: Select 'Female' and assert
      cy.get('select[name="gender"]').select('Female').should('have.value', 'female');
  
      // Step 4: Select 'Other' and assert
      cy.get('select[name="gender"]').select('Other').should('have.value', 'other');
    });
  });
  