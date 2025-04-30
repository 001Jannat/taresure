import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import '../styles/Home.css';
import Card from '../components/Card';
import Bid from '../components/Bid';
import Featured from '../components/Featured';
import CreateSell from '../components/CreateSell';
import Discover from '../components/Discover';
import NavFooter from '../components/NavFooter';
import TUFTModal from '../components/TUFTModal';

const Home = () => {
  const [showTUFTModal, setShowTUFTModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <div className='ivu-modal-content'>
          <div className="ad-banner-wrap">
            <span className="title-black-1927B-32 ad-banner-text">
              EARN WITH{" "}
              <span className="specialText-1927B-42">
                {" "}
                30%
              </span>
              <span className="specialText-1927B-32">
                {" "}
                MONTHLY{" "}
              </span>
            </span>
          </div>
          <div className="product-btn-box">
            <button 
              type="button" 
              className="ivu-btn ivu-btn-primary"
              onClick={() => setShowTUFTModal(true)}
            >
              <span>
                <p className="title-white-PR-20 font-weight-600">
                  Get TUFT
                </p>
              </span>
            </button>
            <button 
              type="button" 
              className="ivu-btn ivu-btn-primary"
              onClick={() => navigate('/auction')}
            >
              <span>
                <p className="title-white-PR-20 font-weight-600">
                  Auction
                </p>
              </span>
            </button>
          </div>

          {/* test */}
          <div data-v-cc0c96d0="" className="ivu-row">
            <div
              data-v-cc0c96d0=""
              className="ivu-col ivu-col-span-sm-24 ivu-col-span-md-12"
            >
            </div>
            <div data-v-cc0c96d0="" className="video-block">
              <div data-v-cc0c96d0="" className="index-video-wrapper">
                <div
                  data-v-cc0c96d0=""
                  data-aos="zoom-out"
                  data-aos-duration={1000}
                  className="index-video-mv aos-init aos-animate"
                >
                  <video
                    data-v-cc0c96d0=""
                    src="https://treasurefun.xyz/userdata/film/073f4bc8-1258-4696-9f32-5179ca15ed87.mov"
                    poster="https://treasurefun.xyz/userdata/img/20250224123728_IMG_6954.avif"
                    loop="loop"
                    controls="controls"
                    webkit-playsinline="true"
                    playsInline="true"
                    preload="none"
                    className="index-video"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* card */}
          <Card />

          {/*explore*/}
          <div className="explanationArea">
            <div className="title-black-1927B-30">
              EXPLORE, DISCOVER AND EARN BIG WITH ONE OF THE TOP WEB3 NFT MARKETPLACES IN THE WORLD
            </div>

            <div className="text-area">
              <LazyImage
                src="https://image.treasurenft.xyz/icon/icon_cardTick_01.png"
                alt="Multi-Reward"
                className="icon"
              />
              <div>
                <p className="title-black-PR-20">
                  Multi-Reward
                </p>
                <p className="title-black-PR-14">
                  Treasure Fun leverages a proprietary AI-powered algorithmic trading model, and provides a dual earnings mechanism with trading rewards as well as referral rewards.
                </p>
              </div>
            </div>

            <div className="text-area">
              <LazyImage
                src="https://image.treasurenft.xyz/icon/icon_histogram_01.png"
                alt="Earn Future Value"
                className="icon"
              />
              <div>
                <p className="title-black-PR-20">
                  Earn Future Value
                </p>
                <p className="title-black-PR-14">
                  Treasure Fun reduces the entry hurdles of the NFT market and expands the boundaries of the NFT collection & trading through its innovative AI algorithmic trading process and rewarding financial model.
                </p>
              </div>
            </div>
          </div>

          {/* bid */}
          <Bid />
          {/* featured */}
          <Featured />

        </div>
        {/* create sell */}
        <CreateSell />
        {/* discover */}
        <div className="explanationArea">
          <Discover />
        </div>
        {/* footer */}
        <Footer />
        
        {/* <div className="help-button">
          <LazyImage
            src="https://image.treasurenft.xyz/btn/btn_help_01.png"
            alt="Help"
            className="helpIconStyle"
          />
         
        </div> */}
        <NavFooter />
      </div>

      {/* TUFT Modal */}
      <TUFTModal 
        isVisible={showTUFTModal} 
        onClose={() => setShowTUFTModal(false)} 
      />
    </div>
  );
};

export default Home; 