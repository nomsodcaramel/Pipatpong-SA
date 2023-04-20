import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      {/* grid of 4 education cells */}
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <div className="container">
          <div className="box">
            <h3>University of California, Irvine</h3>
            <p className="small">Bachelor of Science in Computer Science</p>
            <p className="small">Expected Graduation: June 2022</p>
          </div>
          <div className="box">
            <h3>University of California, Irvine</h3>
            <p className="small">Bachelor of Arts in Cognitive Science</p>
            <p className="small">Expected Graduation: June 2022</p>
          </div>
          <div className="box">
            <h3>University of California, Irvine</h3>
            <p className="small">Bachelor of Arts in Linguistics</p>
            <p className="small">Expected Graduation: June 2022</p>
          </div>
          <div className="box">
            <h3>University of California, Irvine</h3>
            <p className="small">Bachelor of Arts in Cognitive Science</p>
            <p className="small">Expected Graduation: June 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
