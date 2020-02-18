import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';

class Example extends React.Component {
  render() {
    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'right'};

    return (
      <Appbar>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height">Left Side</td>
             <td className="mui--appbar-height" style={s2}>Right Side</td>
           </tr>
         </tbody>
       </table>
      </Appbar>
    );
  }
}
export default Signup;

ReactDOM.render(<Example />, document.getElementById('example'));