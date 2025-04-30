import React from 'react';
import '../styles/SecurityVerificationModal.css';

const SecurityVerificationModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = () => {
    onClose && onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'ivu-modal-wrap') {
      handleClose();
    }
  };

  return (
    <div className="ivu-modal-wrap" style={{ zIndex: 1008 }} onClick={handleOverlayClick}>
      <div className="ivu-modal" style={{ width: '325px' }}>
        <div className="ivu-modal-content">
          <div className="ivu-modal-header">
            <h2 className="title-black-PR-26 font-weight-700 text-algin-center">
              Official verification
            </h2>
          </div>
          <div className="ivu-modal-body">
            <p className="title-grey999-PR-18 margin-bottom-25 text-algin-center">
              To prevent phishing and fraud, use this page to verify if URLs,
              WhatsApp, and other accounts are officially certified by Treasure Fun
            </p>
            <form autoComplete="off" className="ivu-form ivu-form-label-right">
              <div className="ivu-form-item ivu-form-item-required">
                <div className="ivu-form-item-content">
                  <div className="ivu-input-wrapper ivu-input-wrapper-default ivu-input-type-text">
                    <i className="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-input-icon ivu-input-icon-validate" />
                    <input
                      autoComplete="off"
                      spellCheck="false"
                      type="text"
                      placeholder="Enter correct info and format for verification"
                      className="ivu-input ivu-input-default"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="securityVerificationTAPModal__footer">
              <button
                type="button"
                className="securityVerificationTAPModal__cancelBtn title-black-PR-14 ivu-btn ivu-btn-dashed ivu-btn-long"
                onClick={handleClose}
              >
                Cancel
              </button>
              <div className="securityVerificationTAPModal__gradientBtn margin-left-10">
                <button
                  id="Gradient"
                  className="border-radius-7 color-white backgroundGradient"
                >
                  <div className="GradientBtn-div">
                    <p className="GradientBtn-div-p">Verify</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityVerificationModal; 