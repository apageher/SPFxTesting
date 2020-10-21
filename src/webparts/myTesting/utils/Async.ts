export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Alvaro')
    }, 300)
  })
}

export const getDataPromiseError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 300)
  })
}

// export const getUsers = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/5')
//   const user = await res.json()

//   return user
// }