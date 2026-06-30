
import './App.css';
import About from './component/About.js';
import Alert from './component/Alert.js';
import Navbar from './component/Navbar.js'
import TextContainer from './component/TextContainer.js'
import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
const[mode, setMode] = useState('light');

const [alert , setAlert]=useState(null)

const showAlert = (message , type)=>{
  setAlert({
    msg:message,
    Type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },1500);
};
const toggleMode = () => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success")
      // document.title = "TextUtils - Dark Mode";
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      // document.title = "TextUtils - Light Mode";
    //   setInterval(() => {
    //     document.title = "TextUtils  is Amazing";
    // }, 2000);
    // setInterval(() => {
    //     document.title = "Install TextUtils";
    // }, 1500);
      
      
    }   
};
  
const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-info')
}
   const changeTheme=(cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+ cls)
    
   }

  return (
     <>
<BrowserRouter>
      
  
  <Navbar title="TEXT-UTILS" HomeText="Home" AboutText="About" changeTheme={changeTheme} toggleMode={toggleMode}   mode={mode}/>  
  <Alert alert={alert}/>
   
   <div className="container my-3" >
    <Routes>
  <Route  path="/home" element={<TextContainer showAlert={showAlert}  heading="Enter the text To Analyse" mode={mode} />}></Route>
  <Route  path="/tex-tutil" element={<TextContainer showAlert={showAlert}  heading="Enter the text To Analyse" mode={mode} />}></Route>
  <Route exact path="/About" element={ <About mode={mode} />}></Route>
 
 </Routes>
</div>


    </BrowserRouter>
     </> 
  );
}

export default App;
