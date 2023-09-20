// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

// My Solution:
// import React, {useEffect, useState} from 'react'

// function useLocalStorageState(name) {
//   useEffect(() => {
//     window.localStorage.setItem('name', name)
//     console.log(localStorage)
//   }, [name])
// }

// function Greeting({initialName = ''}) {
//   const [name, setName] = useState(
//     () => window.localStorage.getItem('name') ?? initialName,
//   )

//   function handleChange(event) {
//     setName(event.target.value)
//   }

//   useLocalStorageState(name)

//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Working Solution:
// useEffect: persistent state
// 💯 custom hook
// http://localhost:3000/isolated/final/02.extra-3.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

// function App() {
//   return <Greeting />
// }

// export default App
