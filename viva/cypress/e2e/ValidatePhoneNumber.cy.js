describe('Intern Registration - Phone Number Validation', () => {
    it('Shows an error for invalid Phone Number', () => {
      cy.visit('http://localhost:3000/intern-register');
      
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('testuser1@example.com');
      cy.get('input[name="fullname"]').type('Test User');
      cy.get('input[name="namewithinitials"]').type('T.U.');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="contactnumber"]').type('12345');
      cy.get('input[name="nic"]').type('200526799817');
      cy.get('input[name="language"]').type('English');
      cy.get('input[name="District"]').type('Colombo');
      cy.get('input[name="dob"]').type('2000-01-01');
      cy.get('input[name="password"]').type('StrongPass1!');
      
      cy.get('form').submit();
      
      // Assert error message for invalid NIC
      cy.contains('Invalid contact number').should('be.visible');
    });
  });
  