import React from "react";
import Menubar from "../menubar/Menubar";
import { Outlet } from "react-router-dom";
function Rootlayout(){
    return(
        <>
        <Menubar/>
        <Outlet/>
        </>
    );

}
export default Rootlayout;