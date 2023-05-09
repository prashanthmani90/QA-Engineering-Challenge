import { Api, Pet } from "../../src/api/Api";

/// <reference types="cypress" />

const petApi = new Api();

describe("API Test Suite", () => {
  it("should return a list of pets", async () => {
    return petApi.pet
      .findPetsByStatus({
        status: ["available"],
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.data.length).to.greaterThan(1);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  it("creates a pet", () => {
    const newPet: Pet = {
      id: 1,
      name: "doggie",
      photoUrls: ["NA"],
      status: "available",
    };
    return petApi.pet.addPet(newPet).then((response) => {
      expect(response.status).to.eq(200);
      cy.log("Created successfully");
    });
  });
  it("gets a pet by ID", () => {
    return petApi.pet
      .getPetById(1)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.data.name).to.eq("doggie");
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // More API tests go here...
});
