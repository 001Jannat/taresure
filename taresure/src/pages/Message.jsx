import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import '../styles/Message.css';
import NavFooter from '../components/NavFooter';
import Header from '../components/Header';

const Message = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="ivu-layout">
      <div className="ivu-layout-header">
        {/* <div className="header">
          <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between">
            <div className="header-logo cursor-pointer setLeft ivu-col ivu-col-span-xs-13 ivu-col-span-sm-13 ivu-col-span-md-4 ivu-col-span-lg-4 ivu-col-span-xl-4">
              <img
                src="https://image.treasurenft.xyz/img/img_logo_home.png"
                alt="logo"
                loading="lazy"
              />
            </div>
            <div className="header-btns setMiddle ivu-col margin-right-10" style={{ marginLeft: "auto" }}>
              <span className="ivu-badge">
                <img
                  src="https://image.treasurenft.xyz/icon/icon_notice_02.png"
                  alt="announcement"
                  loading="lazy"
                  className="setMiddle"
                />
                <sup className="ivu-badge-dot" />
              </span>
            </div>
            <div className="header-btns cursor-pointer ivu-col">
              <span className="ivu-badge">
                <p className="specialText-PR-16 badge-title">Airdrop</p>
                <div className="specialLine" />
              </span>
            </div>
          </div>
        </div> */}
        <Header />
      </div>

      <div className="content-wrap">
        <div className="internal-message-mobile">
          <div className="headerImg">
            <h2 className="headerImg-text">Message</h2>
            <IoIosArrowBack
              className="arrowLeft"
              size={24}
              onClick={handleBack}
            />
            <img
              src="https://image.treasurenft.xyz/img/img_walletHeader.png"
              loading="lazy"
              alt="header"
            />
          </div>

          <div className="message-body">
            <div className="ivu-tabs">
              <div className="ivu-tabs-bar">
                <div className="ivu-tabs-nav-right">
                  <div className="btn-read-all">
                    <span
                      className="specialText-PR-12"
                      style={{ cursor: "not-allowed" }}
                    >
                      All Read
                    </span>
                  </div>
                </div>
                <div tabIndex={0} className="ivu-tabs-nav-container">
                  <div className="ivu-tabs-nav-wrap">
                    <span className="ivu-tabs-nav-prev ivu-tabs-nav-scroll-disabled">
                      <i className="ivu-icon ivu-icon-ios-arrow-back" />
                    </span>
                    <span className="ivu-tabs-nav-next ivu-tabs-nav-scroll-disabled">
                      <i className="ivu-icon ivu-icon-ios-arrow-forward" />
                    </span>
                    <div className="ivu-tabs-nav-scroll">
                      <div className="ivu-tabs-nav">
                        <div
                          className="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated"
                          style={{
                            visibility: "visible",
                            width: 210,
                            transform: "translate3d(0px, 0px, 0px)"
                          }}
                        />
                        <div
                          className="ivu-tabs-tab ivu-tabs-tab-active ivu-tabs-tab-focused"
                        >
                          <div>
                            <span>Customer Notification</span>
                            <span className="ivu-badge" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ivu-tabs-content ivu-tabs-content-animated"
                style={{ transform: "translateX(0%) translateZ(0px)" }}
              >
                <div
                  className="ivu-tabs-tabpane"
                  style={{ visibility: "visible" }}
                />
              </div>
              <div className="ivu-tabs-context-menu">
                <div className="ivu-dropdown">
                  <div className="ivu-dropdown-rel" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="https://image.treasurenft.xyz/btn/btn_help_01.png"
          alt="helpIcon"
          loading="lazy"
          className="helpIconStyle"
        />
      </div>

      <NavFooter />
    </div>
  );
};

export default Message; 