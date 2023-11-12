import React from 'react'
import Edit from './Edit'

const Profile = () => {
    return (
        <div>
          
            <div className='flex justify-center '>


                <div className='w-full h-full'>
                    <div className=' w-full  h-48'>
                        <img src='https://images.unsplash.com/photo-1502060329973-30dd70d9a1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-36 object-cover  h-36 rounded-full mx-auto lg:mx-10 -mt-20 border-4 border-white' />

                    </div>
                    <div className='flex mx-10 justify-center lg:justify-start'>
                                <img src='user.svg' alt='' className='w-6 h-6  my-5' />
                                <h1 className='text-xl lg:text-lg  my-5 ml-2 text-gray-600 font-bold'>Manishkumar Yadav</h1>
                            </div>
                    <div className=" relative -top-72 ">
                    <Edit />
                    </div>
                    
                    <div className='flex justify-center '>
                        <div className='grid  lg:mt-10 gap-4 lg:gap-8 lg:grid-cols-3'>
                            <div className='bg-gray-50  flex w-auto px-2 h-16 rounded-xl border'>
                                <img src='email.svg' alt='' className='w-6 h-6  my-5' />
                                <h1 className='text-md  my-5 ml-1 text-gray-500'>Email : <span className='font-bold'>ymanishkumar@gmail.com</span></h1>
                            </div>
                            <div className='bg-gray-50  flex w-auto px-2 h-16 rounded-xl border'>
                                <img src='calender.svg' alt='' className='w-6 h-6  my-5' />
                                <h1 className='text-md  my-5 ml-1 text-gray-500'>Year : <span className='font-bold'>BTECH - 2nd Year</span></h1>
                            </div>
                            <div className='bg-gray-50  flex w-auto px-2 h-16 rounded-xl border'>
                                <img src='ID.svg' alt='' className='w-6 h-6  my-5' />
                                <h1 className='text-md  my-5 ml-1 text-gray-500'>SAP ID : <span className='font-bold'>727882</span></h1>
                            </div>
                            <div className='bg-gray-50  flex w-auto px-2 h-16 rounded-xl border'>
                                <img src='committee.svg' alt='' className='w-6 h-6  my-5' />
                                <h1 className='text-md  my-5 ml-1 text-gray-500'>Committee : <span className='font-bold'>Something</span></h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    
                    </div>
                   


                </div>
            </div>
        </div>
    )
}

export default Profile
