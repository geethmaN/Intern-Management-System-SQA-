describe('TC003 - Enter phone number', () => {
    it('should show error when an invalid phone number is entered', () => {
      cy.visit('http://localhost:3000/add-new-cv-by-intern'); // ✅ Adjust to your actual route
  
      // Fill required fields with valid data EXCEPT NIC
      cy.get('input[name="fullName"]').type('Test User');
      cy.get('input[name="nameWithInitials"]').type('T.U.');
      cy.get('input[name="nic"]').type('29990100910'); 
      cy.get('input[name="email"]').type('testuser@example.com');
      cy.get('input[name="postalAddress"]').type('123 Test Street');
      cy.get('input[name="district"]').type('Colombo');
      cy.get('input[name="dateOfBirth"]').type('2000-01-01');
      cy.get('input[name="mobileNumber"]').type('123');
      cy.get('input[name="higherEducationInstitute"]').type('Test Uni');
      cy.get('input[name="internshipCategory"]').type('Software Engineering');
      cy.get('select[name="gender"]').select('Male');
      cy.get('select[name="applyAs"]').select('internship');
  
      // Upload required CV file
      const fileName = 'dummy.pdf'; // Make sure dummy.pdf is in cypress/fixtures
      cy.get('input[name="cvFile"]').selectFile(`cypress/fixtures/${fileName}`);
  

    
     
      cy.get('button[type="submit"]').click();
  
      // You can assert:
      // 1. A visible validation error message
      // OR
      // 2. Prevented submission due to invalid NIC
      cy.contains('phone number should be valid').should('exist'); // <-- Adjust based on your actual message
    });
  });
  