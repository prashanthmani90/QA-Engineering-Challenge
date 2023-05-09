/// <reference types="cypress" />

type Pet = {
  id: number;
  name: string;
  status: string;
  category: any;
  photoUrls: any;
  tags: any;
};

describe("API Test Suite", () => {
  it("creates a pet", () => {
    const newPet: Pet = {
      id: 1,
      category: {
        id: 0,
        name: "Lab",
      },
      name: "doggie",
      photoUrls: ["NA"],
      tags: [
        {
          id: 0,
          name: "Lab",
        },
      ],
      status: "available",
    };
    cy.request("POST", "https://petstore.swagger.io/v2/pet", newPet).then(
      (response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("doggie");
      }
    );
  });
  it("gets a pet by ID", () => {
    cy.request("GET", "https://petstore.swagger.io/v2/pet/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
      }
    );
  });

  // More API tests go here...
});
