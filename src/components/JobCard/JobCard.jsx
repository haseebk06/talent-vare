import './jobCard.css';
import teams from "../../assets/icons/teams.svg";
import marker from "../../assets/icons/marker.svg";
import clock from "../../assets/icons/clock.svg";
import save from "../../assets/icons/save.svg";

const JobCard = ({title, location, time, applicants}) => {
    return (
        <div className="job-card">
            <p className="card-top-text">Promoted</p>
            <div className="job-title d-flex align-items-center gap-3">
                <img src={teams} alt="teams-icon" />
                <p className="job-title-text">{title} <br /> <span className="teams-text">Teams</span></p>
            </div>
            <div className="job-location d-flex align-items-center gap-2">
                <img src={marker} alt="marker" />
                <p className="job-location-text">{location}</p>
            </div>
            <div className="job-time d-flex align-items-center gap-2">
                <img src={clock} alt="clock" />
                <p className="job-location-text">{time}  |  <span className="text-talent-primary">{applicants} applicants</span></p>
            </div>

            <div className="job-foot d-flex justify-content-between align-items-center">
                <button className="btn-talent-primary">Apply Now</button>
                <button className="btn-save">
                    <img src={save} alt="save" />
                </button>
            </div>
        </div>
    )
}

export default JobCard