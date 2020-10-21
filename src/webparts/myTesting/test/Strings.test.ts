import { saluda, getId, despide } from '../utils/Strings'

describe('Pruebas de strings', () => {

  const saludo = saluda('Alvaro')
  const id = getId()
  const saludoDespide = despide()

  test('Probando la funcion saluda', () => {
    expect(saludo).toMatch('Hola soy')
  })

  test('Probando la funcion despide', () => {
    expect(saludoDespide).not.toMatch('Bye.')
  })

  test('Probando la funcion getId', () => {
    expect(id).toMatch(/\d{2}-\d{3}/)
  })
})