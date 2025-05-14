import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Service from './pages/Service';
import Download from './pages/Download';
import Security from './pages/Security';
import Auction from './pages/Auction';
import Message from './pages/Message';
import Stake from './pages/Stake';
import Earn from './pages/Earn';
import Reserve from './pages/Reserve';
import Assets from './pages/Assets';
import My from './pages/My';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service" element={<Service />} />
          <Route path="/download" element={<Download />} />
          <Route path="/security" element={<Security />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/message" element={<Message />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/my" element={<My />} />
        </Routes>
      </Router>
  );
}

export default App; 