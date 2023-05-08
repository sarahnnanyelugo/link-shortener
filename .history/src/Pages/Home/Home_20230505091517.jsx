import React from "react";
import "./home.scss";
function Home() {
  return (
    <>
      <div className="col-md-8 offset-md-2 home-container">
        <div className="col-md-12">
          <h1 className="col-md-10">
            We’ve expanded! <br />
            Shorten URLs. Generate QR Codes. And now, create Link-in-bios.
          </h1>
          <button>Get started for free</button>
        </div>
      </div>
    </>
  );
}

export default Home;
