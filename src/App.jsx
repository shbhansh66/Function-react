import React from 'react'

const App = () => {

  function scrolling(elem){
    if(elem>0){
      console.log("up_scroling...")
    }
    else{
      console.log("down-scroling...")
    }
  }


  return (
    <div className=''>

      <input onChange={function(elem){
         console.log(elem.target.value)
      }}  className='border-2 bg-blend-color m-16' type="text" placeholder='name' />
    <button onMouseLeave={function(elem){
     console.log('hellow')
    }} className='p-4 border-2 m-10 bg-gray-600 rounded-4xl shadow-lg'>Change me</button>



    <div onWheel={function(elem){
       scrolling(elem.deltaY);
    }}>
      <div className="h-[100vh] w-full bg-green-500"></div>
      <div className="h-[100vh] w-full bg-gray-700"></div>
      <div className="h-[100vh] w-full bg-amber-200"></div>
    </div>
    </div>
  )
}

export default App
