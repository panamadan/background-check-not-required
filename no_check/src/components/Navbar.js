import React from "react"
import Appbar from "muicss/lib/react/appbar"

function Navbar ()
{
    let s1 = {verticalAlign: "middle", textAlign: "center", fontSize: 36};
    return(
        <div>
            <Appbar>
                <table width="100%">
                    <tbody>
                        <tr style={s1}>
                            <td className="mui--appbar-height">No Background Check Required</td>
                        </tr>
                    </tbody>
                </table>
            </Appbar>
        </div>
        
    )
}

export default Navbar;