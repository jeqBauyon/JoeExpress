import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EditProd({closeModal, id}) {

        const [values, setValues] = useState({

            name: '',
            description: '',
            image_url: null,
            category_id: '',
            foodId: '',
            medprice: '',
            lgprice: ''

        });

        useEffect(() => {
          if (id) {
              setValues(prevValues => ({ ...prevValues, foodId: id }));
              axios.post('http://localhost:8081/fetchProduct', { id })
                  .then(result => {
                      setValues(prevValues => ({
                          ...prevValues,
                          ...result.data
                      }));
                  })
                  .catch(err => console.error(err));
          }
      }, [id]);

      const handleInput = (e) => {
        const { name, type, files, value } = e.target;
    
        if (type === 'file' && files.length > 0) {
            
            setValues((prevValues) => ({
                ...prevValues,
                [name]: files[0] 
            }));
            
        } 
        else {
            
            setValues((prevValues) => ({
                ...prevValues,
                [name]: value
            }));
        }
        
    };    

        const handleSubmit = (e) => {
                e.preventDefault();

                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('description', values.description);
                formData.append('image_url', values.image_url);
                formData.append('category_id', values.category_id);
                formData.append('foodId', values.foodId);
                formData.append('medprice', values.medprice);
                formData.append('lgprice', values.lgprice);
                
                axios.post('http://localhost:8081/updateProduct', formData)
                .then(res => {
                  
                  alert('Product updated successfully');
                  closeModal(false);
                })
                .catch(err=> console.log(err));
           
        };


  return (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'>
        <div className='bg-white w-[900px] h-[900px] rounded-lg shadow-lg flex flex-col p-6'>
          
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-xl font-bold'>Edit Product</h1>
            <button 
            onClick={()=> closeModal(false)}
            className='text-white bg-red-500 px-3 py-1 hover:bg-red-600 rounded-sm'>
              X
            </button>
          </div>
      
          <div className='flex-1'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor="name" className="flex text-gray-600 text-sm font-bold tracking-wider">Product Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  value={values.name}
                  onChange={handleInput}
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="Product Name" 
                  required
                />
              </div>                        
              
              <div className="mb-4">
                <label htmlFor="description" className="flex text-gray-600 text-sm font-bold tracking-wider">Description</label>
                <input 
                  type="text" 
                  name="description" 
                  id="description"
                  value={values.description}     
                  onChange={handleInput}                     
                  placeholder="Creamy non coffee drink" 
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  required
                />
              </div>
      
              <div className='mb-4'>
                <label for="image_url" className="flex text-gray-600 text-sm font-bold tracking-wider">Image URL</label>
                <input 
                  type="file" 
                  name="image_url" 
                  id="image_url"
                  onChange={handleInput}
                  accept="image/png, image/gif, image/jpeg"
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="image.png" 
                  required
                />
              </div>
      
              <div className='mb-4'>
                <p className="text-gray-600 text-sm font-bold tracking-wider mb-2">
                  Please choose a category for this product
                </p>
      
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <input className="mr-2" type="radio" onChange={handleInput} id="Coffee" name="category_id" value= '1' />
                    <label className="text-gray-600 text-sm font-bold tracking-wider" htmlFor="Coffee">Coffee</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2" type="radio" onChange={handleInput} id="Milktea" name="category_id" value='2' />
                    <label className="text-gray-600 text-sm font-bold tracking-wider" htmlFor="Milktea">Milktea</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2" type="radio"  onChange={handleInput} id="Fruit-tea" name="category_id" value='3' />
                    <label className="text-gray-600 text-sm font-bold tracking-wider" htmlFor="Fruit-tea">Fruit</label>
                  </div>
                </div>
      
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center">
                    <input className="mr-2" type="radio" onChange={handleInput} id="Premium_Cheesecake_Milktea" name="category_id" value='4' />
                    <label className="text-gray-600 text-sm font-bold tracking-wider" htmlFor="Premium_Cheesecake_Milktea">
                      Premium Cheesecake Milktea
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2" type="radio" onChange={handleInput} id="Non_Coffee" name="category_id" value='5' />
                    <label className="text-gray-600 text-sm font-bold tracking-wider" htmlFor="Non_Coffee">Non Coffee</label>
                  </div>
                </div>
              </div>
      
              <div className='mb-4'>
                <label htmlFor="medprice" className="flex text-gray-600 text-sm font-bold tracking-wider">Medium Price</label>
                <input 
                  type="text" 
                  name="medprice"
                  value={values.medprice} 
                  onChange={handleInput} 
                  id="medprice"
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="$69" 
                  required
                />
              </div>
      
              <div className='mb-4'>
                <label htmlFor="lgprice" className="flex text-gray-600 text-sm font-bold tracking-wider">Large Price</label>
                <input 
                  type="text" 
                  name="lgprice" 
                  id="lgprice"
                  value={values.lgprice}
                  onChange={handleInput} 
                  className="shadow appearance-none border rounded w-full text-gray-700 focus:outline-none focus:shadow-outline" 
                  placeholder="$69" 
                  required
                />
              </div>        
      
              <button type="submit" className="bg-amber-950 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded-lg w-full">
                Edit product
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default EditProd