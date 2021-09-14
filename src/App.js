import { useState } from 'react/cjs/react.development';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // wether dark mode enable or not
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
       setalert(null);
    }, 1500);
  }

  const removeBodyClasses=()=>{
     document.body.classList.remove('bg-light')
     document.body.classList.remove('bg-dark')
     document.body.classList.remove('bg-warning')
     document.body.classList.remove('bg-danger')
     document.body.classList.remove('bg-success')
  };

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("Dark Mode has been Enabled","success");
      //document.body.style.color='white';
      // document.title="TextUtile - Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      //document.body.style.color='Black';
      // document.title="TextUtile - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us"/> */}
      {/* <Navbar /> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
        {/* Users--> Component 1
        Users/home--> Component 1 */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          </Route>
        </Switch>
         
         {/* <About/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
