
describe('TC009 - Add Interview with Valid Inputs', () => {
  it('should successfully submit the interview form with valid data', () => {
    // Step 1: Set token in localStorage
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjRiNTBhMjY5MmJkYzZmZTNmOWFlNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0Njg1ODg2OCwiZXhwIjoxNzQ2ODYyNDY4fQ.5dKR1jtq0WCIYPp7kLMQrPYuESDec1ytxYDYzO9OirI');

    
    cy.visit('http://localhost:3000/interview-add');

    // Step 3: Fill form and submit (as before)
    cy.get('input[name="title"]').type('Final Interview – Software Interns');
    const today = new Date().toISOString().split('T')[0];
    cy.get('input[name="date"]').type(today);
    cy.get('input[name="time"]').type('14:00');
    cy.get('input[name="location"]').type('Colombo HQ - Meeting Room A');
    cy.get('textarea[name="description"]').type('Final round with panel.');

    cy.get('button[type="submit"]').click();

    cy.contains('Interview added successfully!', { timeout: 10000 }).should('be.visible');

  });
});
