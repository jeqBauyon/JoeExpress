import axios from 'axios';
import React, { useState } from 'react'

function AddAddons({closeModal}) {

  const [values, setValues] = useState({
    name: '',
    price: ''
  });

  const handleInput = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () =>{
    axios.post('http://localhost:8081/addAddons', values)
        .then(res =>{
            closeModal(false)
        })
  }

  return (
    <div>
       <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'>
        <div className='bg-white w-auto h-auto rounded-lg shadow-lg flex flex-col p-6'>
          
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-xl font-bold'>Add Add-ons</h1>
            <button 
            onClick={()=> closeModal(false)}
            className='text-white bg-red-500 px-3 py-1 hover:bg-red-600 rounded-sm'>
              X
            </button>
          </div>
      
          <div className='flex-1'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor="name" className="flex text-gray-600 text-sm font-bold tracking-wider">Addons Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  onChange={handleInput} 
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="Add-Ons Name" 
                  required
                />
              </div>                        
      
              <div className='mb-4'>
                <label htmlFor="price" className="flex text-gray-600 text-sm font-bold tracking-wider">Price</label>
                <input 
                  type="text" 
                  name="price" 
                  id="price"
                  onChange={handleInput}
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="₱69" 
                  required
                />
                
              </div>        
      
              <button type="submit" className="bg-greenColor hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg w-full">
                Add Addons
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddAddons