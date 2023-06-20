import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Areas } from "./pages/areas";
import { AreasDetail } from "./pages/areas/detail";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/areas/create" element={<AreasDetail />} />
            <Route path="/areas/:id" element={<AreasDetail />} />
        </Routes>
    );
}