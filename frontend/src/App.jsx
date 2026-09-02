import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import PostPage from "./pages/PostPage";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Album from "./components/Album";

function App() {
    return (
        <BrowserRouter>
            {window.location.pathname !== "/" &&
                <Navigation />}
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home/:type" element={<Home />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="*" element={ <NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
