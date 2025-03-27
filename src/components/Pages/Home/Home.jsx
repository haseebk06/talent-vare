import './home.css';
import { JobCard, SideBar } from '../../../components';
import iconSerach from "../../../assets/icons/search.svg";
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home">
      <Row>
        <Col md={4} lg={3}>
          <SideBar />
        </Col>
        <Col md={8} lg={9}>
          <div className="user-wlcome-text">
            <h2 className="dream-job-text">Find your Dream Job, <span className="text-talent-primary">Albert!</span></h2>
            <p className="dream-job-desc">Explore the latest job openings and apply for the best opportunities available today!</p>
          </div>

          <div className="job-search">
            <Row>
              <Col md={6}>
                <p className="job-search-text h-100 d-flex align-items-center">Job Title, Company, or Keywords</p>
              </Col>
              <Col md={6}>
                <Row>
                  <Col md={4} className="border-start">
                    <select name="" id="" className="job-select-box">
                      <option value="">Select Location</option>
                      <option value="">Karachi</option>
                    </select>
                  </Col>
                  <Col md={4} className="border-start">
                    <select name="" id="" className="job-select-box">
                      <option value="">Job Type</option>
                      <option value="">Remote</option>
                    </select>
                  </Col>
                  <Col md={4}>
                    <button className="btn-talent-primary gap-2">
                      <img src={iconSerach} alt="search icon" />
                      Search
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <div className="job-similar d-flex align-items-center flex-wrap gap-3">
            <p className="similar-job-text h-100 d-flex align-items-center">Similar:</p>

            <button className="btn-similar">Frontend</button>
            <button className="btn-similar">Backend</button>
            <button className="btn-similar">Graphic Desinger</button>

          </div>

          <div className="featured-jobs">
            <div className="d-flex align-items-center gap-3">
              <p className="featured-jobs-text">Featured Jobs</p>
              <p className="featured-jobs-text-small">See Recommended Jobs</p>
            </div>
          </div>

          <div className="job-card-container">
            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />
            
            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />
          </div>

          <div className="featured-jobs">
            <div className="d-flex align-items-center gap-3">
              <p className="featured-jobs-text">Recommended Jobs</p>
              <p className="featured-jobs-text-small">See Recommended Jobs</p>
            </div>
          </div>

          <div className="job-card-container">
            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />
            
            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />

            <JobCard 
              title={"UI/UX Designer"}
              location={"Seattle, USA (Remote)"}
              time={"1 day ago"}
              applicants={22}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Home