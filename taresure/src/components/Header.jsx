import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import '../styles/Header.css';
import SecurityVerificationModal from './SecurityVerificationModal';
import images from '../images.json';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [airdropMenuVisible, setAirdropMenuVisible] = useState(false);
  const [languageDrawerVisible, setLanguageDrawerVisible] = useState(false);
  const [securityModalVisible, setSecurityModalVisible] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'عربي/عربى ʿarabī [ ʿarabī:]', code: 'ar' },
    { name: 'اردو', code: 'ur' },
    { name: 'Hindi', code: 'hi' },
    { name: 'বাঙ্লা', code: 'bn' },
    { name: 'فارسی/Fārsī', code: 'fa' },
    { name: 'Español', code: 'es' },
    { name: 'pýсский язык', code: 'ru' },
    { name: 'Português', code: 'pt' },
    { name: '한국어', code: 'ko' },
    { name: 'Tiếng Việt', code: 'vi' }
  ];
  

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setAirdropMenuVisible(false);
    setLanguageDrawerVisible(false);
  };

  const handleAirdropClick = () => {
    navigate('/login');
  };

  const toggleAirdropMenu = () => {
    setAirdropMenuVisible(!airdropMenuVisible);
    setMenuVisible(false);
    setLanguageDrawerVisible(false);
  };

  const toggleLanguageDrawer = (e) => {
    if (e) e.preventDefault();
    setLanguageDrawerVisible(!languageDrawerVisible);
    setMenuVisible(false);
    setAirdropMenuVisible(false);
  };

  const handleLanguageSelect = (code) => {
    // Here you would implement language change logic
    console.log('Selected language:', code);
    setLanguageDrawerVisible(false);
  };

  const handleMenuClick = (path) => {
    if (path === '/security') {
      setSecurityModalVisible(true);
    } else if (path === '/language') {
      toggleLanguageDrawer();
    } else if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    setMenuVisible(false);
    setAirdropMenuVisible(false);
  };

  return (
    <>
      <div className="ivu-layout-header">
        <div className="header" style={{width:'100%',height:'60px'}}>
          <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between">
            <div className="header-logo cursor-pointer ivu-col ivu-col-span-xs-8 ivu-col-span-sm-8 ivu-col-span-md-4 ivu-col-span-lg-4 ivu-col-span-xl-4">
              <Link to="/">
                <img
                  src={images.logos.homeLogo}
                  alt="logo"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="header-right-section ivu-col" style={{ margin: 0, padding: 0, width: "60%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 25 }}>
              <div className="header-btns setMiddle margin-right-18">
                <span className="ivu-badge">
                  <img
                    src={images.icons.notice}
                    alt="announcement"
                    loading="lazy"
                    className="setMiddle"
                  />
                  <sup className="ivu-badge-dot" />
                </span>
              </div>

              <div className="header-btns cursor-pointer">
                <span className="airdrop-text" onClick={handleAirdropClick}>
                  <p className="specialText-PR-16 badge-title">
                    Airdrop
                  </p>
                  <div className="specialLine" />
                </span>
              </div>

              <div className="header-btns cursor-pointer new-menu-wrap-Col">
                <span className="menu-icon-wrapper" onClick={toggleAirdropMenu}>
                  <HiMenu className="menuIcon" size={48} />
                </span>
                
                <ul
                  className="new-menu-wrap ivu-menu ivu-menu-light ivu-menu-vertical"
                  style={{ display: airdropMenuVisible ? 'block' : 'none', width: 150}}
                >
                  <li className="menu-wrap-item ivu-menu-item ivu-menu-item-active ivu-menu-item-selected" onClick={() => handleMenuClick('/')}>
                    <img
                      src={images.icons.home}
                      alt="home"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Home
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={toggleLanguageDrawer}>
                    <img
                      src={images.icons.lang}
                      alt="language"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Language
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/service')}>
                    <img
                      src={images.icons.service}
                      alt="service"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Service
                  </li>
                  <a
                    href="https://t.me/TreasureNFT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu-wrap-item ivu-menu-item"
                  >
                    <img
                      src={images.social.telegram}
                      alt="Telegram"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Telegram
                  </a>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/download')}>
                    <img
                      src={images.buttons.downloadApp}
                      alt="downloadApp"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Download
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/message')}>
                    <span className="menu-wrap-item__badge ivu-badge">
                      <img
                        src={images.icons.stationMessage}
                        alt="stationMessage"
                        loading="lazy"
                        className="menu-wrap-img menu-wrap-item__imgDot"
                      />
                    </span>
                    Message
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/security')}>
                    <img
                      src={images.ui.tap}
                      alt="securityVerificationTAP"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Security TAP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Drawer */}
      <div className={`drawer-overlay ${languageDrawerVisible ? 'visible' : ''}`} onClick={toggleLanguageDrawer}></div>
      <div className={`language-drawer ${languageDrawerVisible ? 'visible' : ''}`}>
        <div className="language-drawer-header">
          Select Language
        </div>
        <div className="language-drawer-content">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>

      {/* Security Verification Modal */}
      <SecurityVerificationModal 
        isVisible={securityModalVisible} 
        onClose={() => setSecurityModalVisible(false)} 
      />
    </>
  );
};

export default Header; 