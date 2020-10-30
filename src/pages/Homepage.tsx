import axios from "axios";
import React, { useEffect, useState } from "react";
import { Graduate } from "../model";
import { API_URL } from "../config/constants";
import { Experience } from "../components/Experience";
import Button from "react-bootstrap/Button";
require("./Homepage.css");

/***
 * To do:
 * - styling
 * - figure out how we going to filter based on front/back/full
 */
// console.log("URL:", API_URL)

export default function Homepage() {
  const [graduates, setGraduates] = useState<Graduate[]>([]);
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${API_URL}`);
      // console.log("response from axios:", response)
      setGraduates(response.data);
    }
    fetchData();
  }, []);

  // declaring this variable so we can filter over it, and let TS know it's gonna have an array of Grads
  let graduatesToRender: Graduate[] = graduates;

  // here's the filter, with a default "" so we can maybe add a "clear filters" or "all" button that sets Stack back to "" so it shows all posts => maybe check that we don't lose the posts along the way. We might need another useState for this
  if (jobType) {
    graduatesToRender = graduates.filter((grad) => {
      return grad.jobType === jobType;
    });
  } else if (jobType === "") {
    graduatesToRender = graduates;
  }

  // console.log("got the graduates?:", graduatesToRender)
  // console.log("jobType", jobType)

  return (
    <>
      <div className="titleHomepage">
        <h1>CodaShare</h1>
        <h3 className="description">
          Codaisseur graduates sharing their <br />
          experience in landing their first job
        </h3>
        <div style={{ flexDirection: "row" }}>
          <Button
            title="Full Stack"
            onClick={() => setJobType("Fullstack")}
            bsPrefix="redButton"
          >
            Full Stack
          </Button>
          <Button bsPrefix="redButton" onClick={() => setJobType("Backend")}>
            Backend
          </Button>
          <Button bsPrefix="redButton" onClick={() => setJobType("Frontend")}>
            Frontend
          </Button>
          <Button
            bsPrefix="redButton"
            title="any"
            onClick={() => setJobType("")}
          >
            Any
          </Button>
        </div>
      </div>
      <div className="cards">
        {graduatesToRender.map((grad) => {
          return (
            <Experience
              key={grad.id}
              id={grad.id}
              fullName={grad.fullName}
              email={grad.email}
              password={grad.password}
              education={grad.education}
              language={grad.language}
              monthsToJob={grad.monthsToJob}
              interviews={grad.interviews}
              jobType={grad.jobType}
              companyLang={grad.companyLang}
              companySize={grad.companySize}
              industry={grad.industry}
              techStack={grad.techStack}
              answer1={grad.answer1}
              answer2={grad.answer2}
              answer3={grad.answer3}
              answer4={grad.answer4}
              answer5={grad.answer5}
              answer6={grad.answer6}
              answer7={grad.answer7}
            />
          );
        })}
      </div>
    </>
  );
}
