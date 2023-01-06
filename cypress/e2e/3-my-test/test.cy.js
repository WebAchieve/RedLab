/// <reference types="cypress" />

describe('My First Test', () => {
    it('click -test', () => {
      cy.visit('http://localhost:8080/RedLab/')
      cy.get('.navbar-items').last().find('button').last().click()
      cy.get('.navbar-items').last().find('button').first().click()
      
    })
  })