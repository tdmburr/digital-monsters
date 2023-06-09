describe('Digimon App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://digimon-api.vercel.app/api/digimon', {
      fixture: 'digiStub.json'
    }).as('fetchDigimon');
    cy.intercept('GET', 'https://digimon-api.vercel.app/api/digimon/name/*', {
          fixture: 'digiStub.json'
        }).as('fetchDigimon2');
    cy.visit('http://localhost:3000');
  });

  it('should display the list of Digimon', () => {
    cy.wait('@fetchDigimon');
    cy.get('.cardContainer')
      .contains('Koromon')
    cy.get('.cardContainer')
      .contains('Agumon')
    cy.get('.cardContainer')
      .contains('Greymon')
    cy.get('.cardContainer')
      .contains('SkullGreymon')
    cy.get('.cardContainer')
      .contains('MetalGreymon')
    cy.get('.cardContainer')
      .contains('WarGreymon')
  });

  it('should navigate to individual Digimon page on click', () => {
    cy.wait('@fetchDigimon');
    cy.get('.cardContainer').contains('Koromon').click();
    cy.url().should('include', '/Koromon');
    cy.get('.singleContainer').should('be.visible');
    cy.get('.cardName').should('contain', 'Koromon');
    cy.get('.cardLevel').should('contain', 'In Training');
  });

  it('should filter Digimon based on dropdown selection', () => {
    cy.get('.select').select('Champion');
    cy.get('.cardContainer').first().should('contain', 'Greymon');

    cy.get('.select').select('Ultimate');
    cy.get('.cardContainer').first().should('contain', 'MetalGreymon');
    cy.get('.cardContainer').last().should('contain', 'SkullGreymon');
  });

  it('should navigate to a card and return to home', () => {

    cy.get('.card').first().click();
    cy.get('.singleContainer').should('be.visible');
    cy.get('.header').click();
    cy.get('.cardContainer').should('be.visible');
  })

  it('should display an error message for non-existent URL', () => {
    
    cy.visit('http://localhost:3000/non-existent-url');

    cy.contains('This path does not exist.').should('be.visible');
  })

  it('should handle API error and display error message', () => {
    cy.intercept('https://digimon-api.vercel.app/api/digimon', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('fetchDigimonError');
    cy.visit('http://localhost:3000/error');
    cy.wait('@fetchDigimonError');
    cy.contains("The digital world is currently unavailable. Please try again later");
  });
});