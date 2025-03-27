import './header.css';
import logo from "../../assets/icons/logo.svg";
import userProfilePic from "../../assets/images/header-user-profile.png";
import iconSearchDark from "../../assets/icons/search-dark.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(prev => !prev);
    };

    useEffect(() => {
        document.documentElement.style.overflow = isActive ? 'hidden' : '';

        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isActive]);

    return (
        <header className="d-flex justify-content-between align-items-center">
            <nav className="primary-nav d-flex align-items-center">
                <div className="nav-menu site-logo">
                    <NavLink to="/">
                        <img src={logo} id="logo" alt="site logo" />
                    </NavLink>
                </div>

                <ul className={`d-flex align-items-center gap-3 nav-responsive ${isActive ? 'show-menu' : ''}`}>
                    <li className="nav-menu"><NavLink to="/">Find Jobs</NavLink></li>
                    <li className="nav-menu"><NavLink to="/top-companies">Top Companies</NavLink></li>
                    <li className="nav-menu"><NavLink to="/job-tracker">Job Tracker</NavLink></li>
                    <li className="nav-menu"><NavLink to="/my-calendar">My Calendar</NavLink></li>
                    <li className="nav-menu"><NavLink to="/documents">Documents</NavLink></li>
                    <li className="nav-menu"><NavLink to="/messages">Messages</NavLink></li>
                    <li className="nav-menu"><NavLink to="/notifications">Notifications</NavLink></li>

                    <div className="nav-menu btn-lg-responsive">
                        <button className="btn-talent-primary mb-3">Resume Builder</button>
                    </div>
                </ul>
            </nav>

            <nav className="user-nav d-flex align-items-center">
                <div className="d-flex align-items-center gap-3">
                    <div className="nav-menu search-bar d-flex align-items-center gap-2">
                        <img src={iconSearchDark} alt="search icon" className="mb-1" />
                        <input type="search" name="search" placeholder="Search" />
                    </div>

                    <div className="nav-menu btn-responsive">
                        <button className="btn-talent-primary">Resume Builder</button>
                    </div>

                    <div className="nav-menu user-profile-pic">
                        <img src={userProfilePic} alt="user profile pic" />
                    </div>

                    <div className="nav-menu hamburger-menu" onClick={toggleClass}>
                        <label htmlFor="check">
                            <input type="checkbox" id="check" checked={isActive} onChange={toggleClass} />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

