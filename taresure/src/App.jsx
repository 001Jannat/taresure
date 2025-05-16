import React, { lazy, Suspense, useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


// Lazy-loaded components

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Service = lazy(() => import('./pages/Service'));
const Download = lazy(() => import('./pages/Download'));
const Security = lazy(() => import('./pages/Security'));
const Auction = lazy(() => import('./pages/Auction'));
const Message = lazy(() => import('./pages/Message'));
const Stake = lazy(() => import('./pages/Stake'));
const Earn = lazy(() => import('./pages/Earn'));
const Reserve = lazy(() => import('./pages/Reserve'));
const Assets = lazy(() => import('./pages/Assets'));
const My = lazy(() => import('./pages/My'));
const Collection = lazy(() => import('./pages/Collection'));
const Level = lazy(() => import('./pages/Level'));
const PointRecord = lazy(() => import('./pages/pointRecord'));
const Memberlist = lazy(() => import('./pages/memberlist'));
const TeamContribution = lazy(() => import('./pages/teamContribution'));
const TeamOrder = lazy(() => import('./teamOrder'));
const ShareCenter = lazy(() => import('./pages/shareCenter'));
const Bidding = lazy(() => import('./pages/bidding'));
const MyEarnings = lazy(() => import('./pages/myEarnings'));
const Deposit = lazy(() => import('./pages/Deposit'));
const Withdraw = lazy(() => import('./pages/Withdraw'));
const Tutorial = lazy(() => import('./pages/Tutorial'));
const Setting = lazy(() => import('./pages/Setting'));
const Mint = lazy(() => import('./pages/mint'));

const Loading = () => <div>Loading...</div>;

// Component handling route and global behaviors
function AppContent() {
  const location = useLocation();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const leaveTimestamp = useRef(null);

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Page visibility detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        leaveTimestamp.current = Date.now();
      } else if (document.visibilityState === 'visible' && isOnline) {
        const timeAway = (Date.now() - leaveTimestamp.current) / 1000;
        if (timeAway >= 200) {
          window.location.reload();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isOnline]);

  // Route change effects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleWheel = (e) => {
      if (e.ctrlKey) e.preventDefault();
    };

    const preventDefault = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ['c', 'v', 'x', '+', '-', '0'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('contextmenu', preventDefault);
    window.addEventListener('copy', preventDefault);
    window.addEventListener('cut', preventDefault);
    window.addEventListener('paste', preventDefault);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('contextmenu', preventDefault);
      window.removeEventListener('copy', preventDefault);
      window.removeEventListener('cut', preventDefault);
      window.removeEventListener('paste', preventDefault);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
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
        <Route path="/collection" element={<Collection />} />
        <Route path="/level" element={<Level />} />
        <Route path="/pointrecord" element={<PointRecord />} />
        <Route path="/level/list" element={<Memberlist />} />
        <Route path="/teamcontribution" element={<TeamContribution />} />
        <Route path="/teamorder" element={<TeamOrder />} />
        <Route path="/referral" element={<ShareCenter />} />
        <Route path="/bidding" element={<Bidding />} />
        <Route path="/myearnings" element={<MyEarnings />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/my" element={<My />}>
          <Route index element={<div>Select a tab</div>} />
          <Route path="history" element={<div>Settlement Record Content</div>} />
          <Route path="mytrade" element={<div>My Trade Content</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

// Main App with Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
