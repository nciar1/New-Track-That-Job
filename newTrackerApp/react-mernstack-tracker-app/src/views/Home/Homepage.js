import React from 'react';
import './Home.css';
import Calendar from '../../components/Calendar/Calendar';
import Notepad from '../../components/Notepad/Notepad.js';
import ToDo from '../../components/ToDo/ToDo'


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                   Dashboard
                </p>
            </header>
            <body className="App-Body">
                <p>
                    Notepad
                   <Notepad/>
                </p>
                <p>
                    To Do
                   <ToDo/> 
                </p>
                <p>
                    Calendar
                    <Calendar/> 
                </p>
            </body>
        </div>
    );
}

export default Home;
