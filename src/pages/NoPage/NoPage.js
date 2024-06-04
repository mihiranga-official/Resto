import React from "react";
import notfound from "../../Assets/notfound.jpg";

const NoPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <img
        src={notfound}
        alt="404 Not Found"
        style={{ width: "100%", maxWidth: "auto", margin: "auto" }}
      />
    </div>
  );
};

export default NoPage;
