import React from 'react'

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown mx-24 mt-4 flex justify-end">
        <div >
          <label tabIndex={0} className="btn border-0 bg-white m-1">This week <img src='darrow.svg' className='w-6 h-6' alt='' /></label>

        </div>

        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
