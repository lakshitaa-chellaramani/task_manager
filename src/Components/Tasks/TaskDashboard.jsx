import React from 'react'
import Todo from './Todo'
import Progress from './Progress'
import Done from './Done'
import Dropdown from './Dropdown'
const TaskDashboard = () => {
  return (
    <div>
      <Dropdown />
      <div class="px-6 ">

        <div
          class="flex mt-4 items-center justify-center">

          <div>
            <div className='grid  lg:grid-cols-3 gap-6'>
              <div>
                <Todo />

              </div>
              <div>
                <Progress />

              </div>
              <div>
                <Done />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskDashboard
