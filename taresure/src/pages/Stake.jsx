import Header from '../components/Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Stack.css';

const Stake = () => {



  const navigate = useNavigate();
  const [stakezone, setStakezone] = useState('Exclusive');
  const [tabnavs, settabnavs] = useState('Stake');
   
  return (
    <>
    
    
   <div id="dev-id">
  <div data-v-b02889ae="true" className="pc-class">
    <div data-v-b02889ae="true" className="ivu-layout">
      <div data-v-b02889ae="true" className="content-wrap">
        <div
          data-v-b02889ae="true"
          className="explore"
          footernavitems="[object Object],[object Object],[object Object],[object Object],[object Object]"
        >
          <div className="explore-main">
            <div className="tab-area tab-area-outer ivu-tabs ivu-tabs-no-animation">
              <div className="ivu-tabs-bar">
                <div tabIndex={0} className="ivu-tabs-nav-container">
                  <div
                    className="ivu-tabs-nav-wrap ivu-tabs-nav-scrollable"
                    style={{ position: "relative" }}
                  >
                    <span className="ivu-tabs-nav-prev">
                      <i className="ivu-icon ivu-icon-ios-arrow-back" />
                    </span>
                    <span className="ivu-tabs-nav-next">
                      <i className="ivu-icon ivu-icon-ios-arrow-forward" />
                    </span>
                    <div
                      className="ivu-tabs-nav-scroll overflow-nav-scroll"
                      style={{
                        touchAction: "pan-x",
                        scrollSnapType: "x mandatory",
                        display: "flex",
                        scrollBehavior: "smooth",
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative",
                        overflow: "auto hidden",
                        listStyle: "none",
                        padding: 0,
                        zIndex: 1
                      }}
                    >
                      <div className="ivu-tabs-nav" style={{}}>
                        <div
  className="ivu-tabs-ink-bar"
  style={{
    visibility: 'visible',
    width: 
      tabnavs === 'Stake' ? '72px' :
      tabnavs === 'Polygon' ? '127px' :
      tabnavs === 'Art' ? '55px' :
      tabnavs === 'Collectibles' ? '118px' : '0px',
    left:
      tabnavs === 'Stake' ? '0px' :
      tabnavs === 'Polygon' ? '83px' :
      tabnavs === 'Art' ? '214px' :
      tabnavs === 'Collectibles' ? '282px' : '0px'
  }}
/>
                        <div
                          draggable="false"
                          className={`ivu-tabs-tab  ${ tabnavs === 'Stake' ? 'ivu-tabs-tab-active ivu-tabs-tab-focused' : '' }   `}
                          onClick={() => settabnavs('Stake')}
                        >
                          Stake
                        </div>
                        <div draggable="false" 
                         className={`ivu-tabs-tab  ${ tabnavs === 'Polygon' ? 'ivu-tabs-tab-active ivu-tabs-tab-focused' : '' }   `}
                        onClick={() => settabnavs('Polygon')}>
                          Polygon NFT
                        </div>
                        <div draggable="false" 
                        className={`ivu-tabs-tab  ${ tabnavs === 'Art' ? 'ivu-tabs-tab-active ivu-tabs-tab-focused' : '' }   `}
                          onClick={() => settabnavs('Art')}>
                          Art
                        </div>
                        <div draggable="false" 
                        className={`ivu-tabs-tab  ${ tabnavs === 'Collectibles' ? 'ivu-tabs-tab-active ivu-tabs-tab-focused' : '' }   `}
                        onClick={() => settabnavs('Collectibles')} >
                          Collectibles
                        </div>
                      </div>
                    </div>
                    <object
                      tabIndex={-1}
                      type="text/html"
                      aria-hidden="true"
                      data="about:blank"
                      style={{
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                        padding: 0,
                        margin: 0,
                        opacity: 0,
                        zIndex: -1000,
                        pointerEvents: "none"
                      }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="ivu-tabs-content"
                style={{ transform: "translateX(0%) translateZ(0px)" }}
              >
                <div
                  className="ivu-tabs-tabpane"
                  style={{
  display: tabnavs === 'Stake' ? 'block' : 'none',
  visibility: tabnavs === 'Stake' ? 'visible' : 'hidden'
}}
                >
                  <div data-v-0877c171="true" className="overflow-stake-tabs">
                    <div
                      data-v-0877c171="true"
                      className="overflow-stake-tabs-wrapper"
                    >
                      <div
                        data-v-0877c171="true"
                        className="overflow-stake-tabs-nav"
                      >
                        <div
                          data-v-0877c171="true"
                          className="overflow-stake-tabs-tab-item overflow-stake-tabs-tab-item-active"
                          
                        >
                          {" "}
                          Stake{" "}
                        </div>
                        <div
                          data-v-0877c171="true"
                          className="overflow-stake-tabs-tab-item"
                        >
                          {" "}
                          Collection{" "}
                        </div>
                        <div
                          data-v-0877c171="true"
                          className="overflow-stake-tabs-tab-item"
                        >
                          {" "}
                          My Stake{" "}
                        </div>
                      </div>
                      <div
                        data-v-0877c171="true"
                        className="overflow-stake-tabs-tab-bar"
                      />
                    </div>











                    <div
                      data-v-0877c171="true"
                      className="overflow-stake-tabs-tab-content"
                    >
                      <div
                        data-v-0877c171="true"
                        className="overflow-stake-tabs-tab-content-box"
                      >


















                        <div
                          data-v-4a568f61="true"
                          className="stake-tabs"
                          data-v-0877c171="true"
                        >
                          <div
                            data-v-4a568f61="true"
                            className="stake-tabs-wrapper"
                          >
                            <div
                              data-v-4a568f61="true"
                              className="stake-tabs-nav"
                            >
                              <div
          data-v-4a568f61="true"
          className={`stake-tabs-tab-item ${
            stakezone === 'Exclusive' ? 'stake-tabs-tab-item-active' : ''
          }`}
          onClick={() => setStakezone('Exclusive')}
        >
                                {" "}
                                Exclusive Zone{" "}
                              </div>



                             <div
          data-v-4a568f61="true"
          className={`stake-tabs-tab-item ${
            stakezone === 'Free' ? 'stake-tabs-tab-item-active' : ''
          }`}
          onClick={() => setStakezone('Free')}
        >
                                {" "}
                                Free Zone{" "}
                              </div>
                            </div>
                            <div
                              data-v-4a568f61="true"
                              className="stake-tabs-tab-bar"
                              style={{ width: stakezone === 'Exclusive' ? '110px' : '110px', left: stakezone === 'Exclusive' ? '55px' : '200px', }}
                            />
                          </div>
                          <div
                            data-v-4a568f61="true"
                            className="stake-tabs-tab-content"
                          >
                            <div
                              data-v-4a568f61="true"
                              className="stake-tabs-tab-content-box"
                              style={{ display: stakezone === 'Exclusive' ? 'block' : 'none' }}
                            >
                              <div
                                data-v-15fe7f40="true"
                                className="stake-area"
                                data-v-4a568f61="true"
                              >
                                <div
                                  data-v-15fe7f40="true"
                                  className="discount-category-area"
                                >
                                  <div
                                    data-v-15fe7f40="true"
                                    className="ivu-row-flex ivu-row-flex-middle"
                                    style={{
                                      marginLeft: "-8px",
                                      marginRight: "-8px"
                                    }}
                                  >
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake1
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV1~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_01.png"
                                                alt="discount img 1"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--enable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      199~1000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1.5%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                          fdprocessedid="yklx2p"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake2
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV2~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_02.png"
                                                alt="discount img 2"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--enable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      499~2000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1.8%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                          fdprocessedid="wqvpkx"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake3
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV2~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_03.png"
                                                alt="discount img 3"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--enable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      799~3000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  2.1%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                          fdprocessedid="d8iow"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake4
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV2~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_04.png"
                                                alt="discount img 4"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--enable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      999~4000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  2.5%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                          fdprocessedid="6bwdk"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake5
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV2~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_05.png"
                                                alt="discount img 5"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--disable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      1499~5000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  3%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          disabled=""
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                    <div
                                      data-v-15fe7f40="true"
                                      className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
                                      style={{
                                        paddingLeft: 8,
                                        paddingRight: 8
                                      }}
                                    >
                                      <div
                                        data-v-63ab12b0="true"
                                        className="stake-spec-card"
                                      >
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                          style={{
                                            marginLeft: "-2.5px",
                                            marginRight: "-2.5px"
                                          }}
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-black-PR-16"
                                            >
                                              Exclusive Stake6
                                            </p>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              marginRight: "auto",
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <div
                                              data-v-64cde390="true"
                                              data-v-15fe7f40="true"
                                              className="d-flex"
                                              data-v-63ab12b0="true"
                                            >
                                              <img
                                                data-v-64cde390="true"
                                                src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                                                alt="question-mark"
                                                loading="lazy"
                                                width={24}
                                                height={24}
                                                className="questionIcon"
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{
                                              paddingLeft: "2.5px",
                                              paddingRight: "2.5px"
                                            }}
                                          >
                                            <p
                                              data-v-63ab12b0="true"
                                              className="title-green-PR-14"
                                            >
                                              LV2~LV6
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                          >
                                            <div
                                              data-v-63ab12b0="true"
                                              className="img-box"
                                            >
                                              <img
                                                data-v-63ab12b0="true"
                                                src="https://image.treasurenft.xyz/PC/img/stake_card_img_spec_06.png"
                                                alt="discount img 6"
                                                width={614}
                                                height={200}
                                                className="img"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-15fe7f40="true"
                                          className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
                                          data-v-63ab12b0="true"
                                        >
                                          <div
                                            data-v-15fe7f40="true"
                                            className="ivu-col"
                                            data-v-63ab12b0="true"
                                            style={{ flex: "1 1 0px" }}
                                          >
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Status:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-white-PR-12 status-label status-label--disable"
                                                >
                                                  {" "}
                                                  Open{" "}
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Price Range:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <div
                                                  data-v-15fe7f40="true"
                                                  className="ivu-row-flex ivu-row-flex-middle"
                                                  data-v-63ab12b0="true"
                                                  style={{
                                                    marginLeft: "-4px",
                                                    marginRight: "-4px"
                                                  }}
                                                >
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <img
                                                      data-v-63ab12b0="true"
                                                      src="data:image/png;base64,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"
                                                      alt="icon coin"
                                                      width={14}
                                                      height={14}
                                                      style={{
                                                        display: "block"
                                                      }}
                                                    />
                                                  </div>
                                                  <div
                                                    data-v-15fe7f40="true"
                                                    className="ivu-col"
                                                    data-v-63ab12b0="true"
                                                    style={{
                                                      paddingLeft: 4,
                                                      paddingRight: 4
                                                    }}
                                                  >
                                                    <p
                                                      data-v-63ab12b0="true"
                                                      className="title-black-PR-14"
                                                    >
                                                      1999~6000
                                                    </p>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  Income:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  3.5%
                                                </p>
                                              </div>
                                            </div>
                                            <div
                                              data-v-15fe7f40="true"
                                              className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                                              data-v-63ab12b0="true"
                                            >
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-grey666-PR-14"
                                                >
                                                  handling fee:
                                                </p>
                                              </div>
                                              <div
                                                data-v-15fe7f40="true"
                                                className="ivu-col"
                                                data-v-63ab12b0="true"
                                              >
                                                <p
                                                  data-v-63ab12b0="true"
                                                  className="title-black-PR-14"
                                                >
                                                  1%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <button
                                          data-v-15fe7f40="true"
                                          disabled=""
                                          type="button"
                                          className="ivu-btn ivu-btn-primary ivu-btn-long"
                                          data-v-63ab12b0="true"
                                        >
                                          {" "}
                                          <span> Go to stake </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>






                            <div
                              data-v-4a568f61="true"
                              className="stake-tabs-tab-content-box"
                              style={{ display: stakezone === 'Free' ? 'block' : 'none' }}
                            />


                            <div data-v-15fe7f40="" className="stake-area" data-v-4a568f61="">
  <div data-v-15fe7f40="" className="discount-category-area">
    {/**/}
    <div
      data-v-15fe7f40=""
      className="ivu-row-flex ivu-row-flex-middle"
      style={{ marginLeft: "-8px", marginRight: "-8px" }}
    >
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone1
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_01_1.png"
                  alt="discount img 1"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~2000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone2
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_02_1.png"
                  alt="discount img 2"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,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"
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~3000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1.1%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone3
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_03_1.png"
                  alt="discount img 3"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,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"
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~4000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1.2%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone4
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_04_1.png"
                  alt="discount img 4"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAANxElEQVR4nO2ceZDcxXXHP69/v5md2Znd1R5a3egCB6EDFMu4AB8QKocTO6GQYw7HIbgqFbCNU/kjdowrYFM2LnCVU9gm4Q/bCIixcQFxUYWt4COE2ECMEEggiUMICYlFrLTSas85fr9+qe6ZWa2EVruzM7s6yFfVGmmmf6+7v939+vXr1z85e90/MxZEIFbF/QltgrhhCBvEmEIDWAGBIDBYq8RYRAVT+hrrf1cEwUrpN9TMQeKVKOcicg6wEJgFNANpICxXJQKGgT6gG9gJsk0l3iRqXgDpwlgkEtRYXKHW4ssQEWIiAjEIpiRNLaquLeC+DX2dLdbVz7jfZEwOwjF/qR9Wo3wEuBTRNSDNjF2fY+GccisR9Q3uA30WlV8BPwOem8rKTxVBbQhXAVcreqGMMKL1kO1G2yUol6jha2CewnI/6P3AgXoUMBqmzvIWqHKbVbaBfhe4sM7yj4ULgO8Y5CURbgddUE/htRNUGhwpo3KT4IjhC0BnHepWLWYC/wi8JMjNrk71EFozQdbqWlV9EfgqkKlHpWpEo8F8BZUtoGur1HfvQC0EuVVnnVp9EFg6NW2tCUtUeVCVdeW6TgrVEyTW/XW+iGwCrjlZ2BgTqq6Om1ydJ/N4lQQpEodXYOVpVT2rhmpPKxQ5S0T+V4Qrq11IJ0yQmhiJkjdIMfljr5prnNvTDWfsGpEfieEGrYKkKgjSLynybb9sSV3smRMDw7cV/dJEyx6XICmNlM+D3loy9E5hcihXX/RWdW2awCw4LkFuKAp8Qgx3VDMsT3b4tgh3GOEKtw+rdPuxUmgDe8zm+JETyyqr+sAppm4mDmt+jOi2iHhzZaocjTA45shQt8NtsOjPx3juNIHbAPPzQMwSG2n+mASJLR7xhfjHDJbgByrMrYYf52pw7gQ9QXrKu1Z8506s/HKuuYGVH4SGTxoj5fXuMELnxzmyEL8g/okVuVqqaGjCBOzqP8BAYXhkgzb9UNrTWeZkZlCIowmXrsrVYcLcFyZkvT1K44RFkzyKIAlCK3dXQ47DwfwQa8/8fRZk24j12HptquGcZC/27OHpvTtoSaYn3AIxEEd6dz4XzLfWxDLKjAkDe1RvCzep6Oxq2uLG3L6hfj676mLeN2vxCSGngru3/pafbt/IjPbGCU81StNttjHxTcZEN49mxHijr5xEtM3AlydTsdAY3h7qm8yjdUVvfghjgkmJFKM3mkDbcCtXOZlAhUoC+Sf39Qlv5YlDqMoX3cpdSSYIQ4JEAhMEWVGuf7cycxjyGVHJihVcMgUiClqkqPGnVMieLNU8YVCyseqnIrG4ZNQqLqFcV2udTpvdiHCdGIOYAOOHkso5AqtqkRnZmFmNzfWr5CQxo6ERa+PJC/DnerLKRCwzRUsYNxQIovByiQO0BjdGczLNL97YxkAhx2CxcPw6CAwWcqyYuYDlbXOPm/d3b7/O673dZJIpxlu1M4kkG7t30ZzK1DaarcFK4XIbFL8uy773VWxYfEJFP1iLTLfM7x3qJxcVxrU/jAiDPV184ZK/4rYPrD1u3o8/ehcPbXyMTPsc7Dhy3VbHdVR7KkOxhlHkjGRL8EQcZT4c2oahdo2T7/O+5uMcwY6HyFraU844axx3o+EIermYp6Vh/JOZ9nQGmtuZn20dlyAtj85ayPFy3PJuOd+awfYQKa5BEqlayKnAbRYnsvt3Pe3TBPZsLo8ZyT9e3jpB3aY3TiVSrAm1mDnX0TUVGE2Y63zrirXqP7UwzHBUHLfUoWIBW8iRjyNPlBFTIoyK3KnxHbgO0aKsCjHxOfXgXspC3TRwjRkolpS1Veu/bwyTZBMNZBMpv9I0zQpZ1Nw+rtyzWjtZPnMB2XSG3tywlztQzJfJVUITkHFywwaSYViKLKmT+1NVzwlBatpdBsZQiGP2DffRlx9mZrqZM5rb+MDcM5mXbSUVhHQ2NvvPfBz73k+HCXLDg6zqmDeu/ItmL2VWooGGVIahqOAVTTIIGIwKdPtFocjOvv282tvNG/0H6M0P0pbO0pHK+t19jZ6FJWH5TLtqOP9PXyHH7v79noi/WLqaNZ2L/EhRtRStZTgq8NbgIbb0dNEzPMC+3ACH3NQqFtjWvZObLlrLmnF2//e89BT3vvgEyzsX0phI0pJsZGY66/0+mTDJgqZWPxI/ungVQ1HRl+ncHY+9sYX+fI4lM2bSYEKiyRHVEZbDSapCMgjZcWgf6SDkaxdczppZi9jdt5/dA738575d7OjtZvfAQXJx5Il0KRUmfEWdOeCmBWGSVJAYt9hUmIQgQT4u+qnVNdDLc3HkR06kMbG1footbGpjSUsn7521kMuWrOb6lRfzyI7n+bcXHvfTem62OidaGS1htVEQbop0DfayrG0O6/7wWt/g63/97zzVtZ2CtcxsbKIpmWJBU9vIM0cr0sqqNBFIOX/ozX5DQxB6Qio6r4L+Yp7/6XqVn7620ZO6dul5/MuHr+KPFy7nM//1Qw7kBmlyi3V1Kj1lqg2iysVF33uP/vnnWdE+j7/75b08/ux6FszoZHnHPNpSGT/3naKspKlYZbSsjCvJjVI39VZ2zPc674e/vJfbN6znI4tWcucln6Srb/9kigmrjjArxf4J63e9yDXLLuShj36Wv01l/P9zxTzJRIrWVKPXRQnf62Xn7SiivGvcRrQ2jB8t40aL21uNHm/+3+Wl3pFT8Ktm3rt942KBTCrD9X92Hd/84F/6/E90vUpDoqHapnqE5YDJiT9gAjrSWa779X1s2f8mt1x4Gf/xsc/RM9zPj155ht90beeF/Xt4a+iQr3TRzXsRPzWSZR3kPpNhA7/YvdUrXreqNQQJ/5sj0emVgo0YLOZ5tnsnyTBBT26Qgo39ptitmoW4ZEO55/yUzrbyscWr+IMFy7jq9873Hbmrv4cbf/swD27fyOLmjsmctkTynnu+vAcYf709giTjDbidh7pZ1NLJZUtX89fLLmD1zDNG8rje3Lx/D68efNtX9PW+HrqH++j3m9m83w7s6T/IwHD/KEeJvMNp0pZtZVZji1/a3WhqTqT8qcXilg7OaGpjWesclrfP8xvVCh5/82Xu2fYkj+7YzL7hft7TOtuP5EnYR3scQVsOR5JOHG6AB0Y4kBti72AvgQk4q6WTFR3zuGjOmf7z3I75zEw3jSnTjYrd/Qe8XnN7OdeAivJ19lU6SLC0ZaYfIWO2YOAgz+/b7Uftb97aztaeLnb29XgL3p2wZJMpP+qqh++srY6g/wY+NAkJIygpZettHOc0zxULBEFIc7JkNc9KNzO/qZXOdJPXO23pDBkJ+KMlq/zQPx6e2/cGT+55mSFrOZAf5KDrkKFDnhh3kuLKdPaYakyj03/OSveEiq9TjXjC6aDXayWoYq06V4Mz5FzvuaXd6Qy37Xil92029ezxytQFcLsTzHj/m/zDpdfwrQ994riyv/L0IzyyYT2mY66XGfilPuHtKmdHtaeyzM60lPq7vBCUplJd1s4doYhuOV6kebXwcfnlulWMxOxRdovTBy4ctjM9vgt8bqYV0zGPs1tnjeiQo+2qqdqwuikWYmSzxlN/WKzlhhz+YmKN8rlG2TvTBVdUmDCbTZRLbhAkd0pHjU0BRMgVi2wwiulBeUbqOM1OdXhfEPo7Gxd7jKQGULGP1VMPneooWf48FjgHXVBscBGaD///FBuFkj32sPdeqnFbAbtVYfNJU8ETiZK9sFnQbe7fpnJKL3DXu5eVI6HIXdY57t0FvFBcHJ67Och9CAMnU0VPCJQBE+h9JnTkgPFGlvrz+QEs//oupOQIiHKnsTpgrFJKsVBJwG3Vuj9OL0ikwu2RBlSScRdbRxJ6QJVb35XUlLTz163YA+5eSiUZd2v4iCT2FlT2ngR1nl4Ie6UY3WJyESYfj6Qw1TDa6you4jOO83ptFHGaB5EfhtGAvMldm0/mrDnqdobxYdIjqXS5XIyuN4b7pzIiSuPI+4rGg/MU2uqPayZeD/wlwfuTlvWNJElLgjSHU5jPH4OFkufz0wYuFphbb56cvJZ0Exu6d/HQ9o1jevycV/G1Q/uYkW6asr4S6LISfTpQ40fS0QXJou+PHfWbCFhlhE1TUTl3+OiOjg/kBkphK8fMJczONPuRNolDv/HhX1Rgz1UpbtYxahCGieMVrJuR4Aps8EC9IxALfoqlfRqz9DJxU0KO9+DZK2zMZnTs069QjhP64kLybRz8RFRmi7F3TPeOf6pK8y5hy98j/KSkTsyYLlrjA6fGSkgl6sxdxbyxJOg0WNpUbhTXphFOxp4dE7/1bM03ROwNXtgp7DsSf72Ub0w0/4QJcm9e0bD4XQ2LV77jUtWpAH/SIleq5TtShe+runvz7n6niR5QE78f5JVTiJ5XUX2/Kg9U+2D1b14oXYJ9BsN5IOuqfn4aUVYE94hwrgu5nkzJtby7YxjkWhuLC3R+rbxunlBCRkPhNYv9OPA35bdZTQp1ePsLD6tlBRLfjNjBk0A3DaJys6IrFPtQrcJqJkhKdxtyKtEtYM8Gub383rHphivzm8AyhVtcrFc9RnQd30DlbaY9IvJFI3I28DngyfrJHxNPKdwgKsvKL3faXU/hU/MOM+GgWO60oneCnGdE/lRVLwXe6/apNUp39z6fRfVXiPwM4bmpnNbT8Ra85xGeF+VWVeYgrAS/qkz8NYHCLpStIJsQfQG0a1p0HfB/297i0ZAnUcgAAAAASUVORK5CYII="
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~6000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1.3%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone5
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_05_1.png"
                  alt="discount img 5"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,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"
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~10000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1.4%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
      <div
        data-v-15fe7f40=""
        className="ivu-col margin-bottom-15 ivu-col-span-xs-24 ivu-col-span-sm-12 ivu-col-span-md-8 ivu-col-span-lg-6 ivu-col-span-xl-4 ivu-col-span-xxl-4"
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        <div data-v-63ab12b0="" className="stake-spec-card">
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
            style={{ marginLeft: "-2.5px", marginRight: "-2.5px" }}
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-black-PR-16">
                Free Zone6
              </p>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{
                marginRight: "auto",
                paddingLeft: "2.5px",
                paddingRight: "2.5px"
              }}
            >
              <div
                data-v-64cde390=""
                data-v-15fe7f40=""
                className="d-flex"
                data-v-63ab12b0=""
              >
                <img
                  data-v-64cde390=""
                  src="https://image.treasurenft.xyz/icon/icon_question-mark_01.svg"
                  alt="question-mark"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="questionIcon"
                />
                {/**/}
              </div>
            </div>
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ paddingLeft: "2.5px", paddingRight: "2.5px" }}
            >
              <p data-v-63ab12b0="" className="title-green-PR-14">
                LV1~LV6
              </p>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
              <div data-v-63ab12b0="" className="img-box">
                <img
                  data-v-63ab12b0=""
                  src="https://image.treasurenft.xyz/PC/img/stake_card_img_free_06_1.png"
                  alt="discount img 6"
                  width={614}
                  height={200}
                  className="img"
                />
                {/**/}
              </div>
            </div>
          </div>
          <div
            data-v-15fe7f40=""
            className="ivu-row-flex ivu-row-flex-middle margin-bottom-10"
            data-v-63ab12b0=""
          >
            <div
              data-v-15fe7f40=""
              className="ivu-col"
              data-v-63ab12b0=""
              style={{ flex: "1 1 0px" }}
            >
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Status:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p
                    data-v-63ab12b0=""
                    className="title-white-PR-12 status-label status-label--enable"
                  >
                    {" "}
                    Open{" "}
                  </p>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Price Range:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <div
                    data-v-15fe7f40=""
                    className="ivu-row-flex ivu-row-flex-middle"
                    data-v-63ab12b0=""
                    style={{ marginLeft: "-4px", marginRight: "-4px" }}
                  >
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <img
                        data-v-63ab12b0=""
                        src="data:image/png;base64,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"
                        alt="icon coin"
                        width={14}
                        height={14}
                        style={{ display: "block" }}
                      />
                    </div>
                    <div
                      data-v-15fe7f40=""
                      className="ivu-col"
                      data-v-63ab12b0=""
                      style={{ paddingLeft: 4, paddingRight: 4 }}
                    >
                      <p data-v-63ab12b0="" className="title-black-PR-14">
                        50~20000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between margin-bottom-10"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Income:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    1.5%
                  </p>
                </div>
              </div>
              {/**/}
              <div
                data-v-15fe7f40=""
                className="ivu-row-flex ivu-row-flex-middle ivu-row-flex-space-between"
                data-v-63ab12b0=""
              >
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-grey666-PR-14">
                    Number of days to stake:
                  </p>
                </div>
                <div data-v-15fe7f40="" className="ivu-col" data-v-63ab12b0="">
                  <p data-v-63ab12b0="" className="title-black-PR-14">
                    3~30 day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            data-v-15fe7f40=""
            type="button"
            className="ivu-btn ivu-btn-primary ivu-btn-long"
            data-v-63ab12b0=""
          >
            {/**/} {/**/} <span> Go to stake </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  {/**/}
