import React from 'react'

const App = () => {
  return (
    <div className=''>

      <input onChange={function(elem){
         console.log(elem.target.value)
      }}  className='border-2 bg-blend-color m-16' type="text" placeholder='name' />
    <button onMouseLeave={function(elem){
     console.log('hellow')
    }} className='p-4 border-2 m-10 bg-gray-600 rounded-4xl shadow-lg'>Change me</button>
    </div>
  )
}

export default App
