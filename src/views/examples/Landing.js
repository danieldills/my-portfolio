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
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

import horns from "assets/img/danieldills/horns.png"
import recipe from "assets/img/danieldills/recipe.png"
import busmall from "assets/img/danieldills/busmall.png"
import cookies from "assets/img/danieldills/cookies.png"
import hawks from "assets/img/danieldills/hawks.png"


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        My Portfolio{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        Working collaboratively as a team, while being in different places excites me! It means there's no limit what can be accomplished with a little technology.
                        <br></br>
                        <br></br>
                        Check out some of my projects below!
                      </p>
                      {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={horns} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Gallery of Horns
                          </h6>
                          <p className="description mt-3">
                            A React app that displays different horned animals, allowing the user to filter based on the number of horns. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              bootstrap.js
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://reverent-hopper-43987e.netlify.app/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={recipe} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Recipe Roulette
                          </h6>
                          <p className="description mt-3">
                          A website that produces a randomized meal recipe from user selected categories, providing options to help a user narrow down what appeals to their appetite. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://oakfive.github.io/recipe-roulette/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={busmall} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3">
                            A website that displays images randomly, allowing the user to vote on their favorite from each round. After 25 rounds, their favorites are displayed using a graph. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://danieldills.github.io/BusMall/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={cookies} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Cookie Stand
                          </h6>
                          <p className="description mt-3">
                            A website that allows a restaurant owner to input store values for a fictional cookie stand store. Store values are generated to predict sales per hour. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://danieldills.github.io/cookie-stand/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={busmall} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Code 301 Project Placeholder
                          </h6>
                          <p className="description mt-3">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              bootstrap.js
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://reverent-hopper-43987e.netlify.app/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <img src={horns} width={275} />
                          <h6 className="text-primary text-uppercase">
                            Code 401 Project Placeholder
                          </h6>
                          <p className="description mt-3">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              bootstrap.js
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://reverent-hopper-43987e.netlify.app/"
                            // onClick={e => e.preventDefault()}
                          >
                            View Site
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
{/* //This is where I could highlight a project */}
          {/* <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Awesome features</h3>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Carefully crafted components
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={hawks}
                      top
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                      <i className="fa fa-home" />
                    </div>
                    <h3>About Me</h3>
                    <p className="lead">
                      Software Developer based in
                      <br/>
                      the Greater Seattle Area
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <a
                      className="font-weight-bold text-primary mt-5"
                      href="https://www.linkedin.com/in/danieldills/"
                    >
                      Let's stay connected.
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
