import './App.css';
import React from 'react';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import { Navbar } from './components/navbar';
// pages
import { Home } from './pages/Home/Home';
import { Cart } from './pages/cart/Cart';
import { NotFound } from './pages/NotFound';
function App() {
    // const [users, setUsers] = useState();

    // // Function to collect data
    // const getApiData = async () => {
    //     const response = await fetch('http://localhost:7414/testAPI').then(res => res.text());
    //     setUsers(response);
    // };

    // useEffect(() => {
    //     getApiData();
    // }, []);

    return (
        <>
            {/* <div className='App'>
                <header className='App-header'>{users}!!</header>
            </div> */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Cart' element={<Cart />} />
                    {/* 404 */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
