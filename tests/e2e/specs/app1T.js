
describe("Showcase sample test 1", () => {
  it("Visits the app root url 1", () => {
    cy.visit("/");
    cy.get('#app').children().first().should('contain', 'TestX');
  });
});
