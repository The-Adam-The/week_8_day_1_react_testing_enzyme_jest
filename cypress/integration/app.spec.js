describe('App', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000')

    })

    it('should have pre-populated comments', () => {
        const commentListItems = cy.get('#comment-list > li');
        commentListItems.should('have.length', 2);
    })
    
    it ('should e able to add a comment', () => {
        cy.get('#name-input').type('John Jackson')
        cy.get('#comment-input').type('I like grapes.')
        cy.get('#comment-form').submit();
        const commentListItems = cy.get('#comment-list > li');
        commentListItems.should('have.length', 3);
    })
});

