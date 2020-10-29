import React from "react";
import { Graduate } from "../model";
import { Card, Accordion, Button, Collapse } from "react-bootstrap";

export const Experience: React.FC<Graduate> = (data) => {
  return (
    <Card style={{ width: "50%" }}>
      <Card.Body>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                <Card.Title>{data.fullName}</Card.Title>
                <Card.Title>Do you speak Dutch?</Card.Title>
                <Card.Text>{data.language}</Card.Text>
                <Card.Title>What’s your education level?</Card.Title>
                <Card.Text>{data.education}</Card.Text>
                <Card.Title>
                  How many interviews did you have before you landed a job?
                </Card.Title>
                <Card.Text>{data.interviews}</Card.Text>
                <Card.Title>
                  How much time did it get to land a job after graduating?
                </Card.Title>
                <Card.Text>{data.monthsToJob}</Card.Text>
                <Card.Title>Current job type </Card.Title>
                <Card.Text>{data.jobType}</Card.Text>
                <Card.Title>Industry</Card.Title>
                <Card.Text>{data.industry}</Card.Text>
                <Card.Title>Company language</Card.Title>
                <Card.Text>{data.companyLang}</Card.Text>
                <Card.Title>Company size</Card.Title>
                <Card.Text>{data.companySize}</Card.Text>
                <Card.Title>Industry</Card.Title>
                <Card.Text>{data.industry}</Card.Text>
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
  );
};
