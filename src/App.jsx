import './App.css'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

function App() {

  const socket = io()

  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    socket.emit('value', value)
  } 

useEffect(() => {

  const reciveMessage = (value) => {
console.log(value)
setMessage(value)

  }

  socket.on('value', reciveMessage)


return () => {
  socket.off('value', reciveMessage)

}

}, [])

  return (
    <div className="App">
     <form action="" onSubmit={handleSubmit} className='w-64 bg-slate-700 rounded-xl h-64 flex flex-col items-center'>
      <input type="text" onChange={(e) => setValue(e.target.value)} name="" id="" className='mt-5 border-2 rounded-md  border-gray-600 py-1 w-44 px-2'/>
      <button className='bg-blue-500 my-4 py-2 px-8 text-white font-bold'>Send</button>
      <div className='bg-green-400 py-2 text-md font-bold text-gray-600 rounded-xl px-10'>
    {message}
     </div>
     </form>
     
    </div>
  )
}

export default App
