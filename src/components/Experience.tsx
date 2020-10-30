import React from "react"
import { Graduate } from "../model"
import { Card, Accordion, Button, Collapse } from "react-bootstrap"

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
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.language}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      What’s your education level?
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.education}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      How many interviews did you have before you landed a job?
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.interviews}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      How much time did it get to land a job after graduating?
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.monthsToJob}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Current job type{" "}
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.jobType}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Industry
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.industry}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Company language
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.companyLang}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      Company size
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.companySize}
                    </Card.Text>
                  </div>
                  <div className="QA">
                    <Card.Text style={{ width: "30%", fontWeight: "bold" }}>
                      TechStack
                    </Card.Text>
                    <Card.Text style={{ width: "70%", marginLeft: "20px" }}>
                      {data.techStack}
                    </Card.Text>
                  </div>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <h4>How did you find the job?</h4>
                  <p>{data.answer1}</p>
                </div>
                <div>
                  <h4>
                    Do you know why your candidacy was rejected? If yes, could
                    you share what it was?
                  </h4>
                  <p>{data.answer2}</p>
                </div>
                <div>
                  <h4>
                    What do you think was the decisive factor for you to get
                    hired?
                  </h4>
                  <p>{data.answer3}</p>
                </div>
                <div>
                  <h4>What was your biggest struggle and why?</h4>
                  <p>{data.answer4}</p>
                </div>
                <div>
                  <h4>What would you do differently next time (and why)?</h4>
                  <p>{data.answer5}</p>
                </div>
                <div>
                  <h4>
                    What tips and/or do’s and don’ts do you have for future
                    students/graduates?
                  </h4>
                  <p>{data.answer6}</p>
                </div>
                <div>
                  <h4>What else would you like to share?</h4>
                  <p>{data.answer7}</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  )
}
