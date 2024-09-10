import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
const MainLayout = () => {
    return (
        <>

            <Outlet/>
            <SpeedInsights/>
            <Analytics/>
        </>
    );
};

export default MainLayout;