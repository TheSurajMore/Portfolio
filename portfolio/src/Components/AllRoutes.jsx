import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Myself from "./Myself";
import Projects from "./Projects";
import Skills from "./Skills";

const AllRoutes = () => {
    return(<>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/SKILLS" element={<Skills/>} ></Route>
        <Route path="/PROJECTS" element={<Projects/>} />
        <Route path="/EDUCATION" element={<Education/>} />
        <Route path="/EXPERIENCE" element={<Experience/>}/>
        <Route path="/CONTACT" element={<Contact/>} />
        <Route path="/MY_SELF" element={<Myself/>} />
        <Route/>
    </Routes>
    </>)
}
export default AllRoutes;