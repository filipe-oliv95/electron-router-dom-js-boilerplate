import { Link } from "react-router-dom";
import React from "react";

export function FirstPage() {
  return (
    <>
      <h1>First Page</h1>
      <ul className="version">
        <li>
          <Link to="/">Return to Home</Link>
        </li>
      </ul>
    </>
  );
}
