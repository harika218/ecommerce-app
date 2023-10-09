import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { loginStatusService } from './LoginStatusService';
function Navbar() {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    };


    useEffect(() => {
        loginStatusService.getStatus().subscribe(status => {
            setLoggedIn(status);
        });


    }, [])

    const logout = () => {
        localStorage.removeItem('user-session');
        loginStatusService.setStatus(false);
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" ><img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" width="160px" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todo">Todo</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" onClick={navigateToCart}>Cart</a>
                        </li> */}
                        <li className='nav-item'>
                            <Link className='nav-link' to="/hooks">Hooks</Link>
                        </li>
                    </ul>


                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {isLoggedIn ? (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{ cursor: 'pointer' }} onClick={logout}>Logout</a>
                                    </li>
                                </React.Fragment>) :
                                (<React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/register">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li></React.Fragment>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;