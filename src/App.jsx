import React from 'react'
import Box from './Box'
import { useFormik } from 'formik'

const initialValues ={
  name:"",
  email:"",
  password:'',
confirmpassword:''
}
const App = () => {

  const Registration = ()=> {
useFormik(
  {
    initialValues:initialValues,
    onSubmit: (values) =>{
      console.log(values)
    }
  }
)
  }
  return (
    <main className="h-2/3 flex items-center justify-center ">

    <form className='bg-white rounded-lg w-2/3  flex'>

    <div className='flex-1 w-1/2 text-gray-700 p-5'>
   <h1 className='text-amber-950 text-4xl my-2'>Welcome !</h1>
   <p className='text-sm my-5'>To form for gold gym  registration form</p>


<Box label="Name" type="text" placeholder="Enter Your Name" name="name"/>
<Box label="Email" type="email" placeholder="Enter Your Email" name="email"/>
<Box label="Password" type="password" placeholder="Password" name="password"/>
<Box label="Confirm Password" type="password" placeholder="Confirm Pssword" name="confirmpassword"/>
<div className='flex justify-between items-center'>
<p>Want to register using gmail?</p>
<button className='bg-amber-950 text-white py-2 rounded px-3' type='submit'>Register Now</button>
</div>

<p className='text-center py-4'><b>Already have an Account ? </b><span>Sign in Now</span></p>




    </div>




    <div className='flex-1 w-1/2 text-gray-700 h-3/4 '>
<img src='https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='img'  width="100%"></img>
    </div>

    </form>
   </main>
  
  )
}

export default App