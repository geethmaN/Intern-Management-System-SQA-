describe('Intern Registration - Password Strength', () => {
    it('Shows an error for weak passwords', () => {
      cy.visit('http://localhost:3000/intern-register');
      
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('testuser1@example.com');
      cy.get('input[name="fullname"]').type('Test User');
      cy.get('input[name="namewithinitials"]').type('T.U.');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="contactnumber"]').type('0712345678');
      cy.get('input[name="nic"]').type('299012345678');
      cy.get('input[name="language"]').type('English');
      cy.get('input[name="District"]').type('Colombo');
      cy.get('input[name="dob"]').type('2000-01-01');
      
      // Weak password: no uppercase letter, no number
      cy.get('input[name="password"]').type('weakpass');
      
      cy.get('form').submit();
      
     
      cy.contains('Password must contain at least one uppercase letter, one number, and one special character').should('be.visible');
    });
  });
  