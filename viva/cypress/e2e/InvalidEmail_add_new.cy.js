describe('TC004 - Enter Invalid Email Format', () => {
    it('should show an error when email format is invalid', () => {
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); // ✅ Adjust this to your route
  
      // Fill all required fields with valid data EXCEPT email
      cy.get('input[name="fullName"]').type('Test User');
      cy.get('input[name="nameWithInitials"]').type('T.U.');
      cy.get('input[name="nic"]').type('200012345678');
      cy.get('input[name="email"]').type('invalidemail'); // ❌ No @ or domain
      cy.get('input[name="postalAddress"]').type('123 Test Street');
      cy.get('input[name="district"]').type('Colombo');
      cy.get('input[name="dateOfBirth"]').type('2000-01-01');
      cy.get('input[name="mobileNumber"]').type('0712345678');
      cy.get('input[name="higherEducationInstitute"]').type('Test Uni');
      cy.get('input[name="internshipCategory"]').type('Software Engineering');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="applyAs"]').select('internship');
  
      // Upload required CV file
      const fileName = 'dummy.pdf'; // Make sure this exists in cypress/fixtures
      cy.get('input[name="cvFile"]').selectFile(`cypress/fixtures/${fileName}`);
  
      // Submit form
      cy.get('button[type="submit"]').click();
  
      // Expect validation error to be shown
      cy.get('input[name="email"]:invalid').should('exist');
  
      // Optional: If your app shows a custom error message:
      // cy.contains('Please enter a valid email').should('be.visible');
    });
  });
  