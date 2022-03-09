describe("Home View", () => {
  it("visits home page", () => {
    cy.visit("/");
    cy.contains("h1", "Home Page");
    cy.contains("nav ol li", "preview");
  });
});
