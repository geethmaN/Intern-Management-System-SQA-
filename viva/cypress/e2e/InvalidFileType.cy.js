describe('TC005 - Upload Invalid File Type', () => {
    it('should show an error or prevent submission when an invalid file type is uploaded', () => {
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); // ✅ Adjust to your actual route
  
      // Fill required fields with valid data
      cy.get('input[name="fullName"]').type('Test User');
      cy.get('input[name="nameWithInitials"]').type('T.U.');
      cy.get('input[name="nic"]').type('200012345678');
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="postalAddress"]').type('123 Test Street');
      cy.get('input[name="district"]').type('Colombo');
      cy.get('input[name="dateOfBirth"]').type('2000-01-01');
      cy.get('input[name="mobileNumber"]').type('0712345678');
      cy.get('input[name="higherEducationInstitute"]').type('Test Uni');
      cy.get('input[name="internshipCategory"]').type('Software Engineering');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="applyAs"]').select('internship');
  
      // Upload an invalid file type (e.g., .jpg)
      const fileName = 'invalid.jpg'; // Make sure this exists in cypress/fixtures
      cy.get('input[name="cvFile"]').selectFile(`cypress/fixtures/${fileName}`);
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Assertion: If you use custom validation, check for a message
      cy.contains('Only PDF files are allowed').should('be.visible'); // Adjust to your message
  
      // OR if browser blocks it with native validation:
      cy.get('input[name="cvFile"]:invalid').should('exist');
    });
  });
  