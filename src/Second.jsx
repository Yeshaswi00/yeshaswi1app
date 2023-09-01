import React, { useContext } from "react";
import Context from './Context';
function Second(){
    var y = useContext(Context)
    return(
        <div className="mybox">
            <h1>Second</h1>
            <h1>y::{y}</h1>
        </div>
    )
}
export default Second;