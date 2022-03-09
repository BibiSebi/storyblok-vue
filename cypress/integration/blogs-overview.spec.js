describe("Blogs", () => {
  beforeEach("intercept storyblok request", () => {});

  it("visits the blogs overview page", () => {
    cy.visit("/blogs");
    cy.contains("h1", "Overview");
    // cy.get("a").should("have.length", 4);
  });
});
