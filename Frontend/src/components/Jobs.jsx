import React from 'react'
import Navbar from './shared/Navbar'
import { motion } from 'framer-motion'
import Job from './Job'

const jobsarray = [1,2,3,4,5,6,7,8,9]
const Jobs = () => {
  return (
    <div>
    <Navbar />
    <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
            {/* <div className='w-20%'>
                <FilterCard /> */}
            {/* </div> */}
            {
                // filterJobs.length <= 0 ? <span>Job not found</span> : (
                jobsarray.length <= 0 ? <span>Job not found</span> : (
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                jobsarray.map((job) => (
                                    <motion.div
                                        // initial={{ opacity: 0, x: 100 }}
                                        // animate={{ opacity: 1, x: 0 }}
                                        // exit={{ opacity: 0, x: -100 }}
                                        // transition={{ duration: 0.3 }}
                                        // key={job?._id}
                                        >
                                        {/* <Job job={job} /> */}
                                        <Job />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </div>


</div>
  )
}

export default Jobs