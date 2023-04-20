import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import React,{useState} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
    from 'react-router-dom';




function App() {
    const [Mode , setMode]=useState('dark');
    const toggleMode=()=>{
        if(Mode==='light'){
            setMode('dark');
            document.body.style.background='#323232';
            document.title='Textutiles-dark Mode';
        }
        else{
            setMode('light');
            document.body.style.background='white';
            document.title='Textutiles-Light Mode';
        }

    };
    return (
        <>
            <Router>
                <Navbar title='TextUtills' abc='Working' mode={Mode} toggleMode={toggleMode}/>     {/*---------concept of props------------- -*/}
                {/* <Navbar />     ---------concept of default props------------- - */}
                {/*-------------------------------------------------------------------------------------------- */}
                <div className="container">
                    <Switch>
                        <Route exact path="/about">
                            <About />
                        </Route>
           
                        <Route exact path="/">
                            <TextForms heading='Enter The Text Here' mode={Mode}/>
                        </Route>
                    </Switch>
          

                    {/* -------------------------------------------------------------------------------------- */}
                </div>
            </Router>
        </>
    );
}

export default App;
