describe('Counter', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('should start at 0', () => {
        const counter = cy.get('h1');
        counter.should('contain', '0')
    })
});