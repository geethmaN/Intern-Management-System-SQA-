describe('Intern Registration - Success Modal', () => {
    it('Displays success modal after valid form submission', () => {
      cy.visit('http://localhost:3000/intern-register');
  
      
      cy.get('input[name="username"]').type('successuser');
      cy.get('input[name="email"]').type('successuser1@example.com');
      cy.get('input[name="fullname"]').type('Success User');
      cy.get('input[name="namewithinitials"]').type('S.U.');
      cy.get('input[name="address"]').type('789 High St');
      cy.get('input[name="contactnumber"]').type('0776543210');
      cy.get('input[name="nic"]').type('200045678910');
      cy.get('input[name="language"]').type('Sinhala');
      cy.get('input[name="District"]').type('Kandy');
      cy.get('input[name="dob"]').type('1998-12-12');
      cy.get('input[name="password"]').type('StrongPass3!');
  
     
      cy.get('form').submit();
  
    
      cy.contains('Registration Successful', { timeout: 10000 }).should('be.visible');
    });
  });
  