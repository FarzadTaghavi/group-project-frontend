import React from "react";
import { Graduate } from "../model";
  
export const Experience: React.FC<Graduate> = (data) => {
  return (
    <div>
      <div>
        <h4>How did you find the job?</h4>
        <p>{data.answer1}</p>
      </div>
      <div>
        <h4>
          Do you know why your candidacy was rejected? If yes, could you share
          what it was?
        </h4>
        <p>{data.answer2}</p>
      </div>
      <div>
        <h4>What do you think was the decisive factor for you to get hired?</h4>
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
    </div>
  );
};
