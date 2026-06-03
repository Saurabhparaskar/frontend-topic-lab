const App =()=>{

    function btnClicked(){
        console.log('button is clicked');
    }
    function inputChanging(){
        console.log('Typingg ..');
    }

     
    return(
        <div>
            <h1> APP Function calling ...</h1>
            <button  onClick={btnClicked} >Change user</button>  
             
             {/* one time called beacused () */}
             <button   onClick={btnClicked()}>OutsideFunction()</button>     
            
            {/* inline function... */}
            <button onChange ={ ()=>{

                console.log('ButtoninsideFunction');
            }}>ButtoninsideFunction</button>
       

       <input onChange={function (elem){
        console.log(elem.target.value);

       }} type="text " placeholder="Enter name "></input>
       
        </div> 
    )
}

export default App