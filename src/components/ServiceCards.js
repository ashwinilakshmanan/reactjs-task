import React from "react";
import Card from "react-bootstrap/Card";
import "./styles/Services.css";
import Contact from "./Contact";
function ServiceCards() {
  return (
    <>
      <div className="services-mainHead">
        <div className="services-subhead">
          <strong>Services we deliver</strong>
        </div>
        <div className="services-head">
          <center>
            <h2>
              {" "}
              Prepraing for your success,
              <br />
              We provide truely prominente IT solutions.
            </h2>
          </center>
        </div>
      </div>
      <div className="main">
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#e7f0f7"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/webdesigning.png"/>
                </div>
              <Card.Title><b>Web Designing</b></Card.Title>
              <Card.Text>
              We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#f6f5f3"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/webapplication.png"/>
                </div>
              <Card.Title><b>Web Application</b></Card.Title>
              <Card.Text>
              We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#f6f5f3"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png"/>
                </div>
              <Card.Title><b>Mobile App Development</b></Card.Title>
              <Card.Text>
              We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#fcf0e4"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png"/>
                </div>
              <Card.Title><b>eCommerce Development</b></Card.Title>
              <Card.Text >
              For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#f5f6f8"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/digitalmarketing.png"/>
                </div>
              <Card.Title><b>Digital Markrting</b></Card.Title>
              <Card.Text>
              We bring together expertise in digital marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.

              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div >
          <Card style={{ width: "18rem" ,    backgroundColor: "#effbfb"}}className="service-card">
            <Card.Body>
                <div>
                    <img src="https://woxro.com/public/assets/png/services/graphic.png"/>
                </div>
              <Card.Title><b>Graphic Designing</b></Card.Title>
              <Card.Text>
              We build sustainable,brands by connecting your products and messege with auidiences that would want to get your and or services.We nurture ideas to transform and through creativity focused on growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
     
    </>
  );
}

export default ServiceCards;
