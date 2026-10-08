import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Home';
import './App.css'
import { basename } from './Utils/basename';

function App() {
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/" element={<Index />} />
                {/* Adicione outras rotas conforme necessário */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </Router>
    );
}

export default App;