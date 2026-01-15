describe('TC009 - Add Interview with past date', () => {
    it('should not successfully submit the interview form with past date ', () => {
      // Step 1: Set token in localStorage
      window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjRiNTBhMjY5MmJkYzZmZTNmOWFlNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NjEwNzI0OCwiZXhwIjoxNzQ2MTEwODQ4fQ.KnKQ7FOJ6_qeRXT_2Y0vz1XSTYYD319lQo1GRUQLSaI');
  
      // Step 2: Visit the form page
      cy.visit('http://localhost:3000/interview-add');
  
      // Step 3: Fill form and submit (as before)
      cy.get('input[name="title"]').type('Final Interview – Software Interns');
      const pastDate = '2000-01-01';
      cy.get('input[name="date"]').type(pastDate);
      cy.get('input[name="time"]').type('14:00');
      cy.get('input[name="location"]').type('Colombo HQ - Meeting Room A');
      cy.get('textarea[name="description"]').type('Final round with panel.');
  
      cy.get('button[type="submit"]').click();
  
 
    });
  });
  