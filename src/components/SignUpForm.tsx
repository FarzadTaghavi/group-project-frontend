import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { API_URL } from "../config/constants";
console.log(API_URL);

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [education, setEducation] = useState("");
  const [interviews, setInterviews] = useState("");
  const [monthsToJob, setMonthsToJob] = useState<number | undefined>(0);
  const [jobType, setJobType] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyLang, setCompanyLang] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [techStack, setTechStack] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");

  const submitForm = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        fullName,
        email,
        password,
        education,
        language,
        monthsToJob,
        interviews,
        jobType,
        industry,
        companyLang,
        companySize,
        techStack,
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
      });
      console.log("response: ", response.data);
    } catch (e) {
      console.log(e.message);
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Sign up</h1>
      <Form.Group>
        <Form.Label>Firstname </Form.Label>
        <Form.Control
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          type="text"
          placeholder=""
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email </Form.Label>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password </Form.Label>
        <Form.Control
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Do you speak Dutch? </Form.Label>
        <Form.Control
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>What’s your education level? </Form.Label>
        <Form.Control
          value={education}
          onChange={(event) => setEducation(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          How many interviews did you have before you landed a job?{" "}
        </Form.Label>
        <Form.Control
          value={interviews}
          onChange={(event) => setInterviews(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          How much time did it get to land a job after graduating?{" "}
        </Form.Label>
        <Form.Control
          as="select"
          onChange={(event) => setMonthsToJob(parseInt(event.target.value))}
          defaultValue=""
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Current job type? </Form.Label>
        <Form.Control
          value={jobType}
          onChange={(event) => setJobType(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Industry </Form.Label>
        <Form.Control
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Company language </Form.Label>
        <Form.Control
          value={companyLang}
          onChange={(event) => setCompanyLang(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Company size </Form.Label>
        <Form.Control
          value={companySize}
          onChange={(event) => setCompanySize(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Technologies used at company?</Form.Label>
        <Form.Control
          value={techStack}
          onChange={(event) => setTechStack(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>How did you find the job? </Form.Label>
        <Form.Control
          value={answer1}
          onChange={(event) => setAnswer1(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          Do you know why your candidacy was rejected? If yes, could you share
          what it was?{" "}
        </Form.Label>
        <Form.Control
          value={answer2}
          onChange={(event) => setAnswer2(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          What do you think was the decisive factor for you to get hired?{" "}
        </Form.Label>
        <Form.Control
          value={answer3}
          onChange={(event) => setAnswer3(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>What was your biggest struggle and why? </Form.Label>
        <Form.Control
          value={answer4}
          onChange={(event) => setAnswer4(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          What would you do differently next time (and why)?{" "}
        </Form.Label>
        <Form.Control
          value={answer5}
          onChange={(event) => setAnswer5(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>
          What tips and/or do’s and don’ts do you have for future
          students/graduates?{" "}
        </Form.Label>
        <Form.Control
          value={answer6}
          onChange={(event) => setAnswer6(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>What else would you like to share? </Form.Label>
        <Form.Control
          value={answer7}
          onChange={(event) => setAnswer7(event.target.value)}
          type="text"
          placeholder=""
        />
      </Form.Group>

      <Form.Group className="mt-10">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Share!
        </Button>
      </Form.Group>
    </Form>
  );
}
