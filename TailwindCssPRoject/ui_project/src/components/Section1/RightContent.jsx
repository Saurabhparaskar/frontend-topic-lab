import React from "react"
import RightCard from "./RightCard";

const RightContent=(props)=>{
    return(
        <div id='right' className="h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 justify-between w-3/4  py-3 px-18">
          {
            props.users.map(function(elem, idx){

                return<RightCard key={props.idx} id={idx} img={elem.img} tag={elem.tag}/>
            })
          }
            

        </div>
    )
}
export default RightContent