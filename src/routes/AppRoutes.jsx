import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AddMoment from "../pages/AddMoment";
import DetailMoment from "../pages/DetailMoment";
import EditMoment from "../pages/EditMoment";
import About from "../pages/About";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/add" element={<AddMoment />} />

                <Route path="/detail/:id" element={<DetailMoment />}/>

                <Route path="/edit/:id" element={<EditMoment />} />

                <Route path="/about" element={<About />} />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;