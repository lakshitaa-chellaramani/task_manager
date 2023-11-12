import React from 'react'
import '../Tasks/Task.css';
const Done = () => {
  return (
    <div>
      <div className='bg-[#eef2f5] scrollbar-hide overflow-y-auto w-full  lg:w-96 h-[77vh] rounded-xl'>
        <div className='grid grid-cols-2'>
          <div className='flex p-4 justify-start'>
            <h1 className="text-md font-bold text-gray-800">Done</h1>
          </div>
          <div className='flex gap-4 p-4 justify-end'>
            <button>
              <img src="add.svg" className='w-6 h-6' alt="" /></button>
            <button> <img src="tdots.svg" className='w-6 h-6' alt="" /></button>
          </div>
        </div>
        <div className='flex flex-wrap mt-4 justify-center'>
          <div className='bg-white w-full mx-6 h-auto py-4 rounded-2xl'>
            <div className='grid grid-cols-2'>
              <div className='flex px-4 pt-2 justify-start'>
              <img src='pink.png' className='w-4 h-4' alt=''/>
                <h1 className=' text-[10px] text-gray-400 uppercase font-medium'>Development</h1>
              </div>
              <div className='flex px-4 relative -top-1 pt-2 justify-end'>
                <button> <img src="tdots.svg" className='w-6 h-6' alt="" /></button>
              </div>
            </div>
            <h1 className='px-4 pt-1 text-lg font-bold '>Fix bugs in the CSS code</h1>
            <p className='px-4 pt-2 text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae
            </p>
            <div class=" pt-4 px-4 ">
              <div className='grid grid-cols-2'>
                <div className='flex  -space-x-4 justify-start'>
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1699343481899-b20bd561c64e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1698778573868-75a5c62ab43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className='flex justify-end'>
                  <button className='text-xs  bg-[#22C8AA] rounded-lg px-4 text-gray-50'>29-10-2023</button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white mt-4 w-full mx-6 h-auto py-4 rounded-2xl'>
            <div className='grid grid-cols-2'>
              <div className='flex px-4 pt-2 justify-start'>
              <img src='blue.png' className='w-4 h-4' alt=''/>

                <h1 className=' text-[10px] text-gray-400 uppercase font-medium'>Typography</h1>
              </div>
              <div className='flex px-4 relative -top-1 pt-2 justify-end'>
                <button> <img src="tdots.svg" className='w-6 h-6' alt="" /></button>
              </div>
            </div>
            <h1 className='px-4 pt-1 text-lg font-bold '>Proofread final text</h1>
            <p className='px-4 pt-2 text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae
            </p>
            <div class=" pt-4 px-4 ">
              <div className='grid grid-cols-2'>
                <div className='flex  -space-x-4 justify-start'>
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1699343481899-b20bd561c64e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1698778573868-75a5c62ab43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className='flex justify-end'>
                  <button className='text-xs bg-[#22C8AA] rounded-lg px-4 text-gray-50'>01-11-2023</button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white mt-4 w-full mx-6 h-auto py-4 rounded-2xl'>
            <div className='grid grid-cols-2'>
              <div className='flex px-4 pt-2 justify-start'>
              <img src='green.png' className='w-4 h-4' alt=''/>
                <h1 className=' text-[10px] text-gray-400 uppercase font-medium'>Design system</h1>
              </div>
              <div className='flex px-4 relative -top-1 pt-2 justify-end'>
                <button> <img src="tdots.svg" className='w-6 h-6' alt="" /></button>
              </div>
            </div>
            <h1 className='px-4 pt-1 text-lg font-bold '>Responsive design</h1>
            <p className='px-4 pt-2 text-xs text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae
            </p>
            <div class=" pt-4 px-4 ">
              <div className='grid grid-cols-2'>
                <div className='flex  -space-x-4 justify-start'>
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1699343481899-b20bd561c64e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="https://images.unsplash.com/photo-1698778573868-75a5c62ab43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className='flex justify-end'>
                  <button className='text-xs bg-[#22C8AA] font-semibold rounded-lg px-4 text-gray-50'>02-11-2023</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Done
