describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
  })
})

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    cy.visit('/')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@teste.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get('.text-red-500').contains('Invalid email or password')
  })
})

describe('Após realizar login dar um like em um hero', () => {
  it('Deve logar com sucesso, clicar no like de um hero a quantidade deve aumentar', () => {
    cy.visit('/')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get("[data-cy='like']").eq(0).click();
  })
})

describe('Após realizar login dar um hire em um hero', () => {
  it('Deve logar com sucesso, clicar em hire de um hero e confirmar', () => {
    cy.visit('/')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('test@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get("[data-cy='money']").eq(1).click()
    cy.get('.text-white').click()
  })
})

describe('Após realizar login ADM criar um novo hero', () => {
  it('Deve logar com sucesso, e criar um novo hero perfil', () => {
    cy.visit('/')
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('button.bg-blue-700').click()
    cy.get('a > .undefined').click()
    cy.get('[data-cy="nameInput"]').type('New Hero')
    cy.get('[data-cy="priceInput"]').type('10')
    cy.get('[data-cy="fansInput"]').type('100')
    cy.get('[data-cy="savesInput"]').type('50')
    cy.get('[data-cy="powersSelect"]').select('Invisibility')
    cy.get('[novalidate=""] .bg-blue-700').click()
    cy.contains('[data-cy="name"]', 'New Hero')
    cy.get(':nth-child(8) > .w-\\[280px\\] > :nth-child(1) > .mt-2 > :nth-child(2) > [data-cy="trash"]').should('be.visible').click()
    cy.get('.gap-2 > .text-white').click()
  })
})