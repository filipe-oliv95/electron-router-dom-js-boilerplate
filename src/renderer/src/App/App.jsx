import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <h1>Electron Router DOM</h1>
      <ul className="version">
        <li><Link to="/first-page">First Page</Link></li>
        <li><Link to="/second-page">Second Page</Link></li>
      </ul>
    </>
  )
}
