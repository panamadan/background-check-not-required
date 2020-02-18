import React from "react"
import Appbar from "muicss/lib/react/appbar"
import "./Navbar.css"

function Navbar ()
{
    let s1 = {verticalAlign: "middle", textAlign: "left", fontSize: 36};
    let s2 = {verticalAlign: "middle", textAlign: "right", fontSize: 30}
    return(
        <div>
            <Appbar>
                <table width="100%">
                    <tbody>
                        <tr style={s1}>
                            <td className="mui--appbar-height brandName"><a href="/">No Background Check Required</a></td>
                            <td className="mui--appbar-height" style={s2} ><a href="/signin">Sign In</a></td>
                            <td className="mui--appbar-height" style={s2} href="/signup"><a href="/signup">Sign Up</a></td>
                        </tr>
                    </tbody>
                </table>
            </Appbar>
        </div>
        
    )
}

export default Navbar;