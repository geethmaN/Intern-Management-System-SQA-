describe('TC009 - Add Interview with empty Inputs', () => {
    it('should not successfully submit the interview form with empty data', () => {
      // Step 1: Set token in localStorage
      window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjRiNTBhMjY5MmJkYzZmZTNmOWFlNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NjA4Mzc5NSwiZXhwIjoxNzQ2MDg3Mzk1fQ.V8t0ZbPjs5mW4rLRqeIxTOvdJ-8V-BGp4pqW-KauNL8');
  
      // Step 2: Visit the form page
      cy.visit('http://localhost:3000/interview-add');
  
      // Step 3: Fill form and submit (as before)
      cy.get('input[name="title"]').type('Final Interview – Software Interns');
      const today = new Date().toISOString().split('T')[0];
      cy.get('input[name=""]').type(today);
      cy.get('input[name=""]').type('14:00');
      cy.get('input[name="location"]').type('Colombo HQ - Meeting Room A');
      cy.get('textarea[name="description"]').type('Final round with panel.');
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('should complete all fields').should('be.visible');
    });
  });
  