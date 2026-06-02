import React from "react"
import { ArrowRight } from 'lucide-react';
const RightCardContent=(props)=>{
    return(
        <div>
             <div className="absolute top-0 left-0 h-full p-6 flex flex-col justify-between ">
                <h2 className="bg-white text-xl rounded-full flex justify-center items-center font-semibold  h-7 w-7">{props.id+1}</h2>

                <div>
                    <p className='text-white text-lg leadding-relax mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Incidunt eum error qui accusantium atque!</p>


                    <div className=' flex justify-between'>
                        <button className='bg-blue-600 text-white font-medium rounded-full px-7 py-2'>{props.tag}</button>
                        <button className='bg-blue-600 text-white font-medium rounded-full px-2 py-2'>   <ArrowRight /></button>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default RightCardContent