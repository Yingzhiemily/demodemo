import {Routes,Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Navbar from './components/Navbar';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import './App.css';

function App () {
    return (
    <>
        <Navbar />
        <Header />
        <div className="container">
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/contactus" element={<ContactUs />} />
                 <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
    </>
    );
}
export default App;
