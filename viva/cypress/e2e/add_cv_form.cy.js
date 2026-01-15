describe('TC001 - Open Add New CV Page', () => {
    it('should load the Add New CV page and display all required input fields', () => {
      // Step 1: Visit the Add New CV page
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); 
  
      // Step 2: Check if the heading is visible
      cy.contains('Add New CV').should('be.visible');
  
      
      cy.get('input[name="fullName"]').should('be.visible');
      cy.get('input[name="nameWithInitials"]').should('be.visible');
      cy.get('input[name="nic"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="postalAddress"]').should('be.visible');
      cy.get('input[name="district"]').should('be.visible');
      cy.get('input[name="dateOfBirth"]').should('be.visible');
      cy.get('input[name="mobileNumber"]').should('be.visible');
      cy.get('input[name="higherEducationInstitute"]').should('be.visible');
      cy.get('select[name="gender"]').should('be.visible');
      cy.get('select[name="applyAs"]').should('be.visible');
      cy.get('input[name="cvFile"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
  
       
    });
  });
  