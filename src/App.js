import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
    const [users, setUsers] = useState();

    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('http://localhost:7414/testAPI').then(res => res.text());
        setUsers(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>{users}!!</header>
        </div>
    );
}

export default App;
