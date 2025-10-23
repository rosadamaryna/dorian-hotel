describe('Booking flow', () => {
  it('allows user to complete booking', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Book now').click();
    cy.get('input[name="name"]').type('Марина');
    cy.contains('Confirm').click();
    cy.contains('Booking confirmed').should('exist');
  });
});