</div>








                          </div>
                        </div>





                      </div>



 <div
  data-v-0877c171=""
  className="overflow-stake-tabs-tab-content-box"
  style={{ display: "none" }}
>
  <div data-v-84448a0c="" className="memberNFT" data-v-0877c171="">
    <div data-v-84448a0c="" className="product-area">
      <div data-v-84448a0c="" className="margin-bottom-15">
        <button
          data-v-84448a0c=""
          type="button"
          className="recharge-btn ivu-btn ivu-btn-primary ivu-btn-long"
          fdprocessedid="7n10yp"
        >
          {/**/} {/**/} <span>Deposit</span>
        </button>
      </div>
      <div data-v-84448a0c="" className="noData">
        <img
          data-v-84448a0c=""
          src="https://image.treasurenft.xyz/icon/icon_noData_01.svg"
          alt="NoData"
          loading="lazy"
          className="noData__img"
        />
        <p
          data-v-84448a0c=""
          className="title-black-PSB-16 font-weight-700 margin-top-30"
        >
          No Data Available
        </p>
        <p
          data-v-84448a0c=""
          className="title-black-PSB-16 font-weight-700 margin-bottom-10"
        >
          GMT+05:00 2025-05-15 14:01:44
        </p>
      </div>
    </div>
    <div data-v-5a8f2018="" data-v-84448a0c="">
      {/**/}
      {/**/}
    </div>
    <div data-v-7a784836="" data-v-84448a0c="">
      {/**/}
      {/**/}
      {/**/}
    </div>
    <div data-v-04c6494e="" data-v-84448a0c="">
      {/**/}
      {/**/}
    </div>
    {/**/}
    <div data-v-e2c38512="" data-v-84448a0c="">
      {/**/}
      {/**/}
      {/**/}
    </div>
    {/**/}
    {/**/}
  </div>
