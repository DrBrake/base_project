import React from "react";

const TestView2 = ({ history }) => (
  <div>
    <div>TestView2</div>
    <button type="button" onClick={() => history.push("/")}>
      Got to TestView1
    </button>
  </div>
);

export default TestView2;
