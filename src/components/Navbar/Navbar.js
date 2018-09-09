import React from "react";
import "./Navbar.css";

const Navbar = (props) => (
    <div className="row" id="header">
        <div className="col-sm-4"id="h-div-1">Clicky Game</div>
        <div className="col-sm-4" id="h-div-2">
                <p id="p-begin">{props.message}</p>
        </div>
        <div className="col-sm-4" id="h-div-3">
              {/* <p className={props.messageClass}>{props.message}</p> */}
              <p id="score" >Score: {props.score} | Top Score: {props.topscore}</p>
        </div>
    </div>
    );

            /* 
            
            
                    {/* <p id="top-score">Top Score: 0</p> */
                /* </div> */
             
              /* /* <ul>
                  <li className={props.messageClass}>{props.message}</li>
                  <li>Score: {props.score} | Top Score: {props.topscore}</li>
              </ul> */
            // </div>  */}


  // <nav className="navbar">
  //   <ul>
  //     <li className="brand">
  //       <a href="/">Click Game</a>
  //     </li>
  //     <li className={props.messageClass}>{props.message}</li>
  //     <li>Score: {props.score} | Top Score: {props.topscore}</li>
      // </ul>
  // </nav>

export default Navbar;
