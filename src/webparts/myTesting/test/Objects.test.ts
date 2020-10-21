import { createStore } from '../utils/Objects'

describe('Test a Objetos', () => {

  test('Agregar un item en store', () => {

    const store = createStore()

    store.addItem({
      name: 'Alvaro',
      id: 1,
      country: 'España'
    })

    expect(store.getStore()[0]).toEqual({
      name: 'Alvaro',
      id: 1,
      country: 'España'
    })

  })

  test('Buscar un item por el id', () => {

    const store = createStore()

    store.addItem({
      name: 'Alvaro',
      id: 1,
      country: 'España'
    })

    expect(store.getById(1)).toEqual({
      name: 'Alvaro',
      id: 1,
      country: 'España'
    })

    expect(store.getById(1)).toMatchObject({
      name: 'Alvaro',
      id: 1
    })
  
    expect(store.getById(1)).toHaveProperty('name', 'Alvaro')

  })

})