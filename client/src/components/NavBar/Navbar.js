import React from "react";
import Appbar from "muicss/lib/react/appbar";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  let s1 = { verticalAlign: "middle", textAlign: "left", fontSize: 36 };
  let s2 = { verticalAlign: "middle", textAlign: "right", fontSize: 30 };
  return (
    <div>
      <Appbar>
        <table width="100%">
          <tbody>
            <tr style={s1}>
              <td className="mui--appbar-height brandName">
                <a href="/">No Background Check Required</a>
              </td>
              <td className="mui--appbar-height" style={s2}>
                <Link to="/register">Register</Link>
              </td>
              <td className="mui--appbar-height" style={s2}>
                <Link to="/login">Login </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    </div>
  );
}

export default Navbar;
