import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Items from './pages/Items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4 main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;