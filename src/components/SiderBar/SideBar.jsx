import './sidebar.css';
import profileCardBg from '../../assets/images/profile-card-bg.png';
import profilePic from '../../assets/images/profile-pic.png';
import chevronDownLg from '../../assets/icons/chevron-down-lg.svg';

const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-user-info">
                    <img src={profileCardBg} alt="profile-card-bg" className="profile-card-bg" />
                    <div className="user-info d-flex flex-column justify-content-center align-items-center">
                        <img src={profilePic} alt="profile-pic" className="user-profile" />

                        <div className="user-details">
                            <h5 className="user-name">Albert Flores</h5>
                            <p className="user-role">Senior Product Designer  |  UI/UX <br /> Designer  |  Graphic Designer  |  Web...</p>
                            <p className="user-loc">Clinton, Maryland</p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-user-stats">
                    <ul className="user-stats">
                        <li className="d-flex justify-content-between align-items-center border-bottom">
                            <h5 className="user-stats-name">Profile Visitors</h5>
                            <p className="user-stats-number">140</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center border-bottom">
                            <h5 className="user-stats-name">Profile Visitors</h5>
                            <p className="user-stats-number">20</p>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                            <h5 className="user-stats-name">My Jobs</h5>
                            <p className="user-stats-number">88</p>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-user-calendar">
                    <div className="d-flex flex align-items-center justify-content-between">
                        <div className='calendar'>
                            <p className="calendar-text">My Calendar</p>
                            <p className="interviews-text">Upcoming Interviews</p>
                        </div>

                        <img src={chevronDownLg} alt="chevron-down" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar