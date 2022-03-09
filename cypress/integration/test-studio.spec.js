// test-studio.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('Test Studio', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('localhost:5050/blogs');
  cy.get(':nth-child(1) > .flex-col > .p-2').click();
  cy.get('.text-sm').click();
  cy.get('.text-5xl').click();
  cy.get('.mt-16').click();
  cy.get('.text-5xl').click();
  cy.get('.text-5xl').click();
  cy.get('.justify-center').click();
  cy.get('.mt-16').click();
  /* ==== End Cypress Studio ==== */
});
