describe('Intern Registration - duplicate email', () => {
    it('Shows an error for duplicated email', () => {
      cy.visit('http://localhost:3000/intern-register');
      
      cy.get('input[name="username"]').type('testuser');
      cy.get('input[name="email"]').type('dhananjayasamitha68@gmail.com');
      cy.get('input[name="fullname"]').type('Test User');
      cy.get('input[name="namewithinitials"]').type('T.U.');
      cy.get('input[name="address"]').type('123 Main St');
      cy.get('input[name="contactnumber"]').type('0712345678');
      cy.get('input[name="nic"]').type('299012345678');
      cy.get('input[name="language"]').type('English');
      cy.get('input[name="District"]').type('Colombo');
      cy.get('input[name="dob"]').type('2000-01-01');
      cy.get('input[name="password"]').type('Weakpasss@123');
      
      cy.get('form').submit();
      
      // Assert error message for weak password
      cy.contains('Email already in use').should('be.visible');
    });
  });
  