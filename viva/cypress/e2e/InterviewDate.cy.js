

  describe('TC018 - Field Placeholder Text Check', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/interview-add', {
        onBeforeLoad(win) {
          win.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjRiNTBhMjY5MmJkYzZmZTNmOWFlNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0NjEwNzI0OCwiZXhwIjoxNzQ2MTEwODQ4fQ.KnKQ7FOJ6_qeRXT_2Y0vz1XSTYYD319lQo1GRUQLSaI'); // replace with real one
        },
      });
    });
  
    it('should show correct placeholder texts for all input fields', () => {
      cy.get('input[name="title"]').should('have.attr', 'placeholder', 'Enter interview label');
      cy.get('input[name="location"]').should('have.attr', 'placeholder', 'Enter location');
      cy.get('textarea[name="description"]').should('have.attr', 'placeholder', 'Enter a brief description');
    });
  });
  

  
  