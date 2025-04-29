import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import '../styles/Header.css';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [airdropMenuVisible, setAirdropMenuVisible] = useState(false);
  const [languageDrawerVisible, setLanguageDrawerVisible] = useState(false);
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
    if (path === '/message' || path === '/security') {
      navigate('/login');
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
        <div className="header pc-class">
          <div className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between">
            <div className="header-logo cursor-pointer ivu-col ivu-col-span-xs-8 ivu-col-span-sm-8 ivu-col-span-md-4 ivu-col-span-lg-4 ivu-col-span-xl-4">
              <Link to="/">
                <img
                  src="https://image.treasurenft.xyz/img/img_logo_home.png"
                  alt="logo"
                  loading="lazy"
                />
              </Link>
            </div>

            <div className="header-right-section ivu-col">
              <div className="header-btns setMiddle margin-right-18">
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
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_home_01.png"
                      alt="home"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Home
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={toggleLanguageDrawer}>
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_header_lang.png"
                      alt="language"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Language
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/service')}>
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/icon/icon_header_servie.png"
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
                      src="https://image.treasurenft.xyz/NewVer2212/logo/icon_tg_color.png"
                      alt="Telegram"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Telegram
                  </a>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/download')}>
                    <img
                      src="https://image.treasurenft.xyz/NewVer2212/btn/btn_downloadapp_01_mb.png"
                      alt="downloadApp"
                      loading="lazy"
                      className="menu-wrap-img"
                    />
                    Download
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/message')}>
                    <span className="menu-wrap-item__badge ivu-badge">
                      <img
                        src="https://image.treasurenft.xyz/icon/icon_stationMessage_01.svg"
                        alt="stationMessage"
                        loading="lazy"
                        className="menu-wrap-img menu-wrap-item__imgDot"
                      />
                    </span>
                    Message
                  </li>
                  <li className="menu-wrap-item ivu-menu-item" onClick={() => handleMenuClick('/security')}>
                    <img
                      src="https://image.treasurenft.xyz/PC/img/iconTap.png"
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
    </>
  );
};

export default Header; 