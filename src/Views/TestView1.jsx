import React from "react";

const TestView1 = ({ history }) => (
  <div>
    <div>TestView1</div>
    <button type="button" onClick={() => history.push("/2")}>
      Got to TestView2
    </button>
  </div>
);

export default TestView1;
