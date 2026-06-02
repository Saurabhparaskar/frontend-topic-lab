import React from "react"
import Arrow from "./Arrow";
import Hero from "./Hero";
import { ArrowUpRight } from 'lucide-react';
const LeftContent=()=>{
    return(
        <div className="h-full flex flex-col justify-between w-1/2  py-3 px-18">
            
           
                 <Hero/>
                <Arrow/>
           
        </div>
    )
}
export default LeftContent