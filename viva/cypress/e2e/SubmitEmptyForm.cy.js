describe('TC002 - Submit Empty CV Form', () => {
    it('should show validation errors when submitting an empty form', () => {
      // Step 1: Visit the Add New CV page
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); 
  
      // Step 2: Submit the form without filling anything
      cy.get('button[type="submit"]').click();
  
      // Step 3: Check that validation errors appear for required fields
      cy.get('input[name="fullName"]:invalid').should('exist');
      cy.get('input[name="nameWithInitials"]:invalid').should('exist');
      cy.get('input[name="nic"]:invalid').should('exist');
      cy.get('input[name="email"]:invalid').should('exist');
      cy.get('input[name="postalAddress"]:invalid').should('exist');
      cy.get('input[name="district"]:invalid').should('exist');
      cy.get('input[name="dateOfBirth"]:invalid').should('exist');
      cy.get('input[name="mobileNumber"]:invalid').should('exist');
      cy.get('input[name="higherEducationInstitute"]:invalid').should('exist');
      cy.get('select[name="gender"]:invalid').should('exist');
      cy.get('select[name="applyAs"]:invalid').should('exist');
      cy.get('input[name="cvFile"]:invalid').should('exist');
  
      // Optionally check message text if you show custom messages
      // cy.contains("This field is required").should('be.visible');
    });
  });
  