</div>

<div
  data-v-0877c171=""
  className="overflow-stake-tabs-tab-content-box"
  style={{display:'none'}}
>
  <div data-v-53d5c2a8="" className="my-pledge" data-v-0877c171="">
    <div data-v-53d5c2a8="" className="noData">
      <img
        data-v-53d5c2a8=""
        src="https://image.treasurenft.xyz/icon/icon_noData_01.svg"
        alt="NoData"
        loading="lazy"
        className="noData__img"
      />
      <p
        data-v-53d5c2a8=""
        className="title-black-PSB-16 font-weight-700 margin-top-30"
      >
        No Data Available
      </p>
      <p data-v-53d5c2a8="" className="title-black-PSB-16 font-weight-700">
        GMT+05:00 2025-05-15 14:37:13
      </p>
    </div>
  </div>
</div>

                    </div>
                  </div>
                </div>
                <div
                  className="ivu-tabs-tabpane"
                 
style={{
  display: tabnavs === 'Polygon' ? 'block' : 'none',
  visibility: tabnavs === 'Polygon' ? 'visible' : 'hidden'
}}
                 >




<div
  className="list-area ivu-row"
  style={{ marginLeft: "-8px", marginRight: "-8px" }}
>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145620_NoxiousAudience_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145620_NoxiousAudience_banner_compre.jpg"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145616_NoxiousAudience_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145616_NoxiousAudience_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            Noxious Audience{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145353_Banner-MB.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145353_Banner-MB_compre.jpg"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145338_PIXER%20Eternity-LOGO.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145338_PIXER Eternity-LOGO_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            PixerEternity 2022 x RVP{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            The Crypto Lucky Girl{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
</div>






                </div>


                <div
                  className="ivu-tabs-tabpane"
                   style={{
  display: tabnavs === 'Art' ? 'block' : 'none',
  visibility: tabnavs === 'Art' ? 'visible' : 'hidden'
}}
                >





<div
  className="list-area ivu-row"
  style={{ marginLeft: "-8px", marginRight: "-8px" }}
>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230615122322_%E6%89%8B%E6%9C%BA.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230615122322_手机_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230615122301_Frame%2017.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230615122301_Frame 17_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Penguin Pals </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145542_GiffgaffApeClub_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145542_GiffgaffApeClub_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145535_GiffgaffApeClub_logo_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            Giffgaff Ape Club{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217163506_PunkCat_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217163506_PunkCat_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> PunkCat </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217163907_PixelsPunk_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217163907_PixelsPunk_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Pixels Punk </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145521_Wild%20Girl_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145521_Wild Girl_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145514_WildGirl_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145514_WildGirl_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Wild Girl </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230602154453_%E6%89%8B%E6%9C%BA%E8%83%8C%E6%99%AF.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230602154453_手机背景_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230602154427_%E5%A4%B4%E5%83%8F.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230602154427_头像_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            PEPE Frog Nobility{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145435_YoungLady_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145435_YoungLady_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> YoungLady </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145712_CoolAPE_banner1.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145712_CoolAPE_banner1_compre.jpg"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Cool APE </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
</div>









                </div>




                <div
                  className="ivu-tabs-tabpane"
 style={{
  display: tabnavs === 'Collectibles' ? 'block' : 'none',
  visibility: tabnavs === 'Collectibles' ? 'visible' : 'hidden'
}}
                >



<div
  className="list-area ivu-row"
  style={{ marginLeft: "-8px", marginRight: "-8px" }}
>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230615122322_%E6%89%8B%E6%9C%BA.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230615122322_手机_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230615122301_Frame%2017.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230615122301_Frame 17_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Penguin Pals </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145353_Banner-MB.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145353_Banner-MB_compre.jpg"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145338_PIXER%20Eternity-LOGO.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145338_PIXER Eternity-LOGO_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            PixerEternity 2022 x RVP{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217163506_PunkCat_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217163506_PunkCat_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145557_PunkCat_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> PunkCat </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145459_TheCryptoLuckyGirl_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145453_TheCryptoLuckyGirl_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            The Crypto Lucky Girl{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217163907_PixelsPunk_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217163907_PixelsPunk_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145650_PixelsPunk_logo_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Pixels Punk </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230602154453_%E6%89%8B%E6%9C%BA%E8%83%8C%E6%99%AF.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230602154453_手机背景_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230602154427_%E5%A4%B4%E5%83%8F.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230602154427_头像_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text">
            {" "}
            PEPE Frog Nobility{" "}
          </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145435_YoungLady_banner.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145435_YoungLady_banner_compre.png"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145424_YoungLady_logo_compre.jpg"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> YoungLady </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    className="ivu-col ivu-col-span-xs-12 ivu-col-span-sm-12 ivu-col-span-md-12 ivu-col-span-lg-8"
    style={{ paddingLeft: 8, paddingRight: 8 }}
  >
    <div className="explore-card-div">
      <div>
        <picture>
          <source
            type="image/avif"
            srcSet="https://treasurefun.xyz/userdata/img/20230217145712_CoolAPE_banner1.avif"
          />
          <img
            alt="img"
            loading="lazy"
            className="explore-card-BIGimg"
            src="https://treasurefun.xyz/userdata/img/20230217145712_CoolAPE_banner1_compre.jpg"
          />
        </picture>
        <div className="explore-card-title">
          <div className="explore-card-small-div">
            <picture>
              <source
                type="image/avif"
                srcSet="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo.avif"
              />
              <img
                alt="img"
                loading="lazy"
                className="explore-card-smallImg"
                src="https://treasurefun.xyz/userdata/img/20230217145709_CoolAPE_logo_compre.png"
              />
            </picture>
          </div>
          <p className="title-black-PR-14 explore-card-text"> Cool APE </p>
          <img
            src="https://image.treasurenft.xyz/Treasure2.5/icon/icon_check_ok_02.png"
            alt="icon"
            loading="lazy"
            className="explore-card-icon"
          />
        </div>
      </div>
    </div>
  </div>
</div>





                  
                </div>











              </div>
              <div
                className="ivu-tabs-context-menu"
                style={{ top: 0, left: 0 }}
              >
                <div className="ivu-dropdown">
                  <div className="ivu-dropdown-rel" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          data-v-b02889ae="true"
          src="https://image.treasurenft.xyz/btn/btn_help_01.png"
          alt="helpIcon"
          loading="lazy"
          className="helpIconStyle"
          style={{ display: "none" }}
        />
      </div>
    </div>
    <div data-v-d27ce888="true" data-v-b02889ae="true" />
    <div data-v-d9d51de4="true" data-v-b02889ae="true" />
  </div>
</div>

    
    </>
  );
};

export default Stake; 