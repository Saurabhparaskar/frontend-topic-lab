import Counters from "./component/Counter"
import Employee from "./component/Employee"
import Student from "./StuDetaisUsingProps"
import TestImage from "./assets/TestImage.jpg";
import Header from "./component/header/Header";

function App() {
 

  return (
    <>
     <Counters/>
     <Employee></Employee>
     <Student name={"Saurabh Paraskar"}  age ={22} email ={"Sp@123"} img ={TestImage}
     >
      
     </Student>
     <Header></Header>  

    </>
  )
}

export default App
