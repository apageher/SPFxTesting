import { getDataPromise, getDataPromiseError} from '../utils/Async';

describe('Haciendo test a operaciones asinctronas', () => {

//Para probar una promise se puede hacer pasando el parámetro done y llamarlo dentro del .then
  test('Haciendo test a promesa', (done) => {
    getDataPromise()
      .then((name) => {
        expect(name).toBe('Alvaro')
        done()
      })
  })

  //Otra manera de probar una promise es usar el método 'resolves' o 'rejects' de jest
  test('Haciendo test a promesa con expect', () => {
    return expect(getDataPromise()).resolves.toBe('Alvaro')
  })

  test('Haciendo test a promesa rechazada', (done) => {
    getDataPromiseError()
      .then((name) => {
      })
      .catch((error) => {
        expect(error).toBe('Error')
        done()
      })
  })

  test('Haciendo test a promesa rechazada con expect ', () => {
    return expect(getDataPromiseError()).rejects.toBe('Error')
  })

  test('Haciendo test a promesa resuelta con async await', async () => {
    const name = await getDataPromise()
    expect(name).toBe('Alvaro')
  })

  test('Haciendo test a promesa rechazada con async await', async () => {
    try {
      const name = await getDataPromiseError()
      expect(name).toBe('Alvaro')
    } catch (error) {
      expect(error).toBe('Error')
    }
  })

//   test('Probando promesa con solicitud HTTP', async () => {
//     const user = await getUsers()
//     expect(user).toHaveProperty('username')
//     expect(user).toHaveProperty('id')
//     expect(user).toHaveProperty('email')
//   })

})