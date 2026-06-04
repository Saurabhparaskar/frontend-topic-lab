import { useState } from "react";

const App = () => {
    // Creating state variable and setter function
    const [count, setCount] = useState(0);

    // Function declaration
    function btnClicked() {
        console.log('button is clicked');
    }

    // Input event handler function
    function inputChanging(elem) {
        console.log(elem);
    }

    // Function to detect scroll direction
    function pageScrolling(elem) {
        if (elem > 0) {
            console.log("Scrolling page top");
        } else {
            console.log("scrolling page down");
        }
    }

    // Counter function to update state
    function counterApp(elem) {
        setCount(count + 1);
    }

    return (
        <div>
            <h1> APP Function calling ...</h1>

            {/* Passing function reference */}
            <button onClick={btnClicked} >Change user</button>

            {/* Function call - executes immediately during render */}
            <button onClick={btnClicked()}>OutsideFunction()</button>

            {/* Inline event handler */}
            <button onChange={() => {

                console.log('ButtoninsideFunction');
            }}>ButtoninsideFunction</button>

            {/* Input change event */}
            <input onChange={function (elem) {
                console.log(elem.target.value);

            }} type="text " placeholder="Enter name "></input>

            {/* Mouse move event */}
            <div onMouseMove={(elem) => {
                console.log(elem
                );
            }} className='box'>

            </div>

            {/* Mouse wheel / scroll event */}
            <div onWheel={(elem) =>
                pageScrolling(elem.deltaY)
            }>
                <div className="page1"></div>
                <div className="page2"></div>
                <div className="page3"></div>

            </div>

            {/* Counter Example */}
            <div>
                {/* Display current count */}
                <h2>{count}</h2>

                {/* Increment count on click */}
                <button onClick={counterApp}>click</button>

            </div>
        </div>

    )
}

export default App