import {FC} from "react";

import {  Routes, Route } from "react-router";
import Home from  "./pages/home"
import AgentProfile from  "./pages/agent-profile"
import NotFound from "./pages/not-found";
import ApplyAsAgent from "./pages/apply-as-agent"
export const Routess: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agent/:id" element={<AgentProfile />} />
            <Route path="/apply" element={<ApplyAsAgent />} />
            <Route path="/request-delivery" element={<ApplyAsAgent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}