import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/HomePage";

const AppRoutes = () => {
    return ( 
        <Routes>
           <Route path="/" element={<Layout><Homepage/></Layout>}/>
           <Route path="/user-profile" element={<span> User Profile Page</span>}/>
           <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
     );
}
 
export default AppRoutes;