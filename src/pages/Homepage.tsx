import axios from "axios";
import React, { useEffect, useState } from "react";
import { Graduate } from "../model";
import { API_URL } from "../config/constants";
import { Experience } from "../components/Experience";

/***
 * To do:
 * - styling
 * - figure out how we going to filter based on front/back/full
 */

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
  let graduatesToRender: Graduate[] = [];

  // here's the filter, with a default "" so we can maybe add a "clear filters" or "all" button that sets Stack back to "" so it shows all posts => maybe check that we don't lose the posts along the way. We might need another useState for this
  if (jobType) {
    if (jobType === "") {
      graduatesToRender = graduates;
    } else
      graduatesToRender = graduates.filter((grad) => {
        return grad.jobType === jobType;
      });
  }
  // console.log("got the graduates?:", graduates)

  return (
    <>
      <div>
        <h1>Our project name</h1>
        <h3>
          Codaisseur graduates sharing their experience in landing their first
          job
        </h3>
        <div style={{ flexDirection: "row" }}>
          <button title="Full Stack" onClick={() => setJobType("fullstack")} />
          <button title="Backend" onClick={() => setJobType("backend")} />
          <button title="Frontend" onClick={() => setJobType("frontend")} />
        </div>
      </div>
      {graduatesToRender.map((grad) => {
        // I've put the Graduate props in an object so we can just pass the whole thing here
        return (
          <Experience
            id={grad.id}
            fullName={grad.fullName}
            email={grad.email}
            password={grad.password}
            education={grad.education}
            language={grad.language}
            monthsToJob={grad.monthsToJob}
            interviews={grad.interviews}
            jobType={grad.jobType}
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
    </>
  );
}
