describe('Intern Registration - Empty Fields', () => {
    it('Shows an error when required fields are empty', () => {
      cy.visit('http://localhost:3000/intern-register');
      
      
      cy.get('input[name="username"]').type('');
      cy.get('input[name="email"]').type('');
      cy.get('input[name="fullname"]').type('');
      cy.get('input[name="namewithinitials"]').type('');
      
      cy.get('form').submit();
      
      
      cy.contains('Username is required').should('be.visible');
      cy.contains('Email is required').should('be.visible');
      cy.contains('Full Name is required').should('be.visible');
      cy.contains('Name with initials is required').should('be.visible');
    });
  });
  
  