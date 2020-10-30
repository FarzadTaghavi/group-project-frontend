import React from "react";
import { Graduate } from "../model";
import { Card, Accordion, Button } from "react-bootstrap";

export const Experience: React.FC<Graduate> = (data) => {
  return (
    <Card bsPrefix="custom-card">
      <Card.Body style={{ padding: "0px" }}>
        <Accordion>
          <Card>
            <Card.Header style={{ padding: "0" }}>
              <Accordion.Toggle
                bsPrefix="accordion-width"
                as={Button}
                variant="light"
                eventKey="0"
              >
                {" "}
                <Card.Text
                  style={{
                    padding: "10px",
                    fontSize: "26px",
                    width: "100%",
                    textAlign: "left",
                    fontWeight: "bold",
                    fontFamily: "Roboto Slab, sans-serif",
                    backgroundColor: "#CCE7FE",
                    color: "#005296",
                    paddingLeft: "30px",
                  }}
                >
                  {data.fullName}
                </Card.Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "10px",
                  }}
                >
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Do you speak Dutch?
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.language}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      What’s your education level?
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.education}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      How many interviews did you have before you landed a job?
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.interviews}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      How much time did it get to land a job after graduating?
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.monthsToJob}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Current job type{" "}
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.jobType}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Industry
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.industry}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Company language
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.companyLang}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Company size
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.companySize}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text
                      style={{
                        width: "30%",
                        fontWeight: "bold",
                        paddingBottom: "20px",
                      }}
                    >
                      TechStack
                    </Card.Text>
                    <Card.Text
                      style={{
                        width: "70%",
                        marginLeft: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      {data.techStack}
                    </Card.Text>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card2" eventKey="0">
              <Card.Body style={{ padding: "10px" }}>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    How did you find the job?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer1}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    Do you know why your candidacy was rejected? If yes, could
                    you share what it was?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer2}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    What do you think was the decisive factor for you to get
                    hired?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer3}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    What was your biggest struggle and why?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer4}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    What would you do differently next time (and why)?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer5}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    What tips and/or do’s and don’ts do you have for future
                    students/graduates?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer6}
                  </Card.Text>
                </div>
                <div className="QA">
                  <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                    What else would you like to share?
                  </Card.Text>
                  <Card.Text
                    style={{
                      width: "70%",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    {data.answer7}
                  </Card.Text>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
