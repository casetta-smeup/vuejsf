
describe("Showcase root test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get('#app').children().first().should('contain', 'Test');
  });
});
