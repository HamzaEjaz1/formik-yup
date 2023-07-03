import React from 'react'

const Box = (props) => {
  return (
    <div>
    <div className='border-2 border-gray-600-950  px-5 py-0.5 my-3'>
    <label>{props.label}</label>
    <input type={props.type} className='w-full border-0 ' name={props.name} autoComplete='off' required placeholder={props.placeholder}></input>
        
        
        </div>
    </div>
  )
}

export default Box