import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import '../styles/Login.css';
import Header from '../components/Header';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    navigate('/');
  };

  const handleConfirm = async () => {
    try {
      setError('');
      setLoading(true);

      const response = await fetch('https://investapi.trxplay.org/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
          'Origin': 'https://investment.trxplay.org'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token or user data if returned from API
        if (data.token) {
          localStorage.setItem('userToken', data.token);
        }
        if (data.userData) {
          localStorage.setItem('userData', JSON.stringify(data.userData));
        }
        // Navigate to home page on successful login
        navigate('/');
      } else {
        // Handle error response
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <Header />
      
      <div className="login-content">
        <div className="loginModal" data-v-a8e28a02="">
          <div className="ivu-modal-content ivu-modal-content-no-mask">
            <div className="ivu-modal-header">
              <div data-v-a8e28a02="">
                <span className="title-black-PR-18">
                  Log in
                </span>
              </div>
            </div>
            <div className="ivu-modal-body">
              <div className="wallet-btn-wrap" data-v-a8e28a02="">
                <div data-v-a8e28a02="" className="wallet-btn">
                  <LazyImage
                    data-v-a8e28a02=""
                    src="https://image.treasurenft.xyz/icon/icon_login_wallet_01.png"
                    alt="Wallet"
                    className="wallet-icon"
                  />
                  <p data-v-a8e28a02="">Sign Up With Wallet ›</p>
                </div>
              </div>
              
              <form
                data-v-a8e28a02=""
                autoComplete="off"
                className="ivu-form ivu-form-label-top"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirm();
                }}
              >
                {error && (
                  <div className="error-message">
                    {error}
                  </div>
                )}

                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">User name</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        placeholder="User Name"
                        className="ivu-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Password</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        autoComplete="off"
                        spellCheck="false"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="ivu-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                      />
                      <span className="ivu-input-suffix" onClick={() => setShowPassword(!showPassword)}>
                        <i className={`ivu-icon ivu-icon-ios-${showPassword ? 'eye' : 'eye-outline'}`} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="forgot-password">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>

                <div className="footerBtn">
                  <button
                    type="submit"
                    className="ivu-btn ivu-btn-primary"
                    disabled={loading}
                  >
                    <span>{loading ? 'Logging in...' : 'Confirm'}</span>
                  </button>
                  <button
                    type="button"
                    className="ivu-btn ivu-btn-info"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    <span>Cancel</span>
                  </button>
                </div>
              </form>

              <div className="signup-text">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
          
          <div className="help-button">
            <LazyImage
              src="https://image.treasurenft.xyz/btn/btn_help_01.png"
              alt="Help"
              className="helpIconStyle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 