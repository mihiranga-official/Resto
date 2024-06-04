import React, { useState, useEffect } from "react";

const AdDashboard = () => {
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    let count = localStorage.getItem("page_view");

    if (count) {
      count = Number(count) + 1;
      localStorage.setItem("page_view", count);
    } else {
      count = 1;
      localStorage.setItem("page_view", 1);
    }

    setVisitCount(count);
  }, []);



  return (
    <div>
      <div>Website visit count:</div>
      <div className="website-counter">{visitCount}</div>
      <div>Monthly  visit count:</div>
      <div className="website-counter">{visitCount}</div>
     
    </div>
  );
};

export default AdDashboard;
