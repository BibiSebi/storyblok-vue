describe("Blogs", () => {
  beforeEach("intercept storyblok request", () => {});

  it("visits the blogs overview page", () => {
    cy.visit("/blogs");
    cy.contains("h1", "Overview");
    cy.get("a").first().click();
    cy.contains("h1", "hello");
    // cy.contains('h1', 'You did it!')
  });
});
