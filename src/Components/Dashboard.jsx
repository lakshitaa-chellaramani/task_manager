import React from 'react'
import Aside from './Aside'
import Navbar from './Navbar'
import Content from './Content'
const Dashboard = () => {
    return (
        <div>

            <div class="bg-white dark:bg-gray-900 h-screen">
                <Aside />
                <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                    <Navbar />
                    <Content />
                </div>
            </div>

        </div>
    )
}

export default Dashboard
