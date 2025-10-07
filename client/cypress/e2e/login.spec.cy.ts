describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@teste.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get('.text-red-500').contains('Invalid email or password')
  })
})

describe('Após realizar login dar um like em um hero', () => {
  it('Deve logar com sucesso, clicar no like de um hero a quantidade deve aumentar', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get("[data-cy='like']").eq(0).click();
  })
})

describe('Após realizar login dar um hire em um hero', () => {
  it('Deve logar com sucesso, clicar em hire de um hero e confirmar', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get("[data-cy='money']").eq(1).click()
    cy.get('.text-white').click()
  })
})