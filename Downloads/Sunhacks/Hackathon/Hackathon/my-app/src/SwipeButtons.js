import React from "react"
import "./SwipeButtons.css"

import cross from "./assets/cross.png";
import check from "./assets/check.png";
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
           
            <img src={cross} height="22%" width="22%" alt="Cross Button" />
            <img src={check} height="22%" width="22%" alt="Check Button" />
            
        </div>

    );
};

export default SwipeButtons;