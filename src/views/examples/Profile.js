/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/danieldills/Headshot.jpg";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/danieldills/"
                          // onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          LinkedIn
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="https://github.com/danieldills"
                          // onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          GitHub
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Daniel Dills{" "}
                      <span className="font-weight-light"></span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Greater Seattle Area, Washington
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer | Veteran
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Code Fellows, 2021
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Washington, 2012
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        I’m a veteran of the United States Navy where I had the honor of serving as a Hospital Corpsman. I have a BA in healthcare administration from the University of Washington. In my most recent position I worked at Madigan Army Medical Center, in healthcare administration as an Army civilian. I’ve always had an interest in technology, and after seven years I made the decision to switch careers and pursue a career in tech. When the opportunity presented itself.
                        </p>
                        <br></br>
                        <p>
                        I was excited to pursue software development at Code Fellows. I believe my previous experiences have equipped me with the skills to effectively lead a team or be a productive member of one. My ultimate goal is carving a career as a software developer for a company that values its employees, has a clear social mission and has a great work-life balance.
                        </p>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
