// import React from "react";
// import Appbar from "muicss/lib/react/appbar";

import { Link } from "react-router-dom";

// function Navbar() {
//   let s1 = { verticalAlign: "middle", textAlign: "left", fontSize: 36 };
//   let s2 = { verticalAlign: "middle", textAlign: "right", fontSize: 30 };
//   return (
//     <div>
//       <Appbar>
//         <table width="100%">
//           <tbody>
//             <tr style={s1}>
//               <td className="mui--appbar-height brandName">
//                 <a href="/">No Background Check Required</a>
//               </td>
//               <td className="mui--appbar-height" style={s2}>
//                 <Link to="/register">Register</Link>
//               </td>
//               <td className="mui--appbar-height" style={s2}>
//                 <Link to="/login">Login </Link>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </Appbar>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import "./Navbar.css";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
          <a href="/">Background Check Not Required</a>
          </Typography>
          <Button classname = "regbttn" > 
          <Link to="/register">Register</Link>
          </Button>
          <Button color="inherit">
          <Link to="/login">Login </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

