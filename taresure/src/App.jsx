import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Service from './pages/Service';
import Download from './pages/Download';
import Security from './pages/Security';
import Auction from './pages/Auction';
import Message from './pages/Message'; // Fixed typo: Messag -> Message
import Stake from './pages/Stake';
import Earn from './pages/Earn';
import Reserve from './pages/Reserve';
import Assets from './pages/Assets';
import My from './pages/My';
import Collection from './pages/Collection';
import Level from './pages/Level';
import PointRecord from './pages/pointRecord';
import Memberlist from './pages/memberlist';
import TeamContribution from './pages/teamContribution';
import TeamOrder from './teamOrder';
import ShareCenter from './pages/shareCenter';
import Bidding from './pages/bidding';

import Myearning from './pages/myEarnings';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Tutorial from './pages/Tutorial';
import Setting from './pages/Setting';
import Mint from './pages/mint';

// ErrorBoundary to catch runtime errors (e.g., Script error in bundle.js)
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please refresh the page.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
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
          <Route path="/collection" element={<Collection />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/Level" element={<Level />} />

          <Route path="/pointRecord" element={<PointRecord />} />

          <Route path="/Level/list" element={<Memberlist />} />
          <Route path="/teamContribution" element={<TeamContribution />} />
          <Route path="/teamOrder" element={<TeamOrder />} />
          <Route path="/Referral" element={<ShareCenter />} />
           <Route path="/bidding" element={<Bidding />} />
            <Route path="/myEarnings" element={<Myearning />} />
            <Route path="/Deposit" element={<Deposit />} />
             <Route path="/Withdraw" element={<Withdraw />} />

              <Route path="/Tutorial" element={<Tutorial />} />
              <Route path="/Setting" element={<Setting />} />
              <Route path="/Mint" element={<Mint />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/my" element={<My />}>
            <Route path="" element={<div>Select a tab</div>} />
            <Route path="history" element={<div>Settlement Record Content</div>} />
            <Route path="mytrade" element={<div>My Record Content</div>} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;