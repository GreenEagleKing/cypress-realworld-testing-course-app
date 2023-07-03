// describe("home page", () => {
//   it("the h1 contains the correct text", () => {
//     cy.visit("http://localhost:3000")
//     cy.get("[data-test='hero-heading']").contains(
//       "Testing Next.js Applications with Cypress"
//     )
//   })

//   it("the features on the homepage are correct", () => {
//     cy.visit("http://localhost:3000")
//     cy.get("dt").eq(0).contains("4 Courses")
//   })

//   it("the lesson bullets point", () => {
//     cy.visit("http://localhost:3000")
//     cy.get("dt").eq(1).contains("25+ Lessons")
//   })
// })

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct text", () => {
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it("the lesson bullets point", () => {
    cy.get("dt").eq(1).contains("25+ Lessons")
  })
})
