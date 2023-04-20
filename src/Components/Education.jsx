import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      {/* grid of 2 education cells */}
      <h2>Education</h2>
      <div
        className="container"
        style={{
          backgroundColor: "#D2F1E4",
          width: "50%",
          padding: "4rem",
          margin: "4rem auto",
          textAlign: "center",
        }}
      >
        <div className="box">
          <h3>King mongkut’s university of technology thonburi</h3>
          <p className="small">Bachelor of Art in Digital Service Innovation</p>
          <p className="small">Become in this year</p>
        </div>
        <div className="box">
          <h3>Chonkanyanukoon School</h3>
          <p className="small">Major in Science-Computer</p>
          <p className="small">Expected Graduation: February 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
