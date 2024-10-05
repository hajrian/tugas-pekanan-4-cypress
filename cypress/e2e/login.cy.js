describe('SauceDemo Login Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
    });

    it('Should login with valid credentials', () => {
        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input[type="submit"]').click();

        // Verifikasi login berhasil
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain', 'Products');
    });

    it('Should show error with invalid credentials', () => {
        cy.get('input#standard_user').type('invalid_user'); 
        cy.get('input#secret_sauce').type('invalid_password');
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Username and password do not match any user in this service');
    });

    it('Should show error when username is empty', () => {
        cy.get('input#secret_sauce').type('secret_sauce');
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Username is required');
    });

    it('Should show error when password is empty', () => {
        cy.get('input#standard_user').type('standard_user');
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Password is required');
    });

    it('Should show error when both username and password are empty', () => {
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Username is required');
    });

    it('Should show error when username is valid and password is empty', () => {
        cy.get('input#standard_user').type('standard_user');
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Password is required');
    });

    it('Should show error when username is empty and password is valid', () => {
        cy.get('input#password').type('secret_sauce');
        cy.get('input[type="submit"]').click();

        // Verifikasi munculnya pesan kesalahan
        cy.get('.error-message-container').should('be.visible').and('contain', 'Username is required');
    });
});
