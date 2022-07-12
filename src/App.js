import {Route, BrowserRouter, Routes} from "react-router-dom";
import "./App.less";
import Login from "./pages/login";
import Home from "./pages/home";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
