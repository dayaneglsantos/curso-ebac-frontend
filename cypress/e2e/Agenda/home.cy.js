/// <reference types="cypress" />

describe("Testes da página Home", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve renderizar 3 contatos", () => {
    cy.get(".contato").should("have.length", 3);
  });

  it("Exclui o contato", () => {
    cy.get(".delete").first().click();
    cy.get(".contato").should("have.length", 2);
  });

  it("Adiciona contato na lista", () => {
    cy.get('input[type="text"]').type("Dayane");
    cy.get('input[type="email"]').type("dayane@hotmail.com");
    cy.get('input[type="tel"]').type("6199999999");
    cy.get(".adicionar").click();
    cy.get(".contato").should("have.length", 3);
  });

  it("Edita contato existente", () => {
    cy.get(".edit").first().click();
    cy.get('input[type="text"]').clear();
    cy.get('input[type="text"]').type("Dayane Santos");
    cy.get(".alterar").click();
    cy.contains("Dayane Santos");
  });
});
