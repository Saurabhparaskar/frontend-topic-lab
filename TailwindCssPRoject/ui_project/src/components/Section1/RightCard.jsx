import RightCardContent from "./RightCardContent"

const Rightcard = (props) => {
    return (
        <div className="h-full w-60  shrink-0 bg-red-500 overflow-hidden relative rounded-4xl">
            <img className="h-full w-full object-cover "
                src={props.img} alt=" "></img>

            <RightCardContent id ={props.id} tag ={props.tag} />




        </div>
    )
}
export default Rightcard