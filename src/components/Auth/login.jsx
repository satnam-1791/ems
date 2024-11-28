import React, { useState } from 'react'

const Login = ({handleLogin}) => {


const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const Submithandler = (e)=>{
e.preventDefault()
handleLogin(email,password)
}

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <h3 className='text-2xl mb-3'>Login</h3>
<form onSubmit={(e)=>{Submithandler(e)}} className='flex flex-col justify-center items-center'>
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} required className="text-white outline-none bg-transparent text-xl border-2 border-emerald-600 py-3 px-4 rounded-full placeholder:text-gray-400" type='email'    placeholder='Email' />
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} required className="text-white mt-4 outline-none bg-transparent text-xl border-2 border-emerald-600 py-3 px-4 rounded-full placeholder:text-gray-400" type='password' placeholder='Password' />
    <button className="text-white mt-7 outline-none  text-xl border-none bg-emerald-700 py-3 px-4 rounded-full placeholder:text-white" type='submit'>Login</button>
</form>
        </div>
        </div>
  )
}

export default Login