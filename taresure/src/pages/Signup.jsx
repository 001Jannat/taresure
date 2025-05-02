import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import '../styles/Signup.css';
import Header from '../components/Header';
import images from '../images.json';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    emailCode: '',
    referralCode: '',
    mobile: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    // Add signup logic here
    console.log('Signup attempt with:', formData);
  };

  const sendEmailCode = () => {
    // Add email verification code sending logic here
    console.log('Sending verification code to:', formData.email);
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
                  Sign Up
                </span>
              </div>
            </div>
            <div className="ivu-modal-body">
              <div className="wallet-btn-wrap" data-v-a8e28a02="">
                <div data-v-a8e28a02="" className="wallet-btn">
                  <LazyImage
                    data-v-a8e28a02=""
                    src={images.icons.loginWallet}
                    alt="Wallet"
                    className="wallet-icon"
                  />
                  <p data-v-a8e28a02="">Sign Up With Wallet ›</p>
                </div>
              </div>
              
              <form
                data-v-a8e28a02=""
                autoComplete="off"
                className="ivu-form-signup ivu-form-label-top"
              >
                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">User name</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="username"
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        placeholder="Please Enter User Name"
                        className="ivu-input"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Password</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="password"
                        autoComplete="off"
                        spellCheck="false"
                        type={showPassword ? "text" : "password"}
                        placeholder="Please Enter Your Password"
                        className="ivu-input"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <span className="ivu-input-suffix" onClick={() => setShowPassword(!showPassword)}>
                        <i className={`ivu-icon ivu-icon-ios-${showPassword ? 'eye' : 'eye-outline'}`} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Confirm Password</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="confirmPassword"
                        autoComplete="off"
                        spellCheck="false"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Please Re-Enter Your Password"
                        className="ivu-input"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <span className="ivu-input-suffix" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <i className={`ivu-icon ivu-icon-ios-${showConfirmPassword ? 'eye' : 'eye-outline'}`} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Email</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="email"
                        autoComplete="off"
                        spellCheck="false"
                        type="email"
                        placeholder="Please Enter Your Email"
                        className="ivu-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* <div className="ivu-form-item">
                  <div className="ivu-form-item-content">
                    <div className="verification-code-wrapper">
                      <input
                        name="emailCode"
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        placeholder="Enter Code"
                        className="ivu-input"
                        value={formData.emailCode}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="ivu-btn ivu-btn-info verification-code-btn"
                        onClick={sendEmailCode}
                      >
                        Send Code
                      </button>
                    </div>
                  </div>
                </div> */}
                {/* <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Mobile Number</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="mobile"
                        autoComplete="off"
                        spellCheck="false"
                        type="tel"
                        placeholder="Enter Mobile Number"
                        className="ivu-input"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div> */}

                {/* <div className="ivu-form-item">
                  <label className="ivu-form-item-label">Referral Code (Optional)</label>
                  <div className="ivu-form-item-content">
                    <div className="ivu-input-wrapper">
                      <input
                        name="referralCode"
                        autoComplete="off"
                        spellCheck="false"
                        type="text"
                        placeholder="Enter Referral Code"
                        className="ivu-input"
                        value={formData.referralCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div> */}
                </div>

                <div className="footerBtn">
                <button
                  type="button"
                  className="ivu-btn ivu-btn-primary"
                  onClick={handleConfirm}
                >
                  <span>Sign Up</span>
                </button>
                <button
                  type="button"
                  className="ivu-btn ivu-btn-info"
                  onClick={handleCancel}
                >
                  <span>Cancel</span>
                </button>
              </div>

              <div className="signup-text">
                Already have an account? <Link to="/login">Log in</Link>
              </div>

              </form>
            </div>
          </div>
          
          <div className="help-button">
            <LazyImage
              src={images.buttons.help}
              alt="Help"
              className="helpIconStyle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 