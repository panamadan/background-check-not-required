import React from "react"
import Appbar from "muicss/lib/react/appbar"

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
                            <td className="mui--appbar-height">No Background Check Required</td>
                            <td className="mui--appbar-height" style={s2}>Sign In</td>
                            <td className="mui--appbar-height" style={s2}>Sign Up</td>
                        </tr>
                    </tbody>
                </table>
            </Appbar>
        </div>
        
    )
}

export default Navbar;