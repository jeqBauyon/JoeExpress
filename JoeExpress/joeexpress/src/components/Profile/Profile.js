import React from 'react'
import bagIcon from '../image/bag.svg';
import gwen from '../image/Gwen.png';
import camera from '../image/camera.svg';
import bg_pic from '../image/36733336252.png';
import edit from '../image/edit.svg';
import lock from '../image/lock.svg';
import jaydsLogo from '../image/jayds cafe Logo.svg';

export default function Profile() {
  return (
    <div className='bg-jaydsBg'>
    {/* <!-- Nav --> */}
    <nav class="sticky top-0 bg-white z-20 shadow-lg flex justify-evenly ">
      <div class="font-extrabold text-2xl items-center">
        {/* <!-- Logo/Title in Navbar --> */}
        <a href="/public/index.html" class="flex items-center text-greenColor ms-5 text-3xl tracking-wide">Jayd's Cafe</a>
      </div>

        <div>
            <img src={bagIcon} alt=""/>
        </div>
    </nav>

    {/* <!-- Main body --> */}
     <div class=" w-full h-full mt-10 flex flex-col justify-center items-center"> 
        <div class="h-64 rounded-t-2xl px-20 w-full relative drop-shadow-sm">
          <div class="object-contain w-full h-full rounded-t-2xl"> {/* <!-- container ng cover photo --> */}
            <img src={bg_pic} alt="" class="w-full h-full object-fill max-w-full max-h-full rounded-t-2xl"/>
          </div>

          <button class="rounded-full bg-greenColor hover:bg-slate-700 top-0 absolute ml-6 mt-6 p-4">
            <img src={camera} alt=""/>
          </button>

          <div class="flex overflow-x-hidden mb-6 ml-16 items-center absolute bottom-0"> {/* <!-- container ng profile pic --> */}
            <div class="object-contain w-36 h-36 rounded-full bottom-0"data-popover-target="popover-user-profile" type="button">
              <img src={gwen} alt="" class="w-full h-full object-fill max-w-full max-h-full rounded-full"/>
            </div>

            <div class="object-contain w-36 h-36 rounded-full bottom-0 invisible" data-popover id="popover-user-profile">
              <img src={camera} alt="" class="w-full h-full object-fill max-w-full max-h-full rounded-full"/>
            </div>

            <h1 class="text-white text-2xl ml-4 tracking-wider">AkoSiLekraAklab</h1>
          </div>
        </div>

        <div class="w-full px-20"> {/* <!-- main container of tabs--> */}
          <div class="mb-4 border-b-2  border-gray-300"> {/* <!-- Tabs below--> */}
            <ul class="flex flex-wrap -mb-px text-md font-semibold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 border-gray-300 rounded-t-lg hover:text-greenColor hover:border-textgreenColor active:text-greenColor" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 border-gray-300 rounded-t-lg hover:text-greenColor hover:border-textgreenColor" id="Order-tab" data-tabs-target="#Order" type="button" role="tab" aria-controls="Order" aria-selected="false">My Orders</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 border-gray-300 rounded-t-lg hover:text-greenColor hover:border-textgreenColor" id="Address-tab" data-tabs-target="#Address" type="button" role="tab" aria-controls="Address" aria-selected="false">My Address</button>
                </li>
                <li role="presentation">
                    <button class="inline-block p-4 border-b-2 border-gray-300 rounded-t-lg hover:text-greenColor hover:border-textgreenColor" id="Account-tab" data-tabs-target="#Account" type="button" role="tab" aria-controls="Account" aria-selected="false">Account</button>
                </li>
            </ul>
          </div>
  
          <div id="default-tab-content"> {/* <!-- Content of every tabs --> */}
            {/* <!-- Profile Tab--> */}
              <div class="hidden py-4 px-20 my-7 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab"> 
                <div class="border-b-2">
                    <div class="flex justify-between items-center" >
                      <h1 class="text-4xl py-5">Profile Picture</h1>
                      <button class="outline outline-1 outline-black p-2 rounded-xl inline-flex justify-center items-center">
                        <img src={edit} alt="" class="me-2"/>
                        Edit Profile
                      </button>
                    </div>
                    <p class="pb-10 pt-5"><strong>Join date:</strong> Aug 27,2025</p>
                </div>
  
                  <div>
                    <h1 class="text-4xl py-5">About</h1>
                    <form>
                      <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                          <label for="editor" class="sr-only">Publish post</label>
                          <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Share something about yourself..." required ></textarea>
                        </div>
                            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                              <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                                  <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
  
                                      <button type="button" data-tooltip-target="tooltip-attachfile" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                            </svg>
                                          <span class="sr-only">Attach file</span>
                                      </button>
                                      
                                      <div id="tooltip-attachfile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Attach File
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                      </div>
  
                                      <button type="button" data-tooltip-target="tooltip-image" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                            <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                                        </svg>
                                        <span class="sr-only">Upload image</span>
                                      </button>
                                    
                                      <div id="tooltip-image" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Upload image
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                      </div>
  
                                      <button type="button" data-tooltip-target="tooltip-video" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                            </svg>
                                          <span class="sr-only">Upload image</span>
                                      </button>
  
                                      <div id="tooltip-video" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Upload video
                                        <div class="tooltip-arrow" data-popper-arrow></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-greenColor rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-green-700">
                          Publish post
                      </button>
                    </form>
                  </div>
              </div>
  
            {/* <!-- Order Tab--> */}
              <div class="hidden p-4 rounded-lg my-7 bg-gray-50 dark:bg-gray-800 min-h-[500px]" id="Order" role="tabpanel" aria-labelledby="Order-tab"> 
                  <div>
                    <div class="mb-10 py-5 px-20">
                      <h1 class="text-4xl mb-5">My Orders</h1>
                      <p>View your order history or check the status of a recent order.</p>
                    </div>

                    <div class="border-y-2 py-10 px-16 w-[80%] flex flex-col justify-center items-center mx-auto">
                      <h1>You haven't placed any orders yet.</h1>
                      <a href="/public/Html/menuPage.html" class="hover:underline">Start Browsing</a>
                    </div>
                  </div>
              </div>
              
            {/* <!-- Address Tab--> */}
              <div class="hidden p-6 rounded-lg my-7 bg-gray-50 dark:bg-gray-800" id="Address" role="tabpanel" aria-labelledby="Address-tab"> 
                <div>
                  <div class="mb-10 py-5 px-20">
                    <h1 class="text-4xl mb-5">My Address(es)</h1>
                    <p>Add and manage the addresses you use often.</p>
                  </div>

                  {/* <!-- <div class="border-t-2 py-10 px-16 w-[80%] flex flex-col justify-center items-center mx-auto">
                    <h1>You haven't saved any addresses yet.</h1>
                    <button class="bg-greenColor rounded-xl px-6 text-md text-white py-3 mt-3 hover:bg-green-700"  data-modal-target="crud-modal" data-modal-toggle="crud-modal" >Add New Address</button>
                  </div> --> */}

                  <div class="border-y-2 py-8  w-[80%] flex flex-col mx-auto"> {/* <!-- Main div for information--> */}
                    <div class="flex flex-col justify-start items-start text-2xl space-y-3"> {/* <!-- information details--> */}
                      <h1 class="font-semibold">Lekra Mabangis</h1>
                      <p class="text-md">STI</p>
                      <p class="text-md">Para streets 69</p>
                      <p class="text-md">Cavite, 4114</p>
                      <p class="text-md">Philippines</p>
                      <p class="text-md">09826738461</p>
                    </div>
                    <div class="flex w-full justify-between items-center mt-5">
                      <div class="space-x-2 text-lg">
                        <button class="hover:underline">
                          Edit
                        </button>
                        <button class="hover:underline">
                          Remove
                        </button>
                      </div>
                      <div class="flex items-center me-4">
                        <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="green-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default Address</label>
                      </div>
                    </div>
                  </div>

                  <div class="w-[80%] flex flex-col justify-center items-start mx-auto">
                    <button class="bg-greenColor rounded-xl px-6 text-md text-white py-3 mt-3 w-fit hover:bg-green-700"  data-modal-target="crud-modal" data-modal-toggle="crud-modal" >Add New Address</button>
                  </div>
                  
                </div>
                  {/* <!-- Main modal --> */}
                  <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-xl max-h-full"> {/* <!-- Modal content --> */}
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"> {/* <!-- Modal header --> */}
                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Add New Address
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <form class="p-4 md:p-5">
                                <div class="grid gap-4 mb-4 grid-cols-2">
                                  
                                    <div class="col-span-2 sm:col-span-1">
                                      <label for="fname" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                      <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Juan" required=""/>
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                      <label for="lname" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                      <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Dela Cruz" required=""/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="company" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                                        <input type="text" name="company" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Sample" required=""/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="address" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                        <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Test" required=""/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="address2" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Address - Line 2</label>
                                        <input type="text" name="address2" id="address2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Sample" required=""/>
                                    </div>
                                    <div class="col-span-2">
                                        <label for="city" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                        <input type="text" name="city" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Imus U" required=""/>
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                      <label for="country" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                      <select id="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                          <option value="">Japan</option>
                                          <option value="">Pelepens</option>
                                          <option value="">HongKong</option>
                                          <option value="">NEw balance</option>
                                          <option value="">Michael Jordan</option>
                                          <option value="">Kila Lekra</option>
                                      </select>
                                  </div>
                                    <div class="col-span-2 sm:col-span-1">
                                        <label for="region" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                                        <select id="region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">CALABARZON</option>
                                            <option value="TV">NCR</option>
                                            <option value="PC">Davao City</option>
                                            <option value="GA">Cordillera Administrative Region</option>
                                            <option value="PH">Eastern Visayas</option>
                                        </select>
                                    </div>
                                    
                                    <div class="col-span-2 sm:col-span-1">
                                      <label for="postal" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">ZIP / postal Code</label>
                                      <input type="number" name="postal" id="postal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="4114" required=""/>
                                    </div>
                                    <div class="col-span-2 sm:col-span-1">
                                      <label for="phone" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                      <input type="tel" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="09123456789" required=""/>
                                    </div>
                                </div> 
                                <div class="flex items-center my-4">
                                  <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                  <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                                </div>
                                <div class="grid gap-4 mb-4 sm:grid-cols-2 grid-cols-1">
                                  <button class="bg-greenColor rounded-xl px-6 text-md w-full text-white py-3 mt-3 hover:bg-green-700"  data-modal-target="crud-modal" data-modal-toggle="crud-modal" >Add New Address</button>
                                  <button class="bg-gray-400 rounded-xl px-6 text-md w-full text-white py-3 mt-3 hover:bg-green-700"  data-modal-target="crud-modal" data-modal-toggle="crud-modal" >Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                  </div> 
              </div>
  
            {/* <!-- Account Tab--> */}
              <div class=" p-4 px-16 rounded-lg my-7 bg-gray-50 dark:bg-gray-800" id="Account" role="tabpanel" aria-labelledby="Account-tab"> 
                  <div class="border-b-2 "> {/* <!-- Account --> */}
                      <div class="flex justify-between items-center" >
                        <h1 class="text-4xl py-5">Account</h1>
                        <div class="gap-3 space-y-2">
                          <button class="me-3.5 outline outline-2 outline-greenColor text-textgreenColor px-8 py-2 text-lg rounded-xl inline-flex justify-center items-center hover:scale-110 duration-300">
                            Discard
                          </button> 
                          <button class="outline outline-2 outline-greenColor bg-greenColor text-white px-8 py-2 text-lg rounded-xl inline-flex justify-center items-center hover:scale-110 duration-300">
                            Update Info
                          </button> 
                        </div>
                      </div>
                      <p class="pb-5">View and edit your personal info below.</p>
                  </div>
    
                  <div class="border-b-2 mt-3 pb-5"> 
        {/* <!-- Display Info --> */}
                    <div class="flex justify-between items-center" >
                      <h1 class="text-2xl py-5">Display info</h1>
                    </div>
                    <p class="pb-10">This information will be visible to all members of this site.</p>

                    <form action="#">
                      <div class="grid gap-4 mb-6 grid-cols-2">
                        <div class="col-span-2 sm:col-span-1">
                          <label for="postal" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white ps-2">Display name <span class="text-red-600">*</span></label>
                          <input type="text" name="postal" id="postal" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="4114" required=""/>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                          <label for="title" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white ps-2">Title</label>
                          <input type="text" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[95%] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                        </div>
                      </div>
                    </form>
                    
                  </div> 

                  <div class="border-b-2 mt-3"> 
        {/* <!-- Personal Info --> */}
                    <div class="flex justify-between items-center">
                      <h1 class="text-2xl py-5">Personal info</h1>
                    </div>
                    <p class="pb-10">Update your personal information.</p>

                    <form action="#">
                      <div class="grid gap-4 mb-6 grid-cols-2">
                        <div class="col-span-2 sm:col-span-1">
                          <label for="fname" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white ps-2">First name <span class="text-red-600">*</span></label>
                          <div class="inline-flex w-full">
                            <input type="text" name="fname" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 me-2" placeholder="Lekra" required=""/>
                            <img src="/public/image/lock.svg" alt=""/>
                          </div>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                          <label for="lname" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white ps-2">Last name <span class="text-red-600">*</span></label>
                          <div class="inline-flex w-full">
                            <input type="text" name="lname" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 me-2" placeholder="Lekra" required=""/>
                            <img src="/public/image/lock.svg" alt=""/>
                          </div>
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                          <label for="phone" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white ps-2">Phone <span class="text-red-600">*</span></label>
                          <div class="inline-flex w-full">
                            <input type="text" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 me-2" placeholder="Lekra" required=""/>
                            <img src="/public/image/lock.svg" alt=""/>
                          </div>
                        </div>
                      </div>

                      <div class="space-x-3 mb-5 grid grid-flow-col justify-end">
                        <button class="outline outline-2 outline-greenColor text-textgreenColor px-8 py-2 text-lg rounded-xl inline-flex justify-center items-center hover:scale-110 duration-300">
                          Discard
                        </button> 
                        <button class="outline outline-2 outline-greenColor bg-greenColor text-white px-8 py-2 text-lg rounded-xl inline-flex justify-center items-center hover:scale-110 duration-300">
                          Update Info
                        </button> 
                      </div>
                    </form>
                  </div> 

                  <div class="flex flex-col justify-start items-start space-y-2 border-b-2 mt-3">
        {/* <!-- information details--> */}
                    <h1 class="text-2xl py-3">Login info</h1>
                    <p class="pb-10">View and update your login email and password.</p>

                    <div>
                      <div class="mb-4">
                        <p class="text-md">Login Email:</p>
                        <p class="text-md">MabangisSiMamAnna@gmail.com</p>
                        <a href="#" class="text-md hover:underline">Change Email</a>
                      </div>
  
                      <div class="pt-10 mb-4">
                        <p class="text-md">Password:</p>
                        <p class="text-md">● ● ● ● ● ●</p>
                        <a href="#" class="text-md hover:underline">Change Password</a>
                      </div>
                    </div>
                  </div>
              </div>
  
          </div>
        </div>
     </div>

    {/* <!-- Contact Us --> */}
    <footer class="bg-[#1A1A1A] w-full h-1/4 mt-5 py-7 flex flex-col justify-center items-center" id="footer">

      <div class="border-y-2 border-gray-400 w-4/5 p-10">
        {/* <!-- container footer--> */}
        <div class="flex justify-between w-full">
          <h1 class="text-white text-5xl font-bold">Jayd's Cafe</h1>

          <div class="flex gap-2">
            <button type='button' class='w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-green-700' id="viewloc">
              <img src="/public/image/fb.svg" alt=""/>
            </button>
            <button type='button' class='w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-green-700' id="viewloc">
              <img src="/public/image/yt.svg" alt=""/>
            </button>
            <button type='button' class='w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-green-700' id="viewloc">
              <img src="/public/image/ig.svg" alt=""/>
            </button>
          </div>
        </div>
        
      <button type="button" class="rounded-full text-white w-fit px-6 py-2 mt-7" id="viewloc">View Location</button>
      </div>


      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2024. Capstone Inc.</span >

        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0" >
          <li class="footer-links">
            <a href="#footer" class="hover:underline me-4 md:me-6" data-modal-target="default-modal" data-modal-toggle="default-modal">Refund Policy</a>
          </li>
          <li class="footer-links">
            <a href="#footer" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li class="footer-links">
            <a href="#footer" class="hover:underline me-4 md:me-6" data-modal-target="default-modal3" data-modal-toggle="default-modal3">Terms and Conditions</a>
          </li>
        </ul>
      </div>

      {/* <!-- Refund Policy modal --> */}
      <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-jaydsBg rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                    <h3 class="text-2xl font-bold text-gray-900 ">
                        Refund Policy
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-white hover:text-greenColor rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500">
                      We do not accept returns or exchanges however, if you are unhappy with your order, kindly give us a call at +639771931022 and
                      let us know how we can better serve you.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500">
                      Refunds We will notify you once we've received and inspected your return, and let you know if the refund was approved or not. If
                      approved, you'll be automatically refunded on your original payment method. Please remember it can takes 7-10 days for your
                      bank or credit card company to process and post the refund too.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* <!-- Modal for Terms and Condition --> */}
      <div id="default-modal3" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">

            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Service
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal3">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
                {/* <!-- Modal footer --> */}
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button id="accept-button" data-modal-hide="default-modal3" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-hide="default-modal3" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                </div>
            </div>
        </div>
    </div>

    </footer>

    {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script> */}
    </div>
  )
